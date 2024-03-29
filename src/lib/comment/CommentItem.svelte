<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { Comment } from '../types';
  import CommentItem from './CommentItem.svelte';
  import { MessageDotsOutline } from 'flowbite-svelte-icons';

  export let replyButton: boolean = true;
  export let comment: Comment;
  const articleCls: string = twMerge('p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900', $$props.articleClass);
  const footerCls: string = twMerge('flex justify-between items-center mb-2', $$props.footerClass);
  const pCls: string = twMerge('text-sm text-gray-600 dark:text-gray-400', $$props.classP)
</script>

<article class="{articleCls}" id={comment.id}>
  <footer class="{footerCls}">
    <div class="flex items-center">
      <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
        <img class="mr-2 w-6 h-6 rounded-full"
        src="{comment.commenter.profilePicture}"
        alt="{comment.commenter.name}">
        {comment.commenter.name}
      </p>
      {#if comment.date}
      <p class="{pCls}">
        <time datetime="{comment.isoDate}" title="{comment.date}">
          {comment.date}
        </time>
      </p>
      {/if}
    </div>
    <slot name='dropdownMenu'/>
  </footer>
  <p class="text-gray-500 dark:text-gray-400">
    {comment.content}
  </p>
  {#if replyButton}
    <slot name="reply">
    <div class="flex items-center mt-4 space-x-4">
      <button type="button"
          class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
          <MessageDotsOutline class="mr-1 w-4 h-4" />
          Reply
      </button>
    </div>
    </slot>
  {/if}
</article>
{#if comment.replies}
{#each comment.replies as reply}
  <CommentItem comment={reply} articleClass="ml-6 lg:ml-12"/>
{/each}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let replyButton: boolean = true;
@prop export let comment: Comment;
-->
