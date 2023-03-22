# Portfolio

[Demo](https://flowbite-svelte-blocks.vercel.app/marketing/portfolio)

## Example usage


```html
<script>
  import { Section, Portfolio, PortfolioItem } from 'flowbite-svelte-blocks'
  const portfolios = [
    {
      customer: 'Alphabet Inc.',
      title: 'Official website',
      description: 'Flowbite helps you connect with friends, family and communities of people who share your interests.',
      href: '/',
      linkTitle: 'View case study'
    },
    {
      customer: 'Microsoft Corp.',
      title: 'Management system',
      description: 'Flowbite helps you connect with friends, family and communities of people who share your interests.',
      href: '/',
      linkTitle: 'View case study'
    },
    {
      customer: 'Adobe Inc.',
      title: 'Logo design',
      description: 'Flowbite helps you connect with friends, family and communities of people who share your interests.',
      href: '/',
      linkTitle: 'View case study'
    }
  ]
</script>  
<Section name="schedule">
  <Portfolio title='Our work' subtitle='Crafted with skill and care to help our clients grow their business!'>
    {#each portfolios as item}
      <PortfolioItem {item}/>
    {/each}
  </Portfolio>
</Section>
```