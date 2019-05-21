var raw;
var objRaw = {}
var curId;

var obj = {
    __command: 'select'
}

post('http://localhost:9000', obj, (result) => {
    var data = JSON.parse(result);
    raw = data;
    raw.trav(el => {
        objRaw[el.id] = el
    })

    setList(data)
})


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
    if (this.html() === "입력") {
        obj.__command = "insert";
    } else if (this.html() === "수정") {
        obj.id = curId;
        obj.__command = "update";
    }

    post('http://localhost:9000', obj, result => {
        console.log(result)
        location.href = location.href
    })
}
btnDelete.onclick = function () {
    var obj = {
        __command: 'delete',
        id: curId
    }

    post('http://localhost:9000', obj, result => {
        location.href = location.href
    })
}

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
    obj.trav((key, val, j) => {
        if (key === "delYn") { return } //delYn 제거
        var td = mkEl('td', tr)
        td.css('font-size:13px; text-aign:center; padding:5px;')
        td.html(opt ? key : val)

        td.onmousemove = function () {
            var els = this.parentNode.children;
            for (var i = 0, lng = els.length; i < lng; i++) {
                var el = els[i];
                el.css('text-decoration:underline; cursor:pointer;')
            }
        };
        td.onmouseout = function () {
            var els = this.parentNode.children;
            for (var i = 0, lng = els.length; i < lng; i++) {
                var el = els[i];
                el.css('text-decoration:none;')
            }
        }
        td.onclick = function () {
            var id = this.parentNode.children[0].html();
            var datum = objRaw[id];

            curId = datum.id;
            iptName.value = datum.name;
            iptAge.value = datum.age;
            selectGender.value = datum.gender;
            iptJob.value = datum.job;
            btnDelete.css('display:inline')
            btnInsert.html("수정")
        };
    })
}

function mkEl(tagName, parent) {
    var el = document.createElement(tagName)
    parent.appendChild(el)
    return el
}