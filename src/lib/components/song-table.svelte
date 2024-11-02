<script lang="ts">
    import type { Song } from "$lib/type";
    import PlayIcon from "./icon/play-icon.svelte";

    const { songs } = $props<{ songs: Song[] }>();
</script>

<div class="overflow-x-auto">
    <table class="table">
        <thead>
            <tr>
                <th></th>
                <th>楽曲タイトル</th>
                <th>ゲームタイトル</th>
                <!-- <th>配信元</th> -->
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each songs as song}
                <tr>
                    <td>
                        <div class="avatar">
                            <div class="mask mask-squircle h-14 w-14">
                                <img src={song.artworkUrl} alt={song.title} />
                            </div>
                        </div>
                    </td>
                    <td>{song.title}</td>
                    <td>
                        <a class="link link-hover" href={`/songs/games/${song.game.id}`}>{song.game.title}</a>
                    </td>
                    <!-- <td>
                        <a href={song.itunesUrl} target="_brank">Itunes</a>
                    </td> -->
                    <th>
                        <button class="btn btn-ghost">
                            <PlayIcon />
                        </button>
                    </th>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
