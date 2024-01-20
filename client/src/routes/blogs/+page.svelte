<script>
    import { onMount } from "svelte";
    import BlogCard from "$lib/components/blogCard.svelte";
    import data from "$lib/test.json";
    import { goto } from "$app/navigation";

    let loading = true;

    let hoverSize = "small";

    onMount(async () => {
        console.log(data);
        loading = false;
    });
</script>

<div class="w-full flex flex-col gap-3">
    <header class="text-4xl text-red-300 ">
        <div
            class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px] min-w-[300px] md:min-w-[600px]"
        >
            <div class="neocard">
                <BlogCard
                    image={data.blogs[0].image}
                    title={data.blogs[0].title}
                    size="medium"
                    description={data.blogs[0].description}
                    date={data.blogs[0].date}
                    author={data.blogs[0].author}
                    slug={data.blogs[0].slug}
                    tags={data.blogs[0].tags}
                />
            </div>
            <div class="grid grid-cols-2 gap-4">
                {#if loading}
                    <p>Loading...</p>
                {:else}
                    {#each data?.blogs.slice(1, 5) as blog (blog.slug)}
                        <BlogCard
                            image={blog.image}
                            title={blog.title}
                            size="small"
                            description={blog.description}
                            date={blog.date}
                            author={blog.author}
                            slug={blog.slug}
                            tags={blog.tags}
                        />
                    {/each}
                {/if}
            </div>
        </div>
    </header>
    <!-- Trending  -->
    <div class="flex flex-col w-full h-full p-2 ">
        <h class="font-semibold bg-gradient-to-r to-white via-orange-50 p-1 my-2 rounded-lg from-red-300 via-25%">Trending</h>
        <div class="flex flex-col items-center md:flex-row gap-3 w-full justify-between md:h-[300px]">
            {#each data?.blogs.slice(0, 4) as blog (blog.slug)}
            <button on:click={()=>goto(`/blogs/${blog.slug}`)} class="md:w-[300px] min-w-[300px] w-full h-[100px] md:h-[300px]">
                <BlogCard
                    image={blog.image}
                    title={blog.title}
                    description={blog.description}
                    date={blog.date}
                    author={blog.author}
                    slug={blog.slug}
                    tags={blog.tags}
                    size="small"
                />
            </button>
        {/each}
        </div>
    </div>
</div>

<style>
    .neocard {
        border-radius: 25px;
        box-shadow:
            20px 20px 60px #bebebed5,
            -10px -10px 60px #ffffff1d;
    }
</style>
