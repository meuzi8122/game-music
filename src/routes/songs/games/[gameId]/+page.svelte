<script lang="ts">
    import Head from "$lib/components/head.svelte";
    import SongList from "$lib/components/song-list.svelte";
    import { PAGE_TITLE } from "$lib/constant";
    import { play } from "$lib/stores/player";

    const { data } = $props();
</script>

<Head title={`${data.game.title} | ${PAGE_TITLE}`} />

<div class="container mx-auto">
    <div class="flex justify-center mb-7">
        <h1 class="text-lg font-bold">{data.game.title}の楽曲</h1>
    </div>
    <SongList songs={data.songs} handlePlayButtonClick={play} />
</div>