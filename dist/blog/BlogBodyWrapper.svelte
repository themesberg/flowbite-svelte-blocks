<script>import classNames from "classnames";
export let divClass = "grid gap-8 lg:grid-cols-2";
</script>

<div class={classNames(divClass, $$props.classDiv)}>
	<slot />
</div>
