// 엔진엑스는 정적문서 요구는 post call 엑세스는 405에러.  conf에 error_page 405 =200 $uri; 셋팅
post('./data/list.csv', '', function (msg) {
    procMsg(msg)
})


function procMsg(msg) {
    var arr = msg.split('\r\n');
    arr.trav(function (str, i) {
        var div = document.createElement('div');
        div.innerHTML += str
        elRoot.appendChild(div)
    })

}   