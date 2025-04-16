<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	import type { Comment } from '../types';
	import CommentItem from './CommentItem.svelte';
	import { MessageDotsOutline } from 'flowbite-svelte-icons';
	interface Props {
		menuSlot?: Snippet;
		replySlot?: Snippet;
		replyButton?: boolean;
		comment: Comment;
		articleClass?: string;
		footerClass?: string;
		pClass?: string;
	}
	let { menuSlot, replySlot, replyButton, comment, articleClass, footerClass, pClass }: Props = $props();

	// export let replyButton: boolean = true;
	// export let comment: Comment;
	const articleCls: string = twMerge('p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900', articleClass);
	const footerCls: string = twMerge('flex justify-between items-center mb-2', footerClass);
	const pCls: string = twMerge('text-sm text-gray-600 dark:text-gray-400', pClass);
</script>

<article class={articleCls} id={comment.id}>
	<footer class={footerCls}>
		<div class="flex items-center">
			<p class="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
				<img class="mr-2 h-6 w-6 rounded-full" src={comment.commenter.profilePicture} alt={comment.commenter.name} />
				{comment.commenter.name}
			</p>
			{#if comment.date}
				<p class={pCls}>
					<time datetime={comment.isoDate} title={comment.date}>
						{comment.date}
					</time>
				</p>
			{/if}
		</div>
		{#if menuSlot}
			{@render menuSlot()}
		{/if}
	</footer>
	<p class="text-gray-500 dark:text-gray-400">
		{comment.content}
	</p>
	{#if replyButton}
		{#if replySlot}
			{@render replySlot()}
		{/if}
		<div class="mt-4 flex items-center space-x-4">
			<button type="button" class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
				<MessageDotsOutline class="mr-1 h-4 w-4" />
				Reply
			</button>
		</div>
	{/if}
</article>
{#if comment.replies}
	{#each comment.replies as reply}
		<CommentItem comment={reply} articleClass="ml-6 lg:ml-12" />
	{/each}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: menuSlot: any;
@props:replySlot: any;
@props:replyButton: any;
@props:comment: any;
@props:articleClass: any;
@props:footerClass: any;
@props:pClass: any;
-->
