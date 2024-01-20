<script>
    import { goto } from "$app/navigation";

    // @ts-nocheck

    /**
     * @type {any}
     */
    export let image,
        title,
        description,
        date,
        author,
        slug,
        tags,
        size="medium";
</script>

<div class="w-full h-full bg-black z-10 rounded-[10px] relative group">
    <div
        class="card-background opacity-50 absolute inset-0"
        style="background-image: url({image});"
    ></div>
    <card
        class="flex flex-col justify-end z-30  transition-opacity duration-200 hover:opacity-100 opacity-60  items-start {size === "medium"? 'px-[2vw] py-[3vh] gap-1' : 'p-[12px] '} w-full h-full bg-opacity-50 relative"
    >
        <button
            class="text-white  {size == "medium"? 'min-w-[100px] p-1 text-[16px] rounded-md' : 'text-[10px] px-[4px] py-[2px] rounded-sm w-fit max-h-fit h-[25px]'} justify-center items-center flex bg-blue-400"
        >
            {tags[0]}
        </button>
        <button on:click={()=>goto(`/blogs/${slug}`)} class="text-white font-bold {size=="medium"? 'text-[24px]' : 'text-[14px] leading-4'}">
            {title}
        </button>
        {#if size=="medium"}
            <div class="gap-4 flex more-info">
                <p class="text-white text-[14px]">
                    <img
                        src="https://img.freepik.com/premium-vector/avatar-icon-circle-male-sign-vector-illustration_276184-170.jpg"
                        alt="author"
                        class="inline-block w-[20px] h-[20px] mr-2 rounded-full"
                    />
                    {author}
                </p>
                <p class="text-white text-[14px]">
                    {date}
                </p>
            </div>
        {/if}
    </card>
</div>

<style>
    .card-background {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 10px;
        opacity: 0.5; /* Adjust this value to change the opacity of the background image */
        z-index: 20;
    }
</style>
