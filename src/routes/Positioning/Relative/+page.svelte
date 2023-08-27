<h1>Relative</h1>

<p>
  <strong>Position: relative</strong> is positioned relative to its normal position.
  Setting the top, right, bottom, and left properties of a relatively-positioned
  element will cause it to be adjusted away from its normal position. Other content
  will not be adjusted to fit into any gap left by the element.
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
    position: relative;
    top: 100px;
    left: 100px;
  }
</style>
