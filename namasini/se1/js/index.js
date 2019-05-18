

post('http://localhost:9000', {}, (result) => {
    var data = JSON.parse(result);
    setList(data)
})


function setList(data) {
    mkTable(data, elRoot)
}

function mkTable(arr, parent) {
    //arr : object array
    var table = mkEl('table', parent);
    arr.trav((obj, i) => {
        if (i === 0) {
            mkRow(-1, table, obj, true);
        }
        mkRow(i, table, obj);
    })
}

function mkRow(idx, parent, obj, opt) {
    var tr = mkEl('tr', parent);
    if (idx === -1) {
        tr.css('background-color:gray');
        tr.css('padding:5px;color:#eee');
    }
    if (idx != 0 && idx % 2 == 1) {
        tr.css('background-color:#eee');
    }
    obj.trav((key, obj, j) => {
        var td = mkEl('td', tr)
        td.html(opt ? key : obj)
    })
}

function mkEl(tagName, parent) {
    var el = document.createElement(tagName)
    parent.appendChild(el)
    return el
}