<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'grid gap-8 lg:grid-cols-2';
</script>

<div class={twMerge(divClass, $$props.class)}>
  <slot />
</div>
