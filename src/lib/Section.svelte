<script lang="ts">
	import classNames from 'classnames';
	export let sectionClass: string = 'bg-white dark:bg-gray-900';
	export let name:
		| 'blog'
		| 'cta'
		| 'ctawithimg'
		| 'contact'
		| 'content'
		| 'contentwithimg'
		| 'feature'
		| 'forgotpassword'
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
			div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
		},
		cta: {
			div: 'py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'
		},
		ctawithimg: {
			div: 'gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'
		},
		contact: {
			div: 'py-8 lg:py-16 px-4 mx-auto max-w-screen-md'
		},
		content: {
			div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
		},
		contentwithimg: {
			div: 'gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'
		},
		feature: {
			div: 'py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'
		},
		forgotpassword: {
			div: 'flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'
		},
		headingwithctabutton: {
			div: 'py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'
		},
		heroDefault: {
			div: 'py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'
		},
		heroVisual: {
			div: 'grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'
		},
		logos: {
			div: 'py-8 lg:py-16 mx-auto max-w-screen-xl px-4'
		},
		maintenance: {
			div: 'py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12'
		},
		none: {
			div: ''
		},
		page500: {
			div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
		},
		page404: {
			div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
		},
		pricing: {
			div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
		}
	};
</script>

<section class={classNames(sectionClass, $$props.classSection)}>
	<div class={classNames(sectionClasses[name]['div'], $$props.classDiv)}>
		<slot />
	</div>
</section>
