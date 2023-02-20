<script>import classNames from "classnames";
export let authorDiv = "flex justify-between items-center";
export let authorImgDiv = "flex items-center space-x-4";
</script>

<div class={classNames(authorDiv, $$props.classAuthorDiv)}>
	<div class={classNames(authorImgDiv, $$props.classAuthorImgDiv)}>
		<slot name="author" />
	</div>
	<slot />
</div>
