<script lang="ts">
    import Head from "$lib/components/head.svelte";
    import SongTable from "$lib/components/song-table.svelte";
    import { PAGE_TITLE } from "$lib/constant";
    import { player, play, pause } from "$lib/stores/player.js";
    import type { Song } from "$lib/type";

    const { data } = $props();

    function handlePlay(song: Song) {
        play(song)
    }

    function handlePause() {
        pause();
    }

</script>

<Head title={`${data.game.title} | ${PAGE_TITLE}`} />

<div class="container mx-auto">
    <div class="flex justify-center mb-5">
        <h1 class="text-lg font-bold">{data.game.title}の楽曲</h1>
    </div>
    <SongTable songs={data.songs} playingSongId={$player.song?.id && !$player.paused ? $player.song.id : null} handlePlayButtonClick={handlePlay} />
</div>