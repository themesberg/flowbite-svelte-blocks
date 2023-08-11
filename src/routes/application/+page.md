---
layout: componentLayout
title: Application UI - Flowbite Svelte Blocks
breadcrumb_title: Application UI
dir: application
description: Get started with a collection of free and premium Tailwind CSS UI components for admin dashboard layouts, sidebars, charts, widgets, kanban boards, and more.
---

<script>
  import {
    AdvancedTable,
    CrudCreateDrawer,
    CrudCreateForm,
    CrudCreateModal,
    CrudDeleteConfirm,
    CrudReadDrawer,
    CrudReadModal,
    CrudReadSection,
    CrudSuccessMessage,
    CrudUpdateDrawer,
    CrudUpdateForm,
    CrudUpdateModal,
    DashboardFooter,
    FacetedSearchDrawerSection,
    FacetedSearchModalSection,
    Filter,
    Navbar,
    SideNavigation,
    TableFooter,
    TableHeader
  } from '../sections';
</script>

<section class="pb-8 bg-white dark:bg-gray-900 lg:pb-24" id="components">
  <div class="px-4 mx-auto max-w-8xl lg:text-center">
    <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 xl:grid-cols-3">
      <AdvancedTable />
      <CrudCreateDrawer />
      <CrudCreateForm />
      <CrudCreateModal />
      <CrudDeleteConfirm />
      <CrudReadDrawer />
      <CrudReadModal />
      <CrudReadSection />
      <CrudSuccessMessage />
      <CrudUpdateDrawer />
      <CrudUpdateForm />
      <CrudUpdateModal />
      <DashboardFooter />
      <Navbar />
      <Filter />
      <FacetedSearchDrawerSection />
      <FacetedSearchModalSection />
      <SideNavigation />
      <TableFooter />
      <TableHeader />
    </div>
  </div>
</section>
