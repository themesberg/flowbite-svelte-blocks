<script lang="ts">
  import { MetaTag } from './utils';
  import type { PageData } from './$types';
  import TableSearch from 'flowbite-svelte/TableSearch.svelte';
  import {
    AdvancedTable,
    AccountRecoverysection,
    Bannersection,
    Blogsection,
    BlogTemplatesection,
    CommentSection,
    ContactFormsection,
    Contentsection,
    CookieConsentsection,
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
    Cta,
    DashboardFooter,
    Navbar,
    Filter,
    FacetedSearchDrawerSection,
    FacetedSearchModalSection,
    Faqsection,
    Featuresection,
    Footersection,
    Headersection,
    Herosection,
    LoginFormsection,
    Maintenancesection,
    Newslettersection,
    Page404section,
    Page500section,
    Popupsection,
    Portfoliosection,
    Pricingsection,
    RegisterFormsection,
    RelatedArticle,
    ResetPasswordFormsection,
    SideNavigation,
    SocialProofsection,
    Teamsection,
    Testimonialsection,
    TableFooter,
    TableHeader,
    UserOnboarding
  } from './sections';

  export let data: PageData;

  const title = '';
  const breadcrumb_title = 'Flowbite Svelte Blocks';
  const description =
    'Get started with 250 free and premium UI components built with the utility classes from Tailwind CSS to upgrade your web development stack and customize the colors, fonts, and dark mode using the configurator.';

  let searchTerm = 'recovery';
  const flattened_posts = Object.values(data.posts).flat()
  $: filteredArray = flattened_posts.filter(obj => obj.meta && obj.meta.breadcrumb_title === "Advanced Tables");

  console.log(filteredArray);

  // console.log('flattend_arr', JSON.stringify(flattened_posts))
  // console.log('filteredPostNames', filteredPostNames)
</script>

<MetaTag {breadcrumb_title} {title} {description} withoutLink={true} />

<div class="flex flex-col min-h-screen bg-white dark:bg-gray-900">
  <div class="px-4 mx-auto max-w-8xl dark:bg-gray-900">
    <main class="grow">
      <section class="mx-auto max-w-8xl">
        <div class="grid mt-3 mb-6 lg:gap-8 lg:mt-5 lg:mb-6 xl:grid-cols-3">
          <div class="col-span-2 mb-2 lg:mb-0">
            <h1 class="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Flowbite Blocks in Svelte
            </h1>
            <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400">
              Get started with 122 free and premium UI components built with the utility classes
              from Tailwind CSS to upgrade your web development stack and customize the colors,
              fonts, and dark mode using the configurator.
            </p>
          </div>
        </div>
      </section>
      <section class="pb-8 bg-white dark:bg-gray-900 lg:pb-24" id="components">
        <div class="mx-auto max-w-8xl lg:text-center">
          <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 xl:grid-cols-3">
            <AccountRecoverysection />
            <AdvancedTable />
            <Bannersection />
            <Blogsection />
            <BlogTemplatesection />
            <CommentSection />
            <ContactFormsection />
            <Contentsection />
            <CookieConsentsection />
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
            <Cta />
            <DashboardFooter />
            <Navbar />
            <Filter />
            <FacetedSearchDrawerSection />
            <FacetedSearchModalSection />
            <Faqsection />
            <Featuresection />
            <Footersection />
            <Headersection />
            <Herosection />
            <LoginFormsection />
            <Maintenancesection />
            <Newslettersection />
            <Page404section />
            <Page500section />
            <Popupsection />
            <Portfoliosection />
            <Pricingsection />
            <RegisterFormsection />
            <RelatedArticle />
            <ResetPasswordFormsection />
            <SideNavigation />
            <SocialProofsection />
            <Teamsection />
            <Testimonialsection />
            <TableFooter />
            <TableHeader />
            <UserOnboarding />
          </div>
        </div>
      </section>
    </main>
  </div>
</div>
