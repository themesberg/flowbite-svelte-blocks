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
      <slot name='search' />
      <div class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
        <slot />
      </div>
    </div>
  </div>
</div>
