<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';

	type Blog = {
		id?: string;
		title: string;
		lead?: string;
		author: {
			name: string;
			title?: string;
			profilePicture?: string;
			href?: string;
		};
		date?: string;
		isoDate?: string;
		content: string;
	};
	interface Props {
		children?: Snippet;
		blog: Blog;
		articleClass?: string;
		headerClass?: string;
		addressClass?: string;
		divClass?: string;
		h1Class?: string;
		authorClass?: string;
		imgClass?: string;
		pClass?: string;
	}
	// export let blog: Blog;
	let { children, blog, articleClass, headerClass, addressClass, divClass, h1Class, authorClass, imgClass, pClass }: Props = $props();
	const articleCls: string = twMerge('mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert', articleClass);
	const headerCls: string = twMerge('mb-4 lg:mb-6 not-format', headerClass);
	const addressCls: string = twMerge('flex items-center mb-6 not-italic', addressClass);
	const divCls: string = twMerge('inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white', divClass);
	const h1Cls: string = twMerge('mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white', h1Class);
	const authorCls: string = twMerge('text-xl font-bold text-gray-900 dark:text-white', authorClass);
	const imgCls: string = twMerge('mr-2 w-6 h-6 rounded-full', imgClass);
	const pCls: string = twMerge('text-base font-light text-gray-500 dark:text-gray-400', pClass);
</script>

<article class={articleCls}>
	<header class={headerCls}>
		<address class={addressCls}>
			<div class={divCls}>
				<img class={imgCls} src={blog.author.profilePicture} alt={blog.author.name} />
				<div>
					{#if blog.author.href}
						<a href={blog.author.href} rel="author" class={authorCls}>
							{blog.author.name}
						</a>
					{/if}
					<p class={pCls}>
						{blog.author.title}
					</p>
					{#if blog.date}
						<p class={pCls}>
							<time datetime={blog.isoDate} title={blog.date}>
								{blog.date}
							</time>
						</p>
					{/if}
				</div>
			</div>
		</address>
		<h1 class={h1Cls}>{blog.title}</h1>
	</header>
	{#if blog.lead}
		<p class="lead">{blog.lead}</p>
	{/if}
	{@html blog.content}
	{#if children}
		{@render children()}
	{/if}
</article>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:blog: any;
@props:articleClass: any;
@props:headerClass: any;
@props:addressClass: any;
@props:divClass: any;
@props:h1Class: any;
@props:authorClass: any;
@props:imgClass: any;
@props:pClass: any;
-->
