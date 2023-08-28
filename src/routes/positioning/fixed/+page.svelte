<h1>Fixed</h1>

<p>
  <strong>Position: fixed</strong> is positioned relative to the viewport, which
  means it always stays in the same place even if the page is scrolled. As with relative,
  the top, right, bottom, and left properties are used.
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

<section>
  <h1>Hello, World!</h1>
</section>
<section>
  <h1>Hello, World!</h1>
</section>
<section>
  <h1>Hello, World!</h1>
</section>

<style>
  .item-1 {
    position: fixed;
  }

  .item-2 {
    position: fixed;
    bottom: -50px;
    left: 0px;
    border-radius: 0;
    width: 100%;
    z-index: 1;
  }

  .item-3 {
    position: fixed;
    bottom: -50px;
    left: -50px;
    z-index: 2;
  }
</style>
