$(document).ready(function() {
    $.ajax({
        url: "viewers.csv",
        dataType: "text",
}).done(successFunction);
})
function successFunction(data) {
    var allRows = data.split(/\r?\n|\r/);
    
var table='';
    for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {
      
      var rowCells = allRows[singleRow].split(',');
         table += '<div class="container viewer "><img src="/images/user.png" alt="Avatar" style="width:90px"> <br> <p>' + rowCells[0] +":" +'<br><br>'+ rowCells[1] +'</p></div>';
}
    $('.viewer').append(table);
 }
   