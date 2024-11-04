<script lang="ts">
    import Head from "$lib/components/head.svelte";
    import SongList from "$lib/components/song-list.svelte";
    import { PAGE_TITLE } from "$lib/constant";
    import { play } from "$lib/stores/player";
    import type { Song } from "$lib/type";

    const { data } = $props();
</script>

<Head title={`楽曲検索 | ${PAGE_TITLE}`} />

<div class="container mx-auto">
    <div class="flex justify-center mb-7">
        <h1 class="text-lg font-bold">{`${data.keyword}の検索結果`}</h1>
    </div>
    <SongList songs={data.songs} handlePlayButtonClick={play} />
</div>