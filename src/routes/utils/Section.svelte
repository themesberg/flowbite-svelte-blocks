<script lang="ts">
  import type { Snippet } from "svelte";
  interface Props {
    children: Snippet;
    tinted?: boolean;
    class?: string;
  }
  let {tinted = false, children, class:className }:Props = $props();
</script>

<section class={tinted ? 'bg-gray-50 dark:bg-gray-800' : ''}>
  <div class="mx-auto max-w-8xl px-4 lg:px-20 py-8 {className ?? ''}">
    {@render children()}
  </div>
</section>
