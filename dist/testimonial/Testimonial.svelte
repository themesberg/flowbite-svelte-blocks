<script>import classNames from "classnames";
export let icon = null;
export let figureClass = "max-w-screen-md mx-auto";
export let figureFooterClass = "flex items-center justify-center mt-6 space-x-3";
</script>

<figure class={classNames(figureClass, $$props.classFigure)}>
	{#if icon}
		<svelte:component this={icon} />
	{/if}
	<slot />
	{#if $$slots.footer}
		<figcaption class={classNames(figureFooterClass, $$props.classFigureFooter)}>
			<slot name="footer" />
		</figcaption>
	{/if}
</figure>
