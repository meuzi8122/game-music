<script lang="ts">
    import { nowPlaying, pause, player, restart, stop } from "$lib/stores/player";
    import PauseIcon from "./icons/pause-icon.svelte";
    import PlayIcon from "./icons/play-icon.svelte";

    const BUTTON_CLASS = "size-6";
</script>

<audio
    src={$player.song?.previewUrl}
    bind:paused={$player.paused}
    bind:currentTime={$player.currentTime}
    on:ended={stop}
></audio>

<div class="btm-nav">
    {#if $player.song && !$player.paused}
        <button on:click={pause} disabled={!$player.song}>
            <PauseIcon cls={BUTTON_CLASS} />
            <span class="btm-nav-label">{$nowPlaying}</span>
        </button>
    {:else}
        <button on:click={restart} disabled={!$player.song}>
            <PlayIcon cls={BUTTON_CLASS} />
            <span class="btm-nav-label">{$nowPlaying}</span>
        </button>
    {/if}
</div>
