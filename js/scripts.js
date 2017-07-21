//buisness logic
function pizza(toppings,size,cost)  {
  this.topping = topping;
  this.size = size
  this.sauce =sauce
};
pizza.prototype.newPizza = (function()  {
  return this.pizza + this.size + this.topping;
});



//user interface
$(document).ready(function(){
  // var pizzaSizeCost = ("#size").val();
  $("#pizza-menu").submit(function(event){
    event.preventDefault();
    var pizzaSauceCost = $("input:radio[name=flavor]:checked").val();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var pizzaToppingCost = parseInt($(this).val());

      $('#pizza-responses').append(pizzaToppingCost + "<br>");
      console.log(pizzaToppingCost)
      // var totalPrice = new pizza (pizzaToppingCost, pizzaSizeCost, pizzaSauceCost);

    });

    console.log(pizzaToppingCost)

    // $('#transportation_survey').hide();
  });
});
