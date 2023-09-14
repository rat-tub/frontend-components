<script lang="ts">
  import Menu from '$lib/components/hamburger/Menu.svelte';
  import MenuItem from '$lib/components/hamburger/MenuItem.svelte';
  import NavbarMenuItem from '$lib/components/navbarMenu/MenuItem.svelte';

  export let menuToggle: boolean;
</script>

<div class="hidden md:flex gap-6">
  <NavbarMenuItem>Home</NavbarMenuItem>
  <NavbarMenuItem>About</NavbarMenuItem>
  <NavbarMenuItem>Contact</NavbarMenuItem>
</div>

<div class="md:hidden">
  <Menu {menuToggle}>
    <MenuItem>Home</MenuItem>
    <MenuItem>About</MenuItem>
    <MenuItem>Contact</MenuItem>
    <MenuItem href="https://github.com/tasc-nmamit" target="_blank">Github</MenuItem>
  </Menu>
</div>
