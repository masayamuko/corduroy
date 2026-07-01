#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import process from "node:process";

const args = process.argv.slice(2);
const jsonOutput = args.includes("--json");
const limitArg = args.find((arg) => arg.startsWith("--limit="));
const limitIndex = args.indexOf("--limit");
const limit = Number.parseInt(
  limitArg?.split("=")[1] ?? (limitIndex >= 0 ? args[limitIndex + 1] : "10"),
  10,
);

const auditJson = execFileSync(process.execPath, ["scripts/blog-audit.mjs", "--json"], {
  encoding: "utf8",
  stdio: ["ignore", "pipe", "inherit"],
});
const audit = JSON.parse(auditJson);

const issuesBySlug = new Map();
for (const issue of audit.issues) {
  const list = issuesBySlug.get(issue.slug) ?? [];
  list.push(issue);
  issuesBySlug.set(issue.slug, list);
}

const priorityWarningCodes = new Set([
  "INDEX_DATE_MISMATCH",
  "DATE_PUBLISHED_MISSING",
  "DATE_MODIFIED_MISSING",
  "TODO_MARKERS",
  "LOW_INTERNAL_LINKS",
  "LLMS_MISSING",
]);

function articleWithIssues(article) {
  const issues = issuesBySlug.get(article.slug) ?? [];
  return {
    ...article,
    criticalIssues: issues.filter((issue) => issue.level === "critical"),
    warningIssues: issues.filter((issue) => issue.level === "warning"),
  };
}

function scoreNearPublish(article) {
  let score = 0;
  if (article.status === "draft") score += 25;
  if (article.publishedAt) score += 10;
  if (article.modifiedAt) score += 10;
  if (article.title) score += 10;
  if (article.internalLinkCount >= 3) score += 15;
  score -= article.warningIssues.length * 3;
  return score;
}

const enriched = audit.articles.map(articleWithIssues);
const blockedCritical = enriched
  .filter((article) => article.criticalIssues.length > 0)
  .sort((a, b) => b.criticalIssues.length - a.criticalIssues.length || a.slug.localeCompare(b.slug));

const nearPublish = enriched
  .filter((article) => article.status !== "published")
  .filter((article) => !article.inIndex)
  .filter((article) => article.criticalIssues.length === 0)
  .map((article) => ({ ...article, score: scoreNearPublish(article) }))
  .sort((a, b) => b.score - a.score || a.warningIssues.length - b.warningIssues.length || a.slug.localeCompare(b.slug))
  .slice(0, Number.isNaN(limit) ? 10 : limit);

const qualityFixes = enriched
  .filter((article) => article.status === "published")
  .filter((article) => article.warningIssues.some((issue) => priorityWarningCodes.has(issue.code)))
  .sort((a, b) => b.warningIssues.length - a.warningIssues.length || a.slug.localeCompare(b.slug))
  .slice(0, Number.isNaN(limit) ? 10 : limit);

const staleDrafts = enriched
  .filter((article) => article.status === "draft")
  .filter((article) => !article.inIndex)
  .sort((a, b) => a.slug.localeCompare(b.slug));

const visibleNoindex = enriched
  .filter((article) => article.effectiveNoindex)
  .filter((article) => article.inIndex)
  .sort((a, b) => a.slug.localeCompare(b.slug));

const queue = {
  generatedAt: new Date().toISOString(),
  counts: {
    blockedCritical: blockedCritical.length,
    nearPublish: nearPublish.length,
    qualityFixes: qualityFixes.length,
    staleDrafts: staleDrafts.length,
    visibleNoindex: visibleNoindex.length,
  },
  blockedCritical,
  nearPublish,
  qualityFixes,
  staleDrafts,
  visibleNoindex,
};

if (jsonOutput) {
  console.log(JSON.stringify(queue, null, 2));
  process.exit();
}

function printArticle(article) {
  const warnings = article.warningIssues.map((issue) => issue.code).join(", ") || "none";
  const critical = article.criticalIssues.map((issue) => issue.code).join(", ") || "none";
  const score = typeof article.score === "number" ? ` score=${article.score}` : "";
  console.log(`- ${article.slug}${score}`);
  if (critical !== "none") console.log(`  critical: ${critical}`);
  if (warnings !== "none") console.log(`  warning: ${warnings}`);
}

console.log("Blog queue");
console.log("==========");
console.log(`Blocked critical: ${blockedCritical.length}`);
console.log(`Near publish: ${nearPublish.length}`);
console.log(`Quality fixes: ${qualityFixes.length}`);
console.log(`Stale drafts: ${staleDrafts.length}`);
console.log(`Visible noindex: ${visibleNoindex.length}`);

if (blockedCritical.length > 0) {
  console.log("");
  console.log("Blocked critical");
  for (const article of blockedCritical.slice(0, Number.isNaN(limit) ? 10 : limit)) printArticle(article);
}

if (nearPublish.length > 0) {
  console.log("");
  console.log("Near publish");
  for (const article of nearPublish) printArticle(article);
}

if (qualityFixes.length > 0) {
  console.log("");
  console.log("Quality fixes");
  for (const article of qualityFixes) printArticle(article);
}

if (staleDrafts.length > 0) {
  console.log("");
  console.log("Stale drafts");
  for (const article of staleDrafts.slice(0, Number.isNaN(limit) ? 10 : limit)) printArticle(article);
}

if (visibleNoindex.length > 0) {
  console.log("");
  console.log("Visible noindex");
  for (const article of visibleNoindex.slice(0, Number.isNaN(limit) ? 10 : limit)) printArticle(article);
}
