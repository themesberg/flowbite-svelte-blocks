<script lang="ts">
	import classNames from 'classnames';
	export let name:
		| 'blog'
		| 'cta'
		| 'ctawithimg'
		| 'content'
		| 'contentwithimg'
		| 'feature'
		| 'headingwithctabutton'
		| 'heroDefault'
		| 'heroVisual'
		| 'logos'
		| 'maintenance'
		| 'none'
		| 'page500'
		| 'page404'
		| 'pricing' = 'heroDefault';
	const sectionClasses = {
		blog: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
		},
		cta: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'
		},
		ctawithimg: {
			section: 'bg-white dark:bg-gray-900',
			div: 'gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'
		},
		content: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
		},
		contentwithimg: {
			section: 'bg-white dark:bg-gray-900',
			div: 'gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'
		},
		feature: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'
		},
		headingwithctabutton: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'
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
		maintenance: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12'
		},
		none: {
			section: '',
			div: ''
		},
		page500: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
		},
		page404: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
		},
		pricing: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
		}
	};
</script>

<section class={classNames(sectionClasses[name]['section'], $$props.classSection)}>
	<div class={classNames(sectionClasses[name]['div'], $$props.classDiv)}>
		<slot />
	</div>
</section>
