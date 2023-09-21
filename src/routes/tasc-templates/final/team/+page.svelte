<script lang="ts">
  import Card from '$lib/components/profileCard/Card.svelte';
  import { team } from './team';
</script>

<!-- <div class="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-y-10 grid-col-1 max-w-8xl p-12 mx-24">
  {#each personDetails as dummy}
    <div class="self-center justify-self-center">
      <CardItem {dummy} />
    </div>
  {/each}
</div> -->

<!-- <div class="grid-container gap-y-5 gap-x-5 p-16"></div> -->
<div class="grid-container pt-5 px-4">
  {#each team as profile, index}
    <Card {...profile} lazy={index>4}/>
  {/each}
</div>

<!-- <div class="self-center justify-self-center"></div> -->
<!-- grid justify-center gap-y-10 grid-flow-dense auto-row-max md:grid-cols-2 lg:grid-cols-4 grid-col-1 -->

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    justify-items: center;
    justify-content: end;
    align-content: end;
    /* Define your column size and minimum width */
    row-gap: 4rem;
  }
</style>
