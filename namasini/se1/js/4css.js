// document.body.style['background'] = "blue";
// document.body.style['color'] = "white";

// document.body.style.cssText += "border:5px solid black; padding:50px"
// console.dir(document.body.style.cssText)






// HTMLElement.prototype.css = function (str) {
//     this.style.cssText += str;
// }

// // document.body.style.cssText += "background:blue; color:white; padding:50px; color:red;"

// document.body.css("background:pink;color:black");
// // console.log(document.body.innerHTML)
// document.body.innerHTML += "hello,world!!";









HTMLElement.prototype.css = function (str) {
    this.style.cssText += str;
}
HTMLElement.prototype.html = function (str, opt) {
    if (arguments.length === 0) {
        return this.innerHTML;
    }
    if (opt) this.innerHTML += str;
    else this.innerHTML = str;
}



// document.body.style.cssText += "background:blue; color:white; padding:50px; color:red;"

document.body.css("background:pink;color:black");
// console.log(document.body.innerHTML)
document.body.html('hi', true)

console.log(document.body.html())













//         * {
//     margin: 0;
//     padding: 0;
// }

// body {
//     background: pink;
//     color: black;
// }

//         .common {
//     background: red;
//     padding: 15px;
//     margin: 50px;
//     color: #fff
// }

// #elInline {
//     padding: 15px;
//     margin: 50px;
//     color: #fff;
//     background: green;
// }

// #elInlineBlock {
//     background: yellow;
//     display: inline - block;
//     margin: 50px;
//     padding: 15px;
// }