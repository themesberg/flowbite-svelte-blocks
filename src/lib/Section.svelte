<script lang="ts">
	import classNames from 'classnames';
	export let name: 'heroDefault' | 'heroVisual' | 'feature' | 'cta' = 'heroDefault';
	const sectionClasses = {
		heroDefault: {
			section: 'bg-white dark:bg-gray-900',
			div: 'py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'
		},
		heroVisual: {
			section: 'bg-white dark:bg-gray-900',
			div: 'grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'
		}
	};
</script>

<section class={classNames(sectionClasses[name]['section'], $$props.class)}>
	<div class={classNames(sectionClasses[name]['div'])}>
		<slot />
	</div>
</section>
