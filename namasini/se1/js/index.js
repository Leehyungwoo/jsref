// Array.prototype.asc = function (col) {

//     if (col == undefined) {
//         this.sort((a, b) => {
//             if (a < b) return -1
//         });
//     } else {
//         this.sort((a, b) => {
//             if (a[col] < b[col]) return -1;
//         })
//     }
// }

// Array.prototype.desc = function (col) {
//     if (col == undefined) {
//         this.sort((a, b) => {
//             if (a > b) return -1
//         });
//     } else {
//         this.sort((a, b) => {
//             if (a[col] > b[col]) return -1;
//         })
//     }
// }


// var ar = ['이순신', '강감찬', '제갈량']
// var arNum = [7, 8, 3, 5, 2, 6]
// var arObj = [
//     { name: '이순신', age: 10 },
//     { name: '강감찬', age: 42 },
//     { name: '제갈량', age: 32 },
// ]
// var arr = [
//     ['이순신', 10],
//     ['강감찬', 42],
//     ['제갈량', 32],


// ]

// // ar.asc()
// // console.log(ar)

// // ar.desc()
// // console.log(ar)


// arObj.sort((a, b) => {
//     if (a.name < b.name) return -1;
// })

// dir(arObj)



// // arr.sort((a, b) => {
// //     if (a[0] < b[0]) return -1;
// // })
// // dir(arr)

// arr.asc(0)
// console.log(arr)



HTMLElement.prototype.mkTag = function (tagName, p) {
    var tag = document.createElement(tagName);
    this.appendChild(tag)
    return tag;
}


post('data/data.csv', {}, data => {
    mkArr(data)
    mkList(data)
})

function mkList(arr) {
    // var table = cf.mk
    var tag = contents.mkTag('div')
    tag.html('hello world')

}
function mkArr(data) {
    var arr = data.split("\r\n");
    var res = [];
    arr.trav((ln, i) => {
        res.push(ln.split('\t'))
    })
    return res
}