<script lang="ts">
    import PlayButton from "./buttons/play-button.svelte";
    import type { HandlePlayButtonClick, Song } from "$lib/type";

    const { 
        songs, 
        playingSongId, 
        handlePlayButtonClick, 
    } = $props<{ 
        songs: Song[];
        playingSongId: string | null;
        handlePlayButtonClick: HandlePlayButtonClick;
    }>();
</script>

<table class="table">
    <tbody>
        {#each songs as song}
            <tr>
                <td>
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
                </td>
                <td>
                    <PlayButton handlePlayButtonClick={() => handlePlayButtonClick(song)} />
                </td>
            </tr>
        {/each}
    </tbody>
</table>
