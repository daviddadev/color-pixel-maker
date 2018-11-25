// Global variables
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
});


function makeGrid(x, y) {
    $('tr').remove();
    
    // adds row and column grid
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }
    
    // adds color to cell
    $('td').click(function addColor() {
        color = $('#colorPicker').val();
        
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}

