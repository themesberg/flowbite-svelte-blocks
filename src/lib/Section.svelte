<script lang="ts">
	import classNames from 'classnames';
	export let name:
		| 'heroDefault'
		| 'heroVisual'
		| 'logos'
		| 'feature'
		| 'content'
		| 'contentwithimg' = 'heroDefault';
	const sectionClasses = {
		heroDefault: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'
		},
		heroVisual: {
			section: 'bg-white dark:bg-gray-900',
			div: 'grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'
		},
		logos: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 lg:py-16 mx-auto max-w-screen-xl px-4'
		},
		feature: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'
		},
		content: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
		},
		contentwithimg: {
			section: 'bg-white dark:bg-gray-900',
			div: 'gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'
		}
	};
</script>

<section class={classNames(sectionClasses[name]['section'], $$props.class)}>
	<div class={classNames(sectionClasses[name]['div'])}>
		<slot />
	</div>
</section>
