#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const blogDir = path.join(root, "src/pages/blog");
const indexPath = path.join(blogDir, "index.astro");
const llmsPath = path.join(root, "public/llms.txt");
const astroConfigPath = path.join(root, "astro.config.mjs");
const siteUrl = "https://www.corduroy.co.jp";
const strict = process.argv.includes("--strict");
const jsonOutput = process.argv.includes("--json");

const read = (file) => fs.readFileSync(file, "utf8");
const exists = (file) => fs.existsSync(file);

function uniq(values) {
  return [...new Set(values)];
}

function getBlogFiles() {
  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => name.endsWith(".astro") && name !== "index.astro")
    .map((name) => ({
      slug: name.replace(/\.astro$/, ""),
      file: path.join(blogDir, name),
    }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

function getIndexEntries() {
  const source = read(indexPath);
  const blocks = source.match(/\{\s*slug:\s*'[^']+'[\s\S]*?\n\s*\}/g) ?? [];
  return blocks.map((block) => {
    const getString = (key) => block.match(new RegExp(`${key}:\\s*'([^']*)'`))?.[1] ?? "";
    return {
      slug: getString("slug"),
      date: getString("date"),
      category: getString("category"),
      title: getString("title"),
      thumbnail: getString("thumbnail"),
      external: /external:\s*true/.test(block),
      featured: /featured:\s*true/.test(block),
    };
  });
}

function getSitemapExclusions() {
  if (!exists(astroConfigPath)) return [];
  const source = read(astroConfigPath);
  return uniq([...source.matchAll(/['"`](https:\/\/www\.corduroy\.co\.jp\/blog\/[^'"`]+\/)['"`]/g)].map((match) => match[1]));
}

function firstMatch(source, patterns) {
  for (const pattern of patterns) {
    const match = source.match(pattern);
    if (match) return match[1];
  }
  return "";
}

function parseArticle({ slug, file }) {
  const source = read(file);
  const canonical = `${siteUrl}/blog/${slug}/`;
  const rawNoindexMeta = /<meta[^>]+name=["']robots["'][^>]+content=["']noindex,nofollow["']/i.test(source);
  const layoutMatch = source.match(/<Layout[\s\S]*?>/);
  const layoutTag = layoutMatch?.[0] ?? "";
  const layoutNoindex = /\bnoindex(?:=|\s|>)/.test(layoutTag);
  const layoutNoindexFalse = /\bnoindex=\{false\}/.test(layoutTag);
  const layoutNoindexTrue = /\bnoindex(?:=\{true\}|\s|>)/.test(layoutTag);
  const layoutNoindexInversePublished = /\bnoindex=\{!isPublished\}/.test(layoutTag);
  const isPublished = firstMatch(source, [/const\s+isPublished\s*=\s*(true|false)/]);
  const effectiveNoindex =
    rawNoindexMeta ||
    layoutNoindexTrue ||
    (layoutNoindexInversePublished && isPublished !== "true") ||
    (layoutNoindex && !layoutNoindexFalse && !layoutNoindexInversePublished && isPublished !== "true");
  const publishedAt = firstMatch(source, [
    /const\s+publishedAt\s*=\s*["'](\d{4}-\d{2}-\d{2})["']/,
    /datePublished["']?\s*:\s*["'](\d{4}-\d{2}-\d{2})["']/,
    /"datePublished"\s*:\s*"(\d{4}-\d{2}-\d{2})"/,
  ]);
  const modifiedAt = firstMatch(source, [
    /const\s+modifiedAt\s*=\s*["'](\d{4}-\d{2}-\d{2})["']/,
    /dateModified["']?\s*:\s*["'](\d{4}-\d{2}-\d{2})["']/,
    /"dateModified"\s*:\s*"(\d{4}-\d{2}-\d{2})"/,
  ]);
  const title = firstMatch(source, [
    /const\s+title\s*=\s*"([^"]+)"/,
    /title=["']([^"']+)["']/,
  ]);
  const description = firstMatch(source, [
    /const\s+description\s*=\s*"([^"]+)"/,
    /description=["']([^"']+)["']/,
  ]);
  const canonicalInFile = source.includes(canonical);
  const hasBlogPosting = /["@]type["']?\s*:\s*["']BlogPosting["']/.test(source) || /"@type":\s*"BlogPosting"/.test(source);
  const hasBreadcrumb = /["@]type["']?\s*:\s*["']BreadcrumbList["']/.test(source) || /"@type":\s*"BreadcrumbList"/.test(source);
  const hasFaqHtml = /<details\b/i.test(source);
  const hasFaqSchema = /["@]type["']?\s*:\s*["']FAQPage["']/.test(source) || /"@type":\s*"FAQPage"/.test(source);
  const internalLinks = uniq(
    [...source.matchAll(/href=["']\/blog\/([^"'#?]+)\/?["']/g)]
      .map((match) => match[1].replace(/\/$/, ""))
      .filter((target) => target && target !== slug),
  );
  const generationResidue = [...source.matchAll(/<\/(?:content|invoke)>|<(?:content|invoke)\b/g)].map((match) => match[0]);
  const todoMarkers = [...source.matchAll(/\[(?:要確認|TODO|FIXME)\]|TODO|FIXME/g)].map((match) => match[0]);

  return {
    slug,
    file,
    canonical,
    source,
    noindex: effectiveNoindex,
    rawNoindexMeta,
    layoutNoindex,
    effectiveNoindex,
    isPublished,
    publishedAt,
    modifiedAt,
    title,
    description,
    canonicalInFile,
    hasBlogPosting,
    hasBreadcrumb,
    hasFaqHtml,
    hasFaqSchema,
    internalLinks,
    generationResidue,
    todoMarkers,
  };
}

function addIssue(issues, level, slug, code, message) {
  issues.push({ level, slug, code, message });
}

const files = getBlogFiles();
const articles = files.map(parseArticle);
const articleBySlug = new Map(articles.map((article) => [article.slug, article]));
const indexEntries = getIndexEntries().filter((entry) => !entry.external && !entry.slug.startsWith("/"));
const indexBySlug = new Map(indexEntries.map((entry) => [entry.slug, entry]));
const llms = exists(llmsPath) ? read(llmsPath) : "";
const sitemapExclusions = getSitemapExclusions();
const sitemapExclusionSet = new Set(sitemapExclusions);
const issues = [];

for (const entry of indexEntries) {
  const article = articleBySlug.get(entry.slug);
  if (!article) {
    addIssue(issues, "critical", entry.slug, "INDEX_FILE_MISSING", "Listed in blog index but the article file is missing.");
    continue;
  }
  if (article.isPublished === "false") {
    addIssue(issues, "critical", entry.slug, "DRAFT_LISTED_IN_INDEX", "Listed in blog index while isPublished=false.");
  }
  if (!entry.date) {
    addIssue(issues, "warning", entry.slug, "INDEX_DATE_MISSING", "Blog index entry has no date.");
  } else if (article.publishedAt && entry.date !== article.publishedAt) {
    addIssue(issues, "warning", entry.slug, "INDEX_DATE_MISMATCH", `Blog index date ${entry.date} differs from article datePublished ${article.publishedAt}.`);
  }
}

for (const article of articles) {
  const inIndex = indexBySlug.has(article.slug);
  const inLlms = llms.includes(`/blog/${article.slug}/`);
  const excludedFromSitemap = sitemapExclusionSet.has(article.canonical);
  const draftFlag = article.isPublished === "false";
  const publishedFlag = article.isPublished === "true";

  if (draftFlag && !article.noindex) {
    addIssue(issues, "critical", article.slug, "DRAFT_NOINDEX_MISSING", "isPublished=false but no noindex guard was found.");
  }
  if (article.noindex && !excludedFromSitemap) {
    addIssue(issues, "critical", article.slug, "NOINDEX_NOT_EXCLUDED_FROM_SITEMAP", "noindex article is not excluded from sitemap filter.");
  }
  if (!article.noindex && !inIndex && !draftFlag) {
    addIssue(issues, "warning", article.slug, "INDEXABLE_NOT_LISTED", "Indexable article is not listed in blog index.");
  }
  if (publishedFlag && !inIndex) {
    addIssue(issues, "warning", article.slug, "PUBLISHED_NOT_LISTED", "isPublished=true but not listed in blog index.");
  }
  if (!article.publishedAt) {
    addIssue(issues, "warning", article.slug, "DATE_PUBLISHED_MISSING", "datePublished or publishedAt was not found.");
  }
  if (!article.modifiedAt) {
    addIssue(issues, "warning", article.slug, "DATE_MODIFIED_MISSING", "dateModified or modifiedAt was not found.");
  }
  if (!article.canonicalInFile) {
    addIssue(issues, "warning", article.slug, "CANONICAL_MISSING", "Canonical URL was not found in article source.");
  }
  if (!article.hasBlogPosting && !article.noindex) {
    addIssue(issues, "warning", article.slug, "BLOGPOSTING_SCHEMA_MISSING", "Indexable article has no BlogPosting schema.");
  }
  if (!article.hasBreadcrumb && !article.noindex) {
    addIssue(issues, "warning", article.slug, "BREADCRUMB_SCHEMA_MISSING", "Indexable article has no BreadcrumbList schema.");
  }
  if (article.hasFaqHtml && !article.hasFaqSchema && !article.noindex) {
    addIssue(issues, "warning", article.slug, "FAQ_SCHEMA_MISSING", "FAQ HTML exists but FAQPage schema was not found.");
  }
  if (!inLlms && !article.noindex) {
    addIssue(issues, "warning", article.slug, "LLMS_MISSING", "Indexable article is not listed in llms.txt.");
  }
  if (article.internalLinks.length < 3 && !article.noindex) {
    addIssue(issues, "warning", article.slug, "LOW_INTERNAL_LINKS", `Only ${article.internalLinks.length} unique internal blog links found; target is 3+.`);
  }
  if (article.generationResidue.length > 0) {
    addIssue(issues, "warning", article.slug, "GENERATION_RESIDUE", `Generation residue found: ${uniq(article.generationResidue).join(", ")}.`);
  }
  if (article.todoMarkers.length > 0 && !article.noindex) {
    addIssue(issues, "warning", article.slug, "TODO_MARKERS", `Visible TODO/review markers found: ${uniq(article.todoMarkers).join(", ")}.`);
  }
}

const missingFromIndex = articles
  .filter((article) => !indexBySlug.has(article.slug))
  .map((article) => article.slug);

const grouped = {
  critical: issues.filter((issue) => issue.level === "critical"),
  warning: issues.filter((issue) => issue.level === "warning"),
};

function getStatus(article, inIndex) {
  if (article.effectiveNoindex || article.isPublished === "false") return "draft";
  if (inIndex) return "published";
  return "unlisted";
}

const articleSummaries = articles.map((article) => {
  const inIndex = indexBySlug.has(article.slug);
  const articleIssues = issues.filter((issue) => issue.slug === article.slug);
  return {
    slug: article.slug,
    status: getStatus(article, inIndex),
    inIndex,
    inLlms: llms.includes(`/blog/${article.slug}/`),
    excludedFromSitemap: sitemapExclusionSet.has(article.canonical),
    effectiveNoindex: article.effectiveNoindex,
    rawNoindexMeta: article.rawNoindexMeta,
    layoutNoindex: article.layoutNoindex,
    isPublished: article.isPublished || null,
    publishedAt: article.publishedAt || null,
    modifiedAt: article.modifiedAt || null,
    title: article.title || null,
    internalLinkCount: article.internalLinks.length,
    issueCounts: {
      critical: articleIssues.filter((issue) => issue.level === "critical").length,
      warning: articleIssues.filter((issue) => issue.level === "warning").length,
    },
    issueCodes: articleIssues.map((issue) => issue.code),
  };
});

if (jsonOutput) {
  console.log(JSON.stringify({
    version: 1,
    siteUrl,
    generatedAt: new Date().toISOString(),
    counts: {
      articles: articles.length,
      blogIndexEntries: indexEntries.length,
      missingFromIndex: missingFromIndex.length,
      sitemapExclusions: sitemapExclusions.length,
      critical: grouped.critical.length,
      warning: grouped.warning.length,
    },
    missingFromIndex,
    sitemapExclusions,
    issues,
    articles: articleSummaries,
  }, null, 2));
  if (strict && grouped.critical.length > 0) {
    process.exitCode = 1;
  }
  process.exit();
}

console.log("Blog audit");
console.log("==========");
console.log(`Articles: ${articles.length}`);
console.log(`Blog index entries: ${indexEntries.length}`);
console.log(`Missing from index: ${missingFromIndex.length}`);
console.log(`Sitemap exclusions: ${sitemapExclusions.length}`);
console.log(`Critical: ${grouped.critical.length}`);
console.log(`Warnings: ${grouped.warning.length}`);

if (missingFromIndex.length > 0) {
  console.log("");
  console.log("Articles not listed in index:");
  for (const slug of missingFromIndex) console.log(`- ${slug}`);
}

for (const level of ["critical", "warning"]) {
  if (grouped[level].length === 0) continue;
  console.log("");
  console.log(`${level.toUpperCase()}`);
  for (const issue of grouped[level]) {
    console.log(`- ${issue.slug}: ${issue.message}`);
  }
}

if (strict && grouped.critical.length > 0) {
  process.exitCode = 1;
}
