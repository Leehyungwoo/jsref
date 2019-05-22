
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


    // around(14000, i => {
    //     str += String.fromCharCode(44032 + i)
    // })
    // contents.html(str)
    log(cca('ㄱ'))
    var ki = 12593;
    var str = ""
    around(100, i => {
        str += fcc(ki + i)
    })
    console.log(str)

}
function fcc(num) {
    return String.fromCharCode(num)
}

function cca(chr) {
    return chr.charCodeAt(0)
}


main()
