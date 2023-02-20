<script>import classNames from "classnames";
export let figureClass = "flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700";
export let blockQuoteClass = "mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400";
export let h3Class = "text-lg font-semibold text-gray-900 dark:text-white";
export let footerBlockQuoteClass = "flex justify-center items-center space-x-3";
</script>

<figure class={classNames(figureClass, $$props.classFigure)}>
	<blockquote class={classNames(blockQuoteClass, $$props.classBlockQuote)}>
		{#if $$slots.h3}
			<h3 class={classNames(h3Class, $$props.classH3)}>
				<slot name="h3" />
			</h3>
		{/if}
		<slot />
	</blockquote>
	{#if $$slots.caption}
		<figcaption class={classNames(footerBlockQuoteClass, $$props.classFooterBlockQuote)}>
			<slot name="caption" />
		</figcaption>
	{/if}
</figure>
