<script>import classNames from "classnames";
export let liClass = "flex items-center space-x-3";
import { Check } from "svelte-heros";
export let Icon = Check;
export let iconSize = 14;
export let iconClass = "";
</script>

<li class={classNames(liClass, $$props.class)}>
	<svelte:component this={Icon} size={iconSize} class={classNames('ml-2', iconClass)} />
	<slot />
</li>
