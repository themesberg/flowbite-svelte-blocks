## Example usage

```
<script>
  import { Section, News, HeroHeader, HeroBody } from 'flowbite-svelte-blocks';
  import { Button } from 'flowbite-svelte';
  import { ArrowRight, VideoCamera } from 'svelte-heros';
</script>

<Section>
  <News>
    <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
    <span class="text-sm font-medium">Flowbite is out! See what's new</span>
  </News>
  <HeroHeader>
    <svelte:fragment slot="h1">We invest in the world’s potential</svelte:fragment>
    <svelte:fragment slot="paragraph">
      Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
      long-term value and drive economic growth.
    </svelte:fragment>
  </HeroHeader>

  <div
    class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
  >
    <a href="/">
      <Button size="lg" color="red">
        Learn more <ArrowRight size="18" class="ml-2" />
      </Button>
    </a>
    <a href="/">
      <Button size="lg" color="light">
        <VideoCamera variation="solid" size="28" class="pt-1" />
        Watch video
      </Button>
    </a>
  </div>
  <HeroBody>
    <svelte:fragment slot="head">FEATURED IN</svelte:fragment>

    <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
      <a href="/" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
        <Youtube />
      </a>
      <a href="/" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
        <ProductHunt />
      </a>
      <a href="/" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
        <Reddit />
      </a>
    </div>
  </HeroBody>
</Section>
```

## Example 2

```
<script>
  import { Section, News, HeroHeader, HeroBody } from 'flowbite-svelte-blocks';
  import { Button } from 'flowbite-svelte';
  import { ArrowRight, VideoCamera } from 'svelte-heros';
</script>

<Section name="heroVisual">
  <div class="mr-auto place-self-center lg:col-span-7">
    <HeroHeader
      h1Class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
      pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
    >
      <svelte:fragment slot="h1">Payments tool for software companies</svelte:fragment>
      <svelte:fragment slot="paragraph">
        From checkout to global sales tax compliance, companies around the world use Flowbite to
        simplify their payment stack.
      </svelte:fragment>
      <a href="/"
        ><Button size="xl" color="red" class="inline-flex items-center justify-center mr-3"
          >Get started<ArrowRight size="18" class="ml-2 -mr-1" /></Button
        >
      </a>
      <a href="/"
        ><Button color="light" size="xl" class="inline-flex items-center justify-center"
          >Speak to Sales</Button
        >
      </a>
    </HeroHeader>
  </div>
  <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
      alt="mockup"
    />
  </div>
</Section>
```