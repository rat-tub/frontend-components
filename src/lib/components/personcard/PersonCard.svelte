<script lang="ts">
  import CardItem from './CardItem.svelte';
  import PersonDetails from './PersonDetails.json';
  import type PersonCardType from './PersonType';
  const personDetails: PersonCardType[] = PersonDetails;
  //   let dummy: PersonCardType = {
  //     image: '/src/lib/assets/Shiba.png', //link to image
  //     imageAlt: 'hello',
  //     name: 'Kausthubh J Rao',
  //     role: 'Technical Head',
  //     quote: 'Good Morning can wait till 12pm',
  //     github: 'hello',
  //     linkedin: 'hello',
  //     instagram: 'hello',
  //   };
</script>

<!-- <div class="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-y-10 grid-col-1 max-w-8xl p-12 mx-24">
  {#each personDetails as dummy}
    <div class="self-center justify-self-center">
      <CardItem {dummy} />
    </div>
  {/each}
</div> -->
<div class="grid-container gap-y-5 gap-x-5 p-16">
  {#each personDetails as dummy}
    <CardItem {dummy} />
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
