<script lang="ts">
  import type PersonCardType from './PersonType';
  import { browser } from '$app/environment';
  export let dummy: PersonCardType;
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import BsGithub from 'svelte-icons-pack/bs/BsGithub';
  import BsInstagram from 'svelte-icons-pack/bs/BsInstagram';
  import BsLinkedin from 'svelte-icons-pack/bs/BsLinkedin';

  if (browser) {
    const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card');

    const largerCard = document.querySelector(`#largerCard`);
    const closeLargerCard = document.querySelector(`#closeLargerCard`);

    for (let i = 0; i <= cards.length; i++) {
      if (largerCard && closeLargerCard) {
        cards[i].addEventListener('click', () => {
          if (largerCard.classList.contains('opacity-0')) {
            largerCard.classList.remove('opacity-0', 'pointer-events-none');
            largerCard.classList.add('opacity-100', 'pointer-events-auto');
          }
        });

        closeLargerCard.addEventListener('click', () => {
          if (largerCard.classList.contains('opacity-100')) {
            largerCard.classList.remove('opacity-100', 'pointer-events-auto');
            largerCard.classList.add('opacity-0', 'pointer-events-none');
          }
        });
      }
    }
  }
</script>

<div class="bg-[#f3e7fb] card rounded-lg overflow-hidden shadow-xl dark:custom-shadow-black py-5 border border-[rgb(237,210,255)] w-72 dark:border-slate-700 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out dark:bg-[#272c3a]">
  <div class="flex items-center justify-center">
    <img src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?cs=srgb&dl=pexels-sindre-fs-1040881.jpg&fm=jpg" alt={dummy.imageAlt} class="rounded-full w-32 h-32 object-cover border border-[#e5c6fc] dark:border-[#121928]" />
  </div>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-2xl font-bold pt-4">{dummy.name}</h1>
    <h2 class="text-base font-medium dark:text-slate-400 text-zinc-600 p-2">{dummy.role}</h2>

    <div class="flex gap-5 py-2">
      <a href={dummy.github} target="_blank"><Icon src={BsGithub} className="h-5 w-5" title="Custom icon params" /></a>
      <a href={dummy.linkedin} target="_blank"> <Icon src={BsInstagram} className="h-5 w-5" title="Custom icon params" /></a>
      <a href={dummy.instagram} target="_blank"> <Icon src={BsLinkedin} className="h-5 w-5" title="Custom icon params" /></a>
    </div>
  </div>
</div>

<!-- Larger view -->
<div class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 pointer-events-none" id="largerCard">
  <div class="max-w-xl bg-white p-8 rounded-lg shadow-lg">
    <!-- Larger card content -->
    <div class="text-center p-3">
      <img src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?cs=srgb&dl=pexels-sindre-fs-1040881.jpg&fm=jpg" alt="Profile" class="rounded-lg w-72 h-72 object-cover border border-[#e5c6fc] dark:border-[#121928]" />
      <h1 class="text-3xl font-bold mt-4">{dummy.name}</h1>
      <h2 class="text-lg font-medium dark:text-slate-400 text-zinc-600 py-3">{dummy.role}</h2>
      <div class="flex gap-5 py-3 justify-center">
        <a href={dummy.github} target="_blank"><Icon src={BsGithub} className="h-5 w-5" title="Custom icon params" /></a>
        <a href={dummy.linkedin} target="_blank"> <Icon src={BsInstagram} className="h-5 w-5" title="Custom icon params" /></a>
        <a href={dummy.instagram} target="_blank"> <Icon src={BsLinkedin} className="h-5 w-5" title="Custom icon params" /></a>
      </div>
    </div>
    <div class="w-[100%] border-[0.5px] border-slate-300 mb-5 mt-2" />
    <p class="p-12 text-center">{dummy.quote}</p>
    <button class="mt-4 mx-auto block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" id="closeLargerCard">Close</button>
  </div>
</div>
