---
layout: componentLayout
title: Publisher UI - Flowbite Svelte Blocks
breadcrumb_title: Publisher UI
dir: publisher
description: Get started with a collection of free and premium Tailwind CSS UI components for publishing blog posts, articles, comment sections, sidebar widgets, and more.
---

<script>
  import { BlogTemplatesection, CommentSection, RelatedArticle } from '../sections';
</script>

<section class="pb-8 bg-white dark:bg-gray-900 lg:pb-24" id="components">
  <div class="px-4 mx-auto max-w-8xl lg:px-4 lg:text-center">
    <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 xl:grid-cols-3">
      <BlogTemplatesection />
      <CommentSection />
      <RelatedArticle />
    </div>
  </div>
</section>
