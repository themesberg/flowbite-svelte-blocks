<script lang="ts">
  import { twMerge } from "tailwind-merge";
  type Blog = {
    id: string;
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
  export let blog: Blog;
  const articleCls: string = twMerge('mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert', $$props.classArticle); 
  const headerCls: string = twMerge('mb-4 lg:mb-6 not-format', $$props.classHeader);
  const addressCls: string = twMerge('flex items-center mb-6 not-italic', $$props.classAddress);
  const divCls: string = twMerge('inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white', $$props.classDiv )
  const h1Cls: string = twMerge('mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white', $$props.classH1);
  const authorCls: string= twMerge('text-xl font-bold text-gray-900 dark:text-white', $$props.classAuthor );
  const imgCls: string = twMerge('mr-2 w-6 h-6 rounded-full',  $$props.classImg);
  const pCls: string = twMerge('text-base font-light text-gray-500 dark:text-gray-400', $$props.classP)
</script>

<article class="{articleCls}">
  <header class="{headerCls}">
    <address class="{addressCls}">
      <div class="{divCls}">
        <img class="{imgCls}"
        src="{blog.author.profilePicture}"
        alt="{blog.author.name}">
          <div>
            {#if blog.author.href}
              <a href={blog.author.href} rel="author" class="{authorCls}">
                {blog.author.name}
              </a>
            {/if}
            <p class="{pCls}">
              {blog.author.title}
            </p>
            {#if blog.date}
            <p class="{pCls}">
              <time datetime="{blog.isoDate}" title="{blog.date}">
                {blog.date}
              </time>
            </p>
            {/if}
          </div>
      </div>
    </address>
    <h1 class="{h1Cls}">{blog.title}</h1>
  </header>
  {#if blog.lead}
  <p class="lead">{blog.lead}</p>
  {/if}
  {@html blog.content}
  <slot />
</article>
