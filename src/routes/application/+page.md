---
layout: componentLayout
title: Application UI - Flowbite Svelte Blocks
breadcrumb_title: Application UI
no_of_components: 
dir: application
description: Get started with a collection of free and premium Tailwind CSS UI components for admin dashboard layouts, sidebars, charts, widgets, kanban boards, and more.
---
<script lang="ts">
  import type { PageData } from './$types';
  import SectionCompo from '../utils/Sectioncompo.svelte';
  export let data: PageData;
</script>

<SectionCompo {data} section="application"/>