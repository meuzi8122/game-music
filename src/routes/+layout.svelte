<script lang="ts">
    import Audio from "$lib/components/audio.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import "$lib/globals.css";
</script>

<Navbar />
<slot></slot>
<Audio />