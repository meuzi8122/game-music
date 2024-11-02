<script lang="ts">
    import { createPlayer } from "$lib/global-states/player.svelte";

    const { src } = createPlayer();
</script>

{src}
<audio src={src}></audio>