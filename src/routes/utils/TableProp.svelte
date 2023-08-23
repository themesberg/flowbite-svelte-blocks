<script lang="ts">
  import { setContext } from 'svelte';
  export let category: 'props' | 'events' | 'slots'= 'props';
  export let tableClass: string = 'w-full text-sm text-left text-gray-500 dark:text-gray-400';
  export let theadClass: string = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400';
  export let thClass: string = 'px-6 py-3';

  setContext('category', category);
  const tableClasses = {
    props: 'w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4',
    events: 'w-1/3 relative overflow-x-auto shadow-md sm:rounded-lg py-4',
    slots: 'w-1/3 relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  }
  const headerNames = {
    props: ['Name', 'Type', 'Default'],
    events: ['Names'],
    slots: ['Names']
  }
  let header = headerNames[category]
  let divCls = tableClasses[category]
</script>

<div class={divCls}>
  <table class={tableClass}>
    <thead class={theadClass}>
      <tr>
        {#if category === 'props'}
          {#each header as column}
            <th scope="col" class={thClass}>
              {column}
            </th>
          {/each}
        {:else}
        <th scope="col" class={thClass}>
          {header}
        </th>
        {/if}
      </tr>
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</div>
