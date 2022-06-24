<script lang="ts">
	import classNames from 'classnames';
	export let h1Class: string =
		'mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white';
	export let pClass: string =
		'mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400';
</script>

<h1 class={classNames(h1Class, $$props.class)} {...$$restProps}>
	<slot name="h1" />
</h1>
<p class={classNames(pClass, $$props.pclass)}>
	<slot name="paragraph" />
</p>
