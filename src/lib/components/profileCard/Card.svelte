<script lang="ts">
  export let image: string;
  export let imageAlt: string = 'profile';
  export let name: string;
  export let role: string;
  export let quote: string = 'I go to class after saying i wont go to class!!! <3333';
  export let target: string = '_blank';
  export let github: string | null = null;
  export let linkedin: string | null = null;
  export let instagram: string | null = null;
  // export let email: string | null = null;

  export let lazy: boolean;
  let src = lazy ? '' : image;
  let observer: IntersectionObserver | null = null;

  import lazyLoad from './lazyLoad';

  if (typeof window !== 'undefined') {
    if (lazy) {
      src = '';
      observer = new IntersectionObserver(onIntersect, { rootMargin: '200px' });
    }
  }

  function onIntersect(
    entries: {
      isIntersecting: boolean;
      target: Element;
    }[]
  ) {
    if (!src && entries[0].isIntersecting) {
      observer!.unobserve(entries[0].target);
      src = image;
    }
  }

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
  class="bg-[#f3e7fb] rounded-lg overflow-hidden shadow-xl dark:custom-shadow-black py-5 border border-[rgb(237,210,255)] w-72 dark:border-slate-700 cursor-pointer hover:scale-110 duration-300 ease-in-out dark:bg-[#272c3a]"
>
  <div class="flex items-center justify-center p-4">
    <!-- w-32 h-32 -->
    <img {src} alt={imageAlt} class="rounded-full w-full aspect-square object-cover border border-[#e5c6fc] dark:border-[#121928]" use:lazyLoad={observer} />
  </div>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-xl font-bold pt-4">{name}</h1>
    <h2 class="text-base font-medium dark:text-slate-400 text-zinc-600 p-2">{role}</h2>

    <div on:click|stopPropagation={() => {}} class="flex gap-5 py-2">
      <a href={github} {target}><Icon src={BsGithub} className="h-5 w-5" title="Github Link" /></a>
      <a href={linkedin} {target}><Icon src={BsLinkedin} className="h-5 w-5" title="LinkedIn" /></a>
      <a href={instagram} {target}><Icon src={BsInstagram} className="h-5 w-5" title="Instagram" /></a>
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
  class="fixed w-full h-screen bg-black bg-opacity-70 transition-opacity duration-300"
>
  <div on:click|preventDefault|stopPropagation={() => {}} class="mx-auto top-[20%] md:min-h-fit lg:w-1/4 md:w-1/2 w-[80%] min-h-max fixed inset-0 flex flex-col items-center bg-[#f3e7fb] rounded-lg shadow-lg card overflow-hidden dark:custom-shadow-black border border-[rgb(237,210,255)] dark:border-slate-700 cursor-pointer dark:bg-[#272c3a]">
    <div class="flex p-5 items-center justify-center" use:lazyLoad={observer}>
      <img {src} alt={imageAlt} class="md:w-64 md:h-64 w-full object-cover border border-[#e5c6fc] dark:border-[#121928]" />
    </div>
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-2xl font-bold pt-4">{name}</h1>
      <h2 class="text-base font-medium dark:text-slate-400 text-zinc-600 p-2">{role}</h2>

      <div on:click|stopPropagation={() => {}} class="flex gap-5 py-2">
        <a href={github} {target}><Icon src={BsGithub} className="h-5 w-5 hover:scale-125 transition-transform duration-300" title="Github" /></a>
        <a href={linkedin} {target}><Icon src={BsLinkedin} className="h-5 w-5 hover:scale-125 transition-transform duration-300" title="Instagram" /></a>
        <a href={instagram} {target}><Icon src={BsInstagram} className="h-5 w-5 hover:scale-125 transition-transform duration-300" title="LinkedIn" /></a>
      </div>
      <p class="text-center px-10 py-4">{quote}</p>
    </div>
  </div>
</div>
