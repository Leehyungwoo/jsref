var ctx = elCanvas.getContext('2d');

var income = [100, 30, 35, 40, 10, 170, 165];


ctx.beginPath();
ctx.rect(10, 10, 300, 100);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.fillStyle = "gray";
ctx.fill();

drawLine(new XY(10, 60), new XY(310, 60))


function mkChart(income) {
    var interval = 60;
    var padding = 20
    var prevXY;
    var bottom = 240;


    for (var i = 0, lng = 4; i < lng; i++) {
        var num = i * 60;
        drawLine(new XY(0, bottom - num), new XY(400, bottom - num))  //x축
    }

    for (var i = 0, lng = 4; i < lng; i++) {
        var num = i * 100;
        drawLine(new XY(num, 0), new XY(num, bottom))  //y축
    }


    income.trav((num, i) => {
        // var from = new XY(i * interval, 0);
        // var to = new XY(i * interval, num);
        var xy = new XY(i * interval + padding, bottom - num);

        if (i === 0) {
            ctx.moveTo(xy.x, xy.y)
        } else {
            drawLine(prevXY, xy, 'blue')
        }
        prevXY = xy;

        // drawLine(from, to, "blue");
    })






}
function drawLine(from, to, color) {
    ctx.beginPath();  //새로그리기 시작
    ctx.moveTo(from.x, from.y);  //커서 이동
    ctx.lineTo(to.x, to.y); //이전 위치에서 현 위치로 라인생성
    ctx.strokeStyle = color ? color : "black";
    ctx.stroke(); //와곽선을 그어라
}
function XY(x, y) {
    this.x = x;
    this.y = y;
}