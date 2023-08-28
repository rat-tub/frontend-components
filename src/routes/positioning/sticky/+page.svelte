<h1>Sticky</h1>

<p>
  <strong>Position: sticky</strong> is positioned based on the user's scroll position.
  A sticky element toggles between relative and fixed, depending on the scroll position.
  It is positioned relative until a given offset position is met in the viewport
  - then it "sticks" in place (like position:fixed). For sticky to work, we need
  to define the top property.
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

<style>
  .item-1 {
    position: sticky;
    top: 0px;
  }
  .item-2 {
    position: sticky;
    top: 50px;
  }
  .item-3 {
    position: sticky;
    top: 100px;
  }
  .item-4 {
    position: sticky;
    top: 150px;
  }
</style>
