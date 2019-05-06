var elRoot = document.getElementById('elRoot');


var stack = [];

var res = [];
traverse(document.body)
console.log(res)


function traverse(node) {
    res.push(node)
    var child = node.children;
    if (child == 0) { return }
    for (var i = 0, lng = child.length; i < lng; i++) {
        traverse(child[i])
    }
}


// var elRoot = document.getElementById('elRoot');




// var stack = [];
// stack.push(document.body)

// var res = [];
// traverse()
// console.log(res)
// function traverse() {
//     console.log('length', stack.length)
//     var node = stack.shift();
//     if (node) {
//         res.push(node)
//     } else {
//         return;
//     }
//     var children = node.children;
//     if (children.length > 0) {
//         for (var i = 0, lng = children.length; i < lng; i++) {
//             stack.unshift(children[(lng - 1) - i])
//         }
//     }
//     traverse()
// }
