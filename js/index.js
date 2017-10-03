$(document).ready(function() {
  $('#it').hide();
  $('#it').css('visibility', 'visible');
  $('#balloon').draggable();

  $('#box').droppable({
      accept: '#balloon',
      drop: function(event, ui){
      $(this).hide();
      $('#balloon, #text').hide();
      $("#it").show();

      }
  });
})
