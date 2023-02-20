<script>import classNames from "classnames";
export let divClass = "flex justify-between items-center mb-5 text-gray-500";
</script>

<div class={classNames(divClass, $$props.classDiv)}>
	<slot />
</div>
