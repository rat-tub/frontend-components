<h1>Static</h1>

<p>
  <strong>Position: static</strong> is the default position value of an element.
  It is positioned according to the normal flow of the document. The top, right,
  bottom, left, and z-index properties have no effect.
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
  .item-1 {
    position: static;
    top: -50px;
    right: -50px;
    z-index: 2;
  }

  .item-2 {
    position: static;
    bottom: -50px;
    left: -50px;
    z-index: 1;
  }
</style>
