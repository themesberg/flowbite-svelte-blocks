<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let ulClass: string = 'mb-8 space-y-4 text-left';
</script>

<ul class={twMerge(ulClass, $$props.class)}>
  <slot />
</ul>
{#if $$slots.btn}
  <slot name="btn" />
{/if}
