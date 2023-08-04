<script lang="ts">
  import {twMerge} from 'tailwind-merge';
  export let liClass: string = 'flex items-center space-x-3';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<li class={liClass}>
  <svelte:component this={Icon} name="check-solid" size="sm" class={twMerge('ml-2', $$props.class)} />
  <slot />
</li>
