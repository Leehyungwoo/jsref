var showData = 10;
var pageNum = 0;

ajax("post", "http://127.0.0.1:3000/", "reciveDataMount=" + showData + "&pageNum=" + pageNum, function (data) {  //여기서 페이징으로 던지면 됌
    var data = JSON.parse(data);
    setList(data)

})

HTMLElement.prototype.css = function (str) {
    this.style.cssText = str
}

function setList(data) {
    mkTable(elRoot, data)
    mkUl(elRoot, data)
}

function createElement(parent, createEl) { //부모엘리먼트에 생성노드 추가
    var createEl = document.createElement(createEl)
    parent.appendChild(createEl)
    return createEl
}

function mkUl(parent, data) {
    var ul = createElement(parent, 'ul')
    ul.className = "pageNation";
    mkLi(ul, data)
}

function mkLi(parent, data) {
    var dataLen = data[data.length - 1].dataLen; //받는데이터에서 페이지의 총량
    var totalPageLen = Math.ceil(dataLen / showData); //클라에서 보여줄 페에지 총량
    for (var i = 0; i < totalPageLen; i++) {
        var li = createElement(parent, 'li')
        li.innerHTML = "<a href='#'>" + i + "</a>";
        (function (i) {
            li.onclick = function (e) {       //여기 한번 생각해보기
                e.preventDefault();
                console.log(i)
                elRoot.innerHTML = "";
                ajax("post", "http://127.0.0.1:3000/", "reciveDataMount=" + showData + "&pageNum=" + i, function (data) {
                    var data = JSON.parse(data);
                    setList(data)

                })
            }
        })(i)
    }
}

function mkTable(parent, data) {
    var table = createElement(parent, 'table')
    table.className = "dataTable"
    mkTr(table, data)
}

function mkTr(parent, data) {
    for (var i = 0, lng = data.length - 1; i < lng; i++) {
        if (i === 0) {
            var tr = createElement(parent, 'tr')
            mkTh(tr, data[i])
            var tr = createElement(parent, 'tr')
            mkTd(tr, data[i])
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

function ajax(methods, address, param, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.response;
            callback(response)
        }
    };
    xhttp.open(methods, address, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(param);
}

