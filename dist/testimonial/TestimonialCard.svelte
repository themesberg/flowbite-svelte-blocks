<script>import classNames from "classnames";
export let headerClass = "mx-auto max-w-screen-sm";
export let divClass = "grid mb-8 lg:mb-12 lg:grid-cols-2";
</script>

{#if $$slots.header}
	<div class={classNames(headerClass, $$props.class)}>
		<slot name="header" />
	</div>
{/if}
<div class={classNames(divClass, $$props.classDiv)}>
	<slot />
</div>
