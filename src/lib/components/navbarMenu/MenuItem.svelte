<script lang="ts">
  export let href: string | null = null;
  export let target: string = '_self';
</script>

<li class="flex justify-center items-center w-20">
  <a {href} {target} class="text-black text-md dark:text-white px-5 py-2 hover:text-white hover:bg-purple-500 dark:hover:bg-neutral-300 dark:hover:text-black rounded-md duration-350 ease-in-out"><slot /></a>
</li>
