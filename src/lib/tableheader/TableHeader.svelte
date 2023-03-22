<script lang="ts">
  export let searchBlock: boolean = true;
  export let divOuterClass: string = 'max-w-screen-xl px-4 mx-auto lg:px-12 w-full'
  export let divInnerClass: string = 'relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg';
  export let divInnerMostClass: string = 'flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4';
  export let searchDivClass: string = 'w-full md:w-1/2';
</script>

<div class="{divOuterClass}">
  <div class="{divInnerClass}">
    <div class="{divInnerMostClass}">
      {#if searchBlock}
      <div class="{searchDivClass}">
        <form class="flex items-center" on:submit>
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
            <input type="text" id="simple-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" >
          </div>
        </form>
      </div>
      {/if}
      <div class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
        <slot />
      </div>
    </div>
  </div>
</div>
