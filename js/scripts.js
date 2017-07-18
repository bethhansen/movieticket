//Business Logic
function MovieSpec (title, time, age, number) { //contstructor blueprint
  this.feature = title; //assigning the past value into the object parameter
  this.time = time; //assigning the past value into the object parameter
  this.age = age; //assigning the past value into the object parameter
  this.quantity = number; //assigning the past value into the object parameter
}

MovieSpec.prototype.movieTitle = function () { //prototype toolbox to store methods for objects to utilize later
  if (this.time === 10) {
    return "Evening ";
  } else if (this.time === 8){
    return "Matinee ";
  } else {
    return "3D ";
  }
}

MovieSpec.prototype.price = function() { //prototype toolbox to store methods for objects to utilize later
  return (this.time + this.age) * this.quantity;
}

//User Interface Logic
$(document).ready(function() {
  $('#movies').submit(function(event) {
    event.preventDefault();

    var featureTitle = $('#features').val(); //create variable that gives a value to our feature show

    var movieTime = parseInt( $("input:radio[name=time]:checked").val() ); //gives a value to the check radio button
    var userAge = parseInt( $("input:radio[name=age]:checked").val() ); //gives a value to the check radio button
    var quantity = $('#ticketNumber').val(); //assigns a value to the number of tickets chosen

    var newPerson = new MovieSpec(featureTitle, movieTime, userAge, quantity);  //assinging constructor instance to the constructor object


    $(".receipt").show(); //displays the receipt
    $("#filmTitle").text(newPerson.feature); //calls the prototype and displays the return value to the html
    $("#filmTime").text(newPerson.movieTitle() ); //calls the prototype and displays the return value to the html
    $("#filmPrice").text(newPerson.price()); //calls the prototype and displays the return value to the html

  });
});
