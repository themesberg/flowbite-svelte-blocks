import { ANALYTICS_ID_FLOWBITE } from '$env/static/private';
/** @type {import('./$types').LayoutServerLoad} \*/
export async function load({ fetch }) {
  try {
    const response = await fetch('/api');

    return {
      posts: await response.json(),
      ANALYTICS_ID_FLOWBITE
    };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
}
