<script lang="ts">
  import Card from '$lib/components/profileCard2/Card.svelte';
  import { team } from './team';
</script>

<div class="grid-container pt-5 px-4">
  {#each team as profile}
    <Card {...profile} />
  {/each}
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    justify-items: center;
    justify-content: end;
    align-content: end;
    gap: 10px;
  }
</style>
