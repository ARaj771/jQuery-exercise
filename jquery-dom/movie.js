

$(function(){

$('#submit').on('click',function(e){
    e.preventDefault();
    let  $movie = $('#movie').val();
    let $rate =  $('#rating').val();
    $newLi = $(`<li> ${$movie} ${$rate} </li>`);
    $newLi.append('<button id = "remBtn">Remove</button>')
    $('ul').append($newLi);
})
$('ul').on ('click','li',function(){
    $(this).remove();
})
 
});







    
 


