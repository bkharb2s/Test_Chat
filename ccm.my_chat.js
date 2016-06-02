var i=0;
$(document).ready(function() { 
$('button').click(function(){
var message = $('textarea').val();
var old = $('#content').html();
i++;
                          
$('#content').html('<p>' + i +": "+ message + '</p>'+ old);                          
});
});