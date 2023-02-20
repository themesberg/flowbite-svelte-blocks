<script>import classNames from "classnames";
export let divClass = "items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700";
export let imgClass = "w-full rounded-lg sm:rounded-none sm:rounded-l-lg";
export let h3Class = "text-xl font-bold tracking-tight text-gray-900 dark:text-white";
export let spanClass = "text-gray-500 dark:text-gray-400";
export let href = "";
export let src = "";
export let alt = "";
export let name = "";
export let jobTitle = "";
</script>

<div class={classNames(divClass, $$props.class)}>
	<a {href}>
		<img class={classNames(imgClass, $$props.classImg)} {src} {alt} />
	</a>
	<div class="p-5">
		<h3 class={classNames(h3Class, $$props.classH3)}>
			<a {href}>{name}</a>
		</h3>
		<span class={classNames(spanClass, $$props.classSpan)}>{jobTitle}</span>
		<slot />
		<ul class="flex space-x-4 sm:mt-0">
			<slot name="social" />
		</ul>
	</div>
</div>
