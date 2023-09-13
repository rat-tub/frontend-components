<script lang="ts">
  export let href: string | null = null;
  export let target: string = '_self';
</script>

<li class="flex justify-center items-center">
  <a {href} {target} class="text-black dark:text-white px-[10px] py-[5px] hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black rounded-lg duration-350 ease-in-out"><slot /></a>
</li>
