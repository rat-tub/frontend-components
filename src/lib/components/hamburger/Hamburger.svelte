<script lang="ts">
  export let checked: boolean;
</script>

<div class="menuToggle">
  <input type="checkbox" bind:checked />

  <span />
  <span />
  <span />

  <div><slot /></div>
</div>

<style lang="scss">
  .menuToggle {
    display: block;

    width: 40px;
    height: 32px;

    z-index: 1;
    -webkit-user-select: none;
    user-select: none;

    input {
      display: block;
      position: relative;

      width: 100%;
      height: 100%;

      cursor: pointer;
      opacity: 0; /* hide this */
      z-index: 2; /* and place it over the hamburger */
      -webkit-touch-callout: none;
    }

    span {
      display: block;
      position: relative;

      top: -24px;
      width: 33px;
      height: 4px;

      margin-bottom: 5px;
      background: #cdcdcd;
      border-radius: 3px;
      z-index: 1;
      transform-origin: 4px 0px;
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
      &:first-child {
        transform-origin: 0% 0%;
      }
      &:nth-last-child(2) {
        transform-origin: 0% 100%;
      }
    }
  }

  .menuToggle {
    input {
      &:checked ~ span {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: #232323;
        &:nth-last-child(3) {
          opacity: 0;
          transform: rotate(0deg) scale(0.2, 0.2);
        }
        &:nth-last-child(2) {
          transform: rotate(-45deg) translate(0, -1px);
        }
      }
    }
  }
</style>
