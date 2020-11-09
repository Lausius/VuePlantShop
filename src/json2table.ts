export function json2table(json: any, classes?: string) {
    var cols = Object.keys(json[0]);

    var headerRow = '';
    var bodyRows = '';

    classes = classes || '';

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    cols.map(function (col) {
        headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
    });

    json.map(function (row: any) {
        bodyRows += '<tr>';

        cols.map(function (colName) {
            bodyRows += '<td>' + row[colName] + '</td>';
        });

        bodyRows += '</tr>';
    });

    return `<table class="${classes}">
    <thead>
    <tr>${headerRow}</tr>
    </thead>
    <tbody> ${bodyRows}</tbody>
    </table>`;
}
