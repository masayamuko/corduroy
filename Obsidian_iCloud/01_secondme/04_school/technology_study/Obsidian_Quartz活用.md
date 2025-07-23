---
title: "Why I Ditched WordPress for Obsidian + Quartz (and Haven't Looked Back)"
source: "https://wfhbrian.com/obsidian/Migrating-from-WordPress-to-Obsidian-%2B-Quartz"
author:
  - "[[Smart Connections]]"
published:
created: 2025-06-14
description: "Look, I get it—moving from WordPress can sound like a hassle. It’s familiar, widely used, and sometimes it seems like the only option for hosting your blog."
tags:
  - "clippings"
---
Look, I get it—moving from WordPress can sound like a hassle. It’s familiar, widely used, and sometimes it seems like the only option for hosting your blog. But after years of wrestling with WordPress, I found myself increasingly bogged down by the very tool that was supposed to make publishing easy. That’s when I made the switch to Obsidian + Quartz, and let me tell you, the results have been a game-changer. Here’s a breakdown of why I made the move, how the process went, and what I’m getting out of my new setup.

## WordPress Was Slowing Me Down

*Let’s talk friction.*

Writing should be about ideas, not wrestling with formatting and plugins. Even with an Obsidian-to-WordPress plugin, I found myself spending too much time fixing things that didn’t translate well from markdown to WordPress. And whenever I needed to update a post, it was double-entry hell: changing things in Obsidian *and* WordPress.

Frankly, WordPress just didn’t fit into my flow. I already managed 99% of my notes in Obsidian, so why add another step in a whole different system just to publish? I wanted something that integrated directly with the tool where my ideas lived—something seamless and simple.

## Why Obsidian as a CMS Makes Sense

*If you’re like me, managing everything in one place is gold.*

When I switched to Obsidian as my CMS, I set up a single folder—“wfhbrian.com”—to contain all my posts. Now, whenever I have an idea, I can start it in Obsidian, build it out, and publish it from there without any extra steps. Everything I need is already in Obsidian, so organizing my thoughts, drafting, and editing is just part of my natural workflow.

And the publishing process? Simple. One command, and it’s live. No formatting fights, no plugins, just clean markdown that goes straight to the site.

## How I Migrated My Content with ChatGPT’s Help

*You might think the move sounds tricky, but trust me—it’s smoother than you’d expect.*

Using ChatGPT’s code interpreter, I uploaded my WordPress export file and converted everything to markdown. It took care of most of the heavy lifting: translating content, preserving formatting, and even handling all the image files. It downloaded my media, sorted it into an “assets” folder, and updated image paths to remove the default sub-directories WordPress likes to add.

And that wasn’t all. The code interpreter even tidied up my notes, removing unnecessary line breaks and trimming excess spaces. In under an hour, I had my entire blog sitting in Obsidian, perfectly formatted and ready to go.

## Why Quartz over Obsidian Publish?

*I needed a setup that could grow with me*

I often recommend Obsidian Publish, as it’s great for getting started without any technical overhead.

In this case, anticipating my desire for advanced customization, Quartz made the most sense. I wanted the flexibility to add custom features and improve my site’s SEO, and Quartz gave me the power to do that. For instance, I created a custom component to add structured data for search engines (you can check it out [on GitHub](https://github.com/brianpetro/custom-quartz)).

Plus, I wanted a smart 404 page that could handle paths with trailing slashes—something Quartz made easy by allowing me to add a simple JavaScript snippet for redirecting users. It’s these little customizations that make a big difference, and Quartz’s flexibility gives me room to keep improving my site over time.

## Hosting with GitHub Pages for Easy Deployment

*Let’s be real—nobody wants hosting to be a headache.*

GitHub Pages made hosting Quartz a breeze. It’s cost-effective (read: free), reliable, and integrates seamlessly with my setup. Every update is just a commit away, and deployment is instant. No extra fees, no servers to manage. And because GitHub Pages is designed to work with static sites, I get fast load times and solid uptime. It’s a hands-off hosting solution that just works.

## The Payoff: Why I’m Never Going Back to WordPress

This setup has changed the way I write and publish. Here’s why:

- **No More Formatting Headaches:** My markdown files stay as-is, no translation mishaps, no plugin issues.
- **Time Saved on Double-Entry:** All my edits happen in one place—Obsidian.
- **Better Site Performance:** Static sites are faster, and Quartz + GitHub Pages has optimized my site speed significantly.
- **Improved SEO Flexibility:** Thanks to my custom components, I have total control over my metadata and structured data.
- **Seamless Workflow from Idea to Publish:** Everything is streamlined, so I spend less time fussing and more time creating.

If you’re managing your notes, ideas, and writing drafts in Obsidian, consider Quartz as your CMS. It’s efficient, customizable, and honestly, it just makes sense.

## Final Thoughts

*Ready to make the leap?*

Transitioning from WordPress to Obsidian + Quartz isn’t just about switching platforms; it’s about reclaiming control of your workflow. If you’re tired of WordPress plugins, double-entry headaches, or even just the clunky feel of a traditional CMS, give this a shot. It’s a streamlined, file-over-app solution that’s ready to grow with you.

---