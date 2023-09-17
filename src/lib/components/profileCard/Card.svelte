<script lang="ts">
  export let image: string;
  export let imageAlt: string = 'profile';
  export let name: string;
  export let role: string;
  export let quote: string = '';

  export let target: string = '_blank';
  export let github: string | null = null;
  export let linkedin: string | null = null;
  export let instagram: string | null = null;
  export let email: string | null = null;

  import Icon from 'svelte-icons-pack/Icon.svelte';
  import BsGithub from 'svelte-icons-pack/bs/BsGithub';
  import BsInstagram from 'svelte-icons-pack/bs/BsInstagram';
  import BsLinkedin from 'svelte-icons-pack/bs/BsLinkedin';

  let display: 'none' | 'block' | 'flex' = 'none';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:click|preventDefault={() => {
    display = 'block';
  }}
  class="bg-[#f3e7fb] card rounded-lg overflow-hidden shadow-xl dark:custom-shadow-black py-5 border border-[rgb(237,210,255)] w-72 dark:border-slate-700 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out dark:bg-[#272c3a]"
>
  <div class="flex items-center justify-center">
    <img src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?cs=srgb&dl=pexels-sindre-fs-1040881.jpg&fm=jpg" alt={imageAlt} class="rounded-full w-32 h-32 object-cover border border-[#e5c6fc] dark:border-[#121928]" />
  </div>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-2xl font-bold pt-4">{name}</h1>
    <h2 class="text-base font-medium dark:text-slate-400 text-zinc-600 p-2">{role}</h2>

    <div on:click|stopPropagation={() => {}} class="flex gap-5 py-2">
      <a href={github} {target}><Icon src={BsGithub} className="h-5 w-5" title="Custom icon params" /></a>
      <a href={linkedin} {target}><Icon src={BsInstagram} className="h-5 w-5" title="Custom icon params" /></a>
      <a href={instagram} {target}><Icon src={BsLinkedin} className="h-5 w-5" title="Custom icon params" /></a>
    </div>
  </div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<div
  on:click|preventDefault={() => {
    display = 'none';
    console.log('close popup');
  }}
  style="display: {display};"
  class="fixed w-full h-full bg-black bg-opacity-70 transition-opacity duration-300"
>
  <div on:click|preventDefault|stopPropagation={() => {}} class="mx-auto my-auto w-3/4 h-2/4 md:w-2/4 fixed inset-0 flex items-center bg-white rounded-lg shadow-lg card overflow-hidden dark:custom-shadow-black py-5 border border-[rgb(237,210,255)] dark:border-slate-700 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out dark:bg-[#272c3a]">
    <div class="flex items-center justify-center">
      <img src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?cs=srgb&dl=pexels-sindre-fs-1040881.jpg&fm=jpg" alt={imageAlt} class="rounded-full w-32 h-32 object-cover border border-[#e5c6fc] dark:border-[#121928]" />
    </div>
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-2xl font-bold pt-4">{name}</h1>
      <h2 class="text-base font-medium dark:text-slate-400 text-zinc-600 p-2">{role}</h2>

      <div class="flex gap-5 py-2">
        <a href={github} {target}><Icon src={BsGithub} className="h-5 w-5" title="Custom icon params" /></a>
        <a href={linkedin} {target}><Icon src={BsInstagram} className="h-5 w-5" title="Custom icon params" /></a>
        <a href={instagram} {target}><Icon src={BsLinkedin} className="h-5 w-5" title="Custom icon params" /></a>
      </div>
    </div>
  </div>
</div>
