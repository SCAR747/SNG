const superheroes = require('superheroes');
const supervillains = require('supervillains');




   
$("#generate1").click(function(){
    var shname = superheroes.random();
    $(".sh").text(shname);
});

$("#generate2").click(function() {
    var svname = supervillains.random();
     $(".sv").text(svname);
});
