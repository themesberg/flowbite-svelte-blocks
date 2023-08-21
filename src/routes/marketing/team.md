---
layout: componentLayout
title: Svelte Team Sections - Flowbite Svelte Blocks
breadcrumb_title: Team Sections
no_of_components: 1 free component
dir: marketing
description: Get started with a collection of team sections built with Tailwind CSS and Flowbite to showcase your organization's team members based on multiple layouts.
---

<script>
  import { TableProp, TableDefaultRow } from '../utils'
  import { props as item1} from '../props/TeamWrapper.json'
  import { props as item2} from '../props/TeamHeader.json'
  import { props as item3} from '../props/TeamBody.json'
  import { props as item4} from '../props/TeamItem.json'
  import { props as item5} from '../props/Facebook.json'
  import { props as item6} from '../props/Github.json'
  import { props as item7} from '../props/Twitter.json'
  import { props as item8} from '../props/Section.json'
</script>

## Team member cards

Use this example to show information about your team members such as the name, occupation, picture, and social media accounts inside a card component.

```svelte example
<script lang="ts">
  import { Section, TeamWrapper, TeamHeader, TeamBody, TeamItem, Facebook, Github, Twitter } from 'flowbite-svelte-blocks';

  let members = [
    {
      href: '/',
      src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
      alt: 'Bonnie Green',
      name: 'Bonnie Green',
      jobTitle: 'CEO & Web Developer',
      description: 'Bonnie drives the technical strategy of the flowbite platform and brand.'
    },
    {
      href: '/',
      src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
      alt: 'Jese Leos',
      name: 'Jese Leos',
      jobTitle: 'CTO',
      description: 'Jese drives the technical strategy of the flowbite platform and brand.'
    },
    {
      href: '/',
      src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      alt: 'Michael Gouch',
      name: 'Michael Gouch',
      jobTitle: 'Senior Front-end Developer',
      description: 'Michael drives the technical strategy of the flowbite platform and brand'
    },
    {
      href: '/',
      src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
      alt: 'Lana Byrd',
      name: 'Lana Byrd',
      jobTitle: 'Marketing & Sale',
      description: 'Lana drives the technical strategy of the flowbite platform and brand.'
    }
  ];
</script>

<Section name="team">
  <TeamWrapper>
    <TeamHeader>
      <svelte:fragment slot="label">Our Team</svelte:fragment>
      <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
    </TeamHeader>
    <TeamBody>
      {#each members as { href, src, alt, name, jobTitle, description }}
        <TeamItem {href} {src} {alt} {name} {jobTitle}>
          <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <svelte:fragment slot="social">
            <Facebook href="/" />
            <Github href="/" />
            <Twitter href="/" />
          </svelte:fragment>
        </TeamItem>
      {/each}
    </TeamBody>
  </TeamWrapper>
</Section>
```

## Props

### TeamWrapper

<TableProp>
<TableDefaultRow items={item1} rowState='hover' />
</TableProp>

### TeamHeader

<TableProp>
<TableDefaultRow items={item2} rowState='hover' />
</TableProp>

### TeamBody

<TableProp>
<TableDefaultRow items={item3} rowState='hover' />
</TableProp>

### TeamItem

<TableProp>
<TableDefaultRow items={item4} rowState='hover' />
</TableProp>

### Facebook

<TableProp>
<TableDefaultRow items={item5} rowState='hover' />
</TableProp>

### Github

<TableProp>
<TableDefaultRow items={item6} rowState='hover' />
</TableProp>

### Twitter

<TableProp>
<TableDefaultRow items={item7} rowState='hover' />
</TableProp>

### Section

<TableProp>
<TableDefaultRow items={item8} rowState='hover' />
</TableProp>
