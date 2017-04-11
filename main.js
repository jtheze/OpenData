jQuery(document).ready(function($) {
    $.ajax({
        methode: 'get',
        url: 'https://public.opendatasoft.com/api/v2/catalog/datasets/geoflar-departements-2015/exports/json?rows=-1&pretty=false&timezone=UTC',
        dataType: 'json'
    }).done(function(records) {

        for (i = 0; i < records.length; i++) {
            dept = records[i];
            line = '<tr id=' + dept.code_dept + '>';
            line += '<td>' + dept.code_dept + '</td>';
            line += '<td>' + dept.nom_dept + '</td>';
            line += '<td>' + dept.nom_chf + '</td>';
            line += '<td>' + dept.nom_reg + '</td>';
            line += '</tr>';
            $('#list #dept').append(line);
        }

    });
});
