<script lang="ts">
    import Head from "$lib/components/head.svelte";
    import SongTable from "$lib/components/song-table.svelte";
    import { PAGE_TITLE } from "$lib/constant";
    import { createPlayer } from "$lib/global-states/player.svelte";

    const { data } = $props();

    const { play } = createPlayer();
</script>

<Head title={`${data.game.title} | ${PAGE_TITLE}`} />

<div class="container mx-auto">
    {data.game.title}
    <SongTable songs={data.songs} />
</div>