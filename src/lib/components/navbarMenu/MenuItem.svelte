<script lang="ts">
  export let href: string | null = null;
  export let target: string = '_self';
</script>

<li class="flex justify-center items-center w-20">
  <a {href} {target} class="text-black text-lg dark:text-white px-[10px] py-[5px] hover:text-white hover:bg-purple-500 dark:hover:bg-neutral-300 dark:hover:text-black rounded-sm duration-350 ease-in-out"><slot /></a>
</li>
