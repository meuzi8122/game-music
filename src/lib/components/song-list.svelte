<script lang="ts">
    import PlayIcon from "./icons/play-icon.svelte";
    import type { Song } from "$lib/type";

    const { songs, handlePlayButtonClick } = $props<{ songs: Song[]; handlePlayButtonClick: (song: Song) => void; }>();
</script>

<div class="flex flex-col">
    {#each songs as song}
        <div class="flex justify-between" >
            <div class="flex items-center gap-3">
                <div class="avatar">
                    <div class="mask mask-squircle h-16 w-16">
                        <img src={song.artworkUrl} alt={song.title} />
                    </div>
                </div>
                <div>
                    <div class="font-bold" data-testid="song-title">{song.title}</div>
                    <a class="link link-hover text-sm opacity-80" href={`/songs/games/${song.game.id}`}>{song.game.title}</a>
                </div>
            </div>
            <!-- svelte-ignore event_directive_deprecated -->
            <button class="btn btn-ghost" on:click={() => handlePlayButtonClick(song)}>
                <PlayIcon cls="size-6" />
            </button>
        </div>
        <div class="divider divider-neutral"></div>
    {/each}
</div>
