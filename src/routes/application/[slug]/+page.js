export async function load({ params }) {
  const post = await import(`../${params.slug}.md`);
  const content = post.default;

  return {
    content
  };
}
