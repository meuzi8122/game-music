<script lang="ts">
    import { pause, player, restart, stop } from "$lib/stores/player";
    import PauseButton from "$lib/components/buttons/pause-button.svelte";
    import PlayButton from "$lib/components/buttons/play-button.svelte";
</script>

<audio src={$player.song?.previewUrl} bind:paused={$player.paused} bind:currentTime={$player.currentTime} on:ended={stop}></audio>

<footer class="footer bg-neutral text-neutral-content items-center">
    <aside class="grid-flow-col items-center">                    
        <div class="avatar">
            <div class="h-14 w-14">
                <img src={$player.song?.artworkUrl} alt={$player.song?.title} />
            </div>
        </div>
    </aside>
    <p>{$player.song ? `${$player.song.title} / ${$player.song.game.title}` : ""}</p>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {#if $player.song && !$player.paused}
            <PauseButton handlePauseButtonClick={pause} />   
        {:else}
            <PlayButton handlePlayButtonClick={restart} />
        {/if}
    </nav>
  </footer>