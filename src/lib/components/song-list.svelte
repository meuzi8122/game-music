<script lang="ts">
    import PlayButton from "./buttons/play-button.svelte";
    import type { HandlePlayButtonClick, Song } from "$lib/type";

    const { songs, handlePlayButtonClick } = $props<{ songs: Song[]; handlePlayButtonClick: HandlePlayButtonClick; }>();
</script>

<div class="flex flex-col">
    {#each songs as song}
        <div class="flex justify-between">
            <div class="flex items-center gap-3">
                <div class="avatar">
                    <div class="mask mask-squircle h-14 w-14">
                        <img src={song.artworkUrl} alt={song.title} />
                    </div>
                </div>
                <div>
                    <div class="font-bold">{song.title}</div>
                    <a class="link link-hover text-sm opacity-80" href={`/songs/games/${song.game.id}`}>{song.game.title}</a>
                </div>
            </div>
            <PlayButton handlePlayButtonClick={() => handlePlayButtonClick(song)} />
        </div>
        <div class="divider divider-neutral"></div>
    {/each}
</div>
