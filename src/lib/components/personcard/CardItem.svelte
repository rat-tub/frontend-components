<script lang="ts">
  import type PersonCardType from './PersonType';
  export let dummy: PersonCardType;
  import myIcon from '/src/lib/assets/github-mark-white.svg';
</script>

<div class=" rounded-lg overflow-hidden shadow-xl custom-shadow dark:custom-shadow-black py-5 border border-slate-100 w-72 dark:border-slate-400 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
  <div class="flex items-center justify-center">
    <img src={dummy.image} alt={dummy.imageAlt} class="rounded-lg w-32 h-32" />
  </div>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-2xl font-bold pt-4">{dummy.name}</h1>
    <h2 class="text-base font-medium dark:text-slate-600 text-zinc-600 p-2">{dummy.role}</h2>

    <div class="flex gap-5 py-2">
      <a href={dummy.github} target="_blank"><img src="/src/lib/assets/github-mark-white.svg" alt="GithubIcon" class="w-5 h-5" /></a>
      <a href={dummy.linkedin} target="_blank"> <img src="/src/lib/assets/github-mark-white.svg" alt="GithubIcon" class="w-5 h-5" /></a>
      <a href={dummy.instagram} target="_blank"> <img src="/src/lib/assets/github-mark-white.svg" alt="GithubIcon" class="w-5 h-5" /></a>
    </div>
    <!-- <div class="w-[100%] border-[0.5px] border-slate-300 mb-5 mt-2" />
    <p class="p-12 text-center">{dummy.quote}</p> -->
  </div>
</div>
