import data from '$lib/test.json';

export const load = ({params}) => {
    const post = data.blogs.find((post)=> post.slug == params.slug)
    console.log(post)
    if (!post) return {status: 404}
    return post;
}