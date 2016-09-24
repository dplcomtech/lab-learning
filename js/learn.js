$(document).ready(function() {
  $('section').hide();
  $('a').click(function() {
    var myClass = this.className;
    $('section.'+myClass).toggle('fast');
  });
})
