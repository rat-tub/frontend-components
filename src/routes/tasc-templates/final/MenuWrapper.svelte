<script lang="ts">
  import Menu from '$lib/components/hamburger/Menu.svelte';
  import MenuItem from '$lib/components/hamburger/MenuItem.svelte';
  import NavbarMenuItem from '$lib/components/navbarMenu/MenuItem.svelte';

  import { base } from '$app/paths';

  export let menuToggle: boolean;
</script>

<div class="hidden md:flex gap-6">
  <NavbarMenuItem href="{base}/tasc-templates/final">Home</NavbarMenuItem>
  <NavbarMenuItem href="{base}/tasc-templates/final/events">Events</NavbarMenuItem>
  <NavbarMenuItem href="{base}/tasc-templates/final/team">Team</NavbarMenuItem>
  <NavbarMenuItem>Contact</NavbarMenuItem>
</div>

<div class="md:hidden">
  <Menu {menuToggle}>
    <MenuItem href="{base}/tasc-templates/final">Home</MenuItem>
    <MenuItem href="{base}/tasc-templates/final/events">Events</MenuItem>
    <MenuItem href="{base}/tasc-templates/final/team">Team</MenuItem>
    <MenuItem>Contact</MenuItem>
    <MenuItem href="https://github.com/tasc-nmamit" target="_blank">Github</MenuItem>
  </Menu>
</div>
