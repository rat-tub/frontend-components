<script lang="ts">
  export let href: string | null = null;
  export let target: string = "_self";
</script>

<a {href} {target}>
  <li>
    <slot />
  </li>
</a>

<style>
  a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
  }

  a:hover {
    color: tomato;
  }

  li {
    padding: 10px 0;
    font-size: 22px;
  }
</style>
