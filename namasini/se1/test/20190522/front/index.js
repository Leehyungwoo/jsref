ajax("post", "http://127.0.0.1:3000/", function (data) {
    var data = JSON.parse(data)
    setList(data)
})



HTMLElement.prototype.css = function (str) {
    this.style.cssText = str
}



function setList(data) {
    mkTable(elRoot, data)
}

function createElement(parent, createEl) { //부모엘리먼트에 생성노드 추가
    var createEl = document.createElement(createEl)
    parent.appendChild(createEl)
    return createEl
}

function mkTable(parent, data) {
    var table = createElement(parent, 'table')
    table.className = "dataTable"
    mkTr(table, data)
}

function mkTr(parent, data) {
    for (var i = 0, lng = data.length + 1; i < lng; i++) {
        if (i === 0) {
            var tr = createElement(parent, 'tr')
            mkTh(tr, data[i])
        } else {
            var tr = createElement(parent, 'tr')
            mkTd(tr, data[i])
        }
    }
}
function mkTh(parent, colData) {
    for (var key in colData) {
        var th = createElement(parent, 'th')
        th.innerHTML = key
    }
}
function mkTd(parent, colData) {
    for (var key in colData) {
        var td = createElement(parent, 'td')
        td.innerHTML = colData[key]
    }
}





function ajax(methods, address, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.response;
            callback(response)
        }
    };
    xhttp.open(methods, address, true);
    xhttp.send();
}