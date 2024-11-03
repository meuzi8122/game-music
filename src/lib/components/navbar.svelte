<script lang="ts">
    import { goto } from "$app/navigation";
    import { PAGE_TITLE } from "$lib/constant";
    import SearchIcon from "./icons/search-icon.svelte";

    let keyword = $state("");
    let isModalOpen = $state(false);

    function search(event: any) {
        if (event.key == "Enter") {
            goto(`/songs/search?keyword=${keyword}`);
            isModalOpen = false;
        }
    }
</script>

<div class="navbar bg-base-100 mb-5">
    <div class="flex-1">
        <a class="btn btn-ghost text-xl" href="/">{PAGE_TITLE}</a>
    </div>
    <div class="flex-none">
        <label for="song_search_modal" class="btn btn-square btn-ghost">
            <SearchIcon />
        </label>
    </div>
</div>

<input type="checkbox" id="song_search_modal" class="modal-toggle" bind:checked={isModalOpen} />

<div class="modal" role="dialog">
    <div class="modal-box">
        <p class="text-lg font-bold">楽曲検索</p>
        <!-- svelte-ignore event_directive_deprecated -->
        <input type="text" placeholder="楽曲・ゲームタイトルを入力" class="input input-bordered input-primary w-full mt-4" bind:value={keyword} on:keydown={search} />
    </div>
    <label class="modal-backdrop" for="song_search_modal"></label>
</div>