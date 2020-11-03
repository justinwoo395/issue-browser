let today = new Date();
document.getElementById('date').innerHTML = today.toDateString();

function format(row) {
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Owner:</td>'+
            '<td>' + row.user.login +'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Create time:</td>'+
            '<td>'+ row.created_at +'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Update time:</td>'+
            '<td>'+ row.updated_at +'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Body:</td>'+
            '<td>' + row.body + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>URL:</td>'+
            '<td>' + row.url + '</td>'+
        '</tr>'+
    '</table>';
}

$(document).ready(function() {
    var table = $('#issues').DataTable( {
        ajax: {
            url: "https://api.github.com/repos/walmartlabs/thorax/issues",
            dataSrc: ''
        },
        columns: [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { data: 'title' },
            { data: 'number'},
            { data: 'state'}
        ],
        "order": [[1, 'asc']]
    } );

    $('#issues tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
})


