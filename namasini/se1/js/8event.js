iptName.focus();

iptSecretNumber.onkeydown = function (e) {
    // elMsg.html(e.key, true)
}
iptSecretNumberConfirm.onkeyup = function () {
    var str = iptSecretNumber.value,
        check = this.value;
    console.log(str, check)
    if (str === check) {
        elConfirm.html("corrent password!!");
        elConfirm.css('color:blue')
    } else {
        elConfirm.html("wrong password!!");
        elConfirm.css('color:red')
    }
}
btnButton.onclick = function () {
    // elMsg.html(iptName.value + ',' + iptSecretNumber.value + ',' + selGender.value)
}



// btnButton.onmousedown = function () {
//     document.body.css('background:red')
// }

// btnButton.onmouseup = function () {
//     document.body.css('background:white')
// }
