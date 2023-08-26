

<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import CommentItem from './CommentItem.svelte';
  type Comment = {
    id: string;
    commenter: {
      name: string;
      profilePicture?: string;
    };
    date?: string;
    isoDate?: string;
    content: string;
    replies?: Comment[];
  };
  export let comment: Comment;
  const articleCls: string = twMerge('p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900', $$props.articleClass);
  const footerCls: string = twMerge('flex justify-between items-center mb-2', $$props.footerClass);

</script>

<article class="{articleCls}" id={comment.id}>
  <footer class="{footerCls}">
    <div class="flex items-center">
      <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
        <img class="mr-2 w-6 h-6 rounded-full"
        src="{comment.commenter.profilePicture}"
        alt="Michael Gough">
        {comment.commenter.name}
      </p>
      {#if comment.date}
      <p class="text-sm text-gray-600 dark:text-gray-400">
        <time datetime="{comment.isoDate}" title="February 8th, 2022">
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
  
  <div class="flex items-center mt-4 space-x-4">
      <button type="button"
          class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
          <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          Reply
      </button>
  </div>
</article>
{#if comment.replies}
{#each comment.replies as reply}
  <CommentItem comment={reply} articleClass="ml-6 lg:ml-12"/>
{/each}
{/if}