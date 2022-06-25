<script lang="ts">
	import classNames from 'classnames';
	export let divClass: string = 'mx-auto max-w-screen-sm text-center';
	export let h2Class: string =
		'mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white';
</script>

<div class={classNames(divClass, $$props.classDiv)}>
	{#if $$slots.h2}
		<h2 class={classNames(h2Class, $$props.classH2)}><slot name="h2" /></h2>
	{/if}
	<slot />
</div>
