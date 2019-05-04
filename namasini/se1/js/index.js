var elRoot = document.getElementById('elRoot');




var stack = [];
stack.push(elRoot)

var res = [];
traverse()
console.log(res)
function traverse() {
    console.log('length', stack.length)
    var node = stack.shift();
    if (node) {
        res.push(node)
    } else {
        return;
    }
    var children = node.children;
    if (children.length > 0) {
        for (var i = 0, lng = children.length; i < lng; i++) {
            stack.push(children[i])
        }
    }
    traverse()
}
