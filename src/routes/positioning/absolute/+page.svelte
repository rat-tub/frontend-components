<h1>Absolute</h1>
<p>
  <strong>Position: absolute</strong> takes the element out of the normal flow
  of the document. It is positioned relative to its closest positioned ancestor,
  if any; otherwise, it is placed relative to the initial containing block. Its
  final position is determined by the values of
  <strong>top</strong>, <strong>right</strong>, <strong>bottom</strong>, and
  <strong>left</strong>.
</p>

<section>
  <div class="container">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
    <div class="item item-7">7</div>
    <div class="item item-8">8</div>
    <div class="item item-9">9</div>
    <div class="item item-10">10</div>
    <div class="item item-11">11</div>
    <div class="item item-12">12</div>
  </div>
</section>

<style>
  section {
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .container {
    /* position: relative; */
    z-index: 0;
  }

  .item-1 {
    position: absolute;
    top: -50px;
    right: -50px;
    /* bottom: 0px; */
    /* left: 0px; */
    z-index: -1;
  }

  .item-2 {
    position: absolute;
    bottom: -50px;
    left: -50px;
    z-index: 1;
  }
</style>
