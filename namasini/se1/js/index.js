post('data/list.csv', {}, function (msg) {
    procMsg(msg)
})

function procMsg(msg) {
    var arr = msg.split('\r\n')
    arr.trav(function (str, i) {
        var div = document.createElement('div')
        div.html(str)
        elRoot.appendChild(div);
    })
}
