var ctx = elCanvas.getContext("2d")

//랜덤함수

btnRandom.onclick = function () {
    // var rv = gr(44) + 1

    // elShow.html(rv)
    var rvs = [];
    around(6, i => {
        rvs.push(gr(44) + 1)
    })
    elShow.html(rvs)

    var tm = setInterval(function () {
        var x = gr(600) + 50
        var y = gr(300) + 50

        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "pink";
        ctx.strokeStyle = "black"
        ctx.fill()
        ctx.stroke()
        // console.log(factorial(15))
    }, 20)


}


function factorial(num) {

    if (num === 1) { return 1 }

    return num * factorial(num - 1)
}






function gr(end) {
    return getRandom(0, end);
}
function getRandom(start, end) {
    //start값보다 같거나 크고,
    //end값보다 같거나 작은 랜덤 정수를 리턴한다
    var amount = end - start + 1;
    return parseInt((Math.random() * amount) + start)
}

function getRandomInteger() {
    return parseInt(Math.random() * 10)
}