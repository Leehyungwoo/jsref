
function main() {
    var str = "가나다라마바사";
    var arr = [];
    str.trav((chr, i) => {
        var num = str.charCodeAt(i); //문자의 코드번호 출력
        arr.push([chr, num])
    })


    arr.trav((ar, i) => {
        if (i === 0) return
        ar.push(ar[1] - arr[i - 1][1])
    })

    var ki = 12593; //    log(cca('ㄱ'))
    var ii = 12643; //    log(cca('ㅣ'))
    log(ki, ii)

    var str = 44032;
    var end = 55203;

    var str = ""
    around(100, i => {
        str += fcc(ki + i)
    })
    contents.html(str)

}
function fcc(num) {
    return String.fromCharCode(num)
}

function cca(chr) {
    return chr.charCodeAt(0)
}


main()
