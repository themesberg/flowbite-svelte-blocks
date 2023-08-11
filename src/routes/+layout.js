/** @type {import('./$types').LayoutLoad} */
export const load = async ({ fetch }) => {
  try {
    const response = await fetch('/api');

    return { posts: await response.json() };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
};
