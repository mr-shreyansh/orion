<script>
// @ts-nocheck

    export let data;
</script>

<div class="w-full flex flex-col md:px-[30px] ">
    <div  class="md:h-[60vh] background-image w-full" style="background-image: url({data.image});">
        <!-- <img src='/cyber.png' alt="blog" class="w-full h-full object-cover" /> -->
    </div>
    <div class="flex justify-between text-stone-600">
        <h>{data.author}</h>
        <h>{data.date}</h>
    </div>
    <div class="w-full flex justify-start gap-2 items-center">
        {#each data.tags as tag}
        <small class="text-stone-50 bg-zinc-500 p-1 rounded-sm">{tag}</small>
        {/each}
    </div>
    <div>
        <p>{@html data.description}</p>
    </div>
</div>

<style>
    .background-image {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 10px;
         /* Adjust this value to change the opacity of the background image */
        z-index: 20;
    }
</style>