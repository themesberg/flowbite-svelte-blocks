<script lang="ts">
	import classNames from 'classnames';
	export let name:
		| 'blog'
		| 'heroDefault'
		| 'heroVisual'
		| 'logos'
		| 'feature'
		| 'content'
		| 'contentwithimg'
		| 'headingwithctabutton'
		| 'maintenance'
		| 'page500'
		| 'page404' = 'heroDefault';
	const sectionClasses = {
		blog: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
		},
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
		},
		headingwithctabutton: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'
		},
		maintenance: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12'
		},
		page500: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
		},
		page404: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
		}
	};
</script>

<section class={classNames(sectionClasses[name]['section'], $$props.class)}>
	<div class={classNames(sectionClasses[name]['div'])}>
		<slot />
	</div>
</section>
