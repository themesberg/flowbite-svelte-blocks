<script>import classNames from "classnames";
export let aClass = "flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white";
export let imgClass = "w-8 h-8 mr-2";
export let src = "";
export let href = "";
export let alt = "";
</script>

<a {href} class={classNames(aClass, $$props.classA)}>
	<img class={classNames(imgClass, $$props.classImg)} {src} {alt} />
	<slot />
</a>
