$(document).ready(function() {
  $('section').hide();
  $('a').click(function() {
    var myClass = this.className;
    $('section.'+myClass).toggle(100);
    $('section').not('section.'+myClass).hide();
  });
})
