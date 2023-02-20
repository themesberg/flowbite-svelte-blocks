<script>import classNames from "classnames";
export let divClass = "font-light text-gray-500 sm:text-lg dark:text-gray-400";
export let h2Class = "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white";
export let imgDivClass = "grid grid-cols-2 gap-4 mt-8";
</script>

<div class={classNames(divClass, $$props.classDiv)}>
	{#if $$slots.h2}
		<h2 class={classNames(h2Class, $$props.classH2)}><slot name="h2" /></h2>
	{/if}
	<slot />
</div>
{#if $$slots.image}
	<div class={classNames(imgDivClass, $$props.classImgDiv)}>
		<slot name="image" />
	</div>
{/if}
