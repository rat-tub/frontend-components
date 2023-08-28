<script>
  import { base } from "$app/paths";
  import "./style.css";
</script>

<nav>
  <a href="{base}/">Home</a>
  <a href="{base}/positioning/static/">Static</a>
  <a href="{base}/positioning/relative/">Relative</a>
  <a href="{base}/positioning/absolute">Absolute</a>
  <a href="{base}/positioning/fixed">Fixed</a>
  <a href="{base}/positioning/sticky">Sticky</a>
</nav>

<slot />
