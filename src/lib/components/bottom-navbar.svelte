<script lang="ts">
    import { nowPlaying, pause, player, restart, stop } from "$lib/stores/player";
    import PauseIcon from "./icons/pause-icon.svelte";
    import PlayIcon from "./icons/play-icon.svelte";
</script>

<audio
    src={$player.song?.previewUrl}
    bind:paused={$player.paused}
    bind:currentTime={$player.currentTime}
    on:ended={stop}
></audio>

<div class="btm-nav">
    {#if $player.song && !$player.paused}
        <button class="bg-teal-200 text-teal-600" on:click={pause} disabled={!$player.song}>
            <PauseIcon cls="size-6" />
            <span class="btm-nav-label">{$nowPlaying}</span>
        </button>
    {:else}
        <button class="bg-teal-200 text-teal-600" on:click={restart} disabled={!$player.song}>
            <PlayIcon cls="size-6" />
            <span class="btm-nav-label">{$nowPlaying}</span>
        </button>
    {/if}
</div>
