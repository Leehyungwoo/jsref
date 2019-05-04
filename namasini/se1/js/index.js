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
