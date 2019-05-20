btnFold.onclick = function () {
    if (!this.isFold) {
        elInput.css('display:none;');
        this.innerHTML = "+열기"
    } else {
        elInput.css('display:block;');
        this.innerHTML = "-닫기"
    }
    this.isFold = !this.isFold;
}
btnFold.onmousemove = function () {
    this.css('cursor:pointer;')
}

btnInsert.onclick = function () {
    var res = [],
        arr = ['name', 'age', 'gender', 'job'],
        obj = {}
    elInput.traverse(el => {
        if (el.tagName === 'INPUT') {
            res.push(el.value)
        } else if (el.tagName === "SELECT") {
            res.push(el.value)
        }
    })
    arr.trav((el, i) => {
        obj[el] = res[i]
    })
    obj.__command = "insert";
    post('http://localhost:9000', obj, data => {
        console.log(data)
    })
}

// post('http://localhost:9000', {}, (result) => {
//     var data = JSON.parse(result);
//     setList(data)
// })


function setList(data) {
    mkTable(data, elRoot)
}

function mkTable(arr, parent) {
    //arr : object array
    var table = mkEl('table', parent);
    table.css('width: 100%;')
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
        tr.css('background-color:gray;text-align:center;color:#eee');

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