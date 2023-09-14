<script lang="ts">
  import type PersonCardType from './PersonType';
  export let dummy: PersonCardType;
</script>

<div class="rounded-lg overflow-hidden shadow-xl custom-shadow dark:custom-shadow-black py-5 border border-slate-100 w-72">
  <div class="flex items-center justify-center">
    <img src={dummy.image} alt={dummy.imageAlt} class="rounded-lg w-32 h-32" />
  </div>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-2xl font-bold pt-4">{dummy.name}</h1>
    <h2 class="text-lg text-slate-600 p-2">{dummy.role}</h2>

    <div class="">
      <a href={dummy.github} target="_blank"> Github •</a>
      <a href={dummy.linkedin} target="_blank"> Linkedin •</a>
      <a href={dummy.instagram} target="_blank"> Insta </a>
    </div>
    <!-- <div class="w-[100%] border-[0.5px] border-slate-300 mb-5 mt-2" />
    <p class="p-12 text-center">{dummy.quote}</p> -->
  </div>
</div>
