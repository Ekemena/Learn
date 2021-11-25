$('document').ready(function(){


document.getElementById('show').addEventListener('click', function(evt){
 alert(JSON.stringify($('#example5').data(), null, "  "));

});

document.getElementById('store').addEventListener('click', function(evt){
  $('#example5').data('key1', 1234);
  $('#example5').data('key2', "Joe Marini");
});

document.getElementById('remove').addEventListener('click', function(evt){
   $('#example5').removeData('key2');
});











 $('#getcontent').click(getContent);
 $('#loadHTML').click(loadHTML);


  //$('#example5').children().css('border', "3px solid red");
 var elem = $('#para1');
 //elem.prev().css('border', '2px solid blue');
// elem.next().css('border', '2px solid green') ;
// elem.parents().css('border', '2px solid black') ;
//elem.parentsUntil($('body')).css('border', '2px solid black');

//$('#example5').find('.para4').css('border', '4px solid pink');

var leftmargin = 0;
var border = 3;

$('#example5 p').each(function(index, element){
    $(element).css('border', border+'px solid red')
    .css('margin-left', leftmargin);
    border += 2;
    leftmargin += 10;
})

//alert($('#example5').html());
document.getElementById('create').addEventListener('click', function(evt){
  createContent();
});

document.getElementById('changeContent').addEventListener('click', function(){
  changeContent();
});

document.getElementById('ChangeAll').addEventListener('click', function(){
    changeAll();
  });

function createContent() {
     $('#example5').html('<p>This is the new content i created! </p>')
}

function changeContent(){
    var newItem = $('<p> This changed content</p>');
    $('.para2').html(newItem);
}

function changeAll() {
    $('#example5 p').text('am changing all text in p tag! ');
}

$('#example5 p').append('<p>appended test! </>');
$('#example5 p').prepend('<p>Hello </p>');

});

function getContent(){
     $.ajax('sampletextcontent.txt', {
          success: setContent,
          type: 'GET',
          dataType: 'text'
     });
}

function setContent(data, status, jqxhr){
    $('#example').text(data);
}

function loadHTML(){
     $('#example').load('samplehtml.html');
}