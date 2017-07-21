//buisness logic
function pizza(veg,size,meat,cheese)  {
  this.veg = veg
  this.size = size
  this.cheese = cheese
  this.meat = meat
};
pizza.prototype.newPizza = (function()  {
  return this.veg + this.size + this.cheese + this.meat;
});
//user interface
$(document).ready(function(){
  $("#pizza-menu").submit(function(event){
    event.preventDefault();
    var pizzaVegCost = parseInt($("input:radio[name=veg]:checked").val());
    var pizzaSizeCost = parseInt($("input:radio[name=size]:checked").val());
    var pizzaCheeseCost = parseInt($("input:radio[name=cheese]:checked").val());
    var pizzaMeatCost = parseInt($("input:radio[name=meat]:checked").val());

    var totalPrice = new pizza(pizzaMeatCost,pizzaCheeseCost,pizzaSizeCost,pizzaVegCost);

    $("#pizza-prices").text(totalPrice.newPizza());

  });
});
