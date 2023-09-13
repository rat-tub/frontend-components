<script lang="ts">
  export let menuToggle: Boolean;
  let transform: string;

  $: {
    if (menuToggle) {
      transform = "none";
    } else {
      transform = "translate(100%, 0)";
    }
  }
</script>

<ul class="menu" style="transform: {transform}">
  <slot />
</ul>

<style>
  .menu {
    position: fixed;

    right: 0;
    top: 0;

    width: 240px;
    padding: 50px;
    padding-top: 100px;

    background: #ededed;

    list-style-type: none;
    -webkit-font-smoothing: antialiased;

    transform: translate(100%, 0);
    transform-origin: 0% 0%;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
</style>
