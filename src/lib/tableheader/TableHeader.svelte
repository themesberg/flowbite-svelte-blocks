<script lang="ts">
  export let divOuterClass: string = 'relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg';
  export let divInnerClass: string = 'flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4';
  export let divSlotClass: string = 'flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3'
</script>

<div class="{divOuterClass}">
  <div class="{divInnerClass}">
    <slot name='search' />
    <div class="{divSlotClass}">
      <slot />
    </div>
  </div>
</div>

