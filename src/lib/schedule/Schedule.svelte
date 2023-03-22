<script lang='ts'>
  export let divClass: string = 'max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24';
  export let scheduleName: string ='';

</script>

<div class="{divClass}">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
      {scheduleName}
    </h2>
    <slot name='subtitle' />
  </div>

  <div class="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
    <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
      <slot />
    </div>
  </div>
</div>