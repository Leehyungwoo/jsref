function dir(arg) {
    console.dir(arg)
}



// var result = [];

// function search(tag) {


//     result.push(tag)
//     var childrens = tag.children


//     if (!childrens) { return }
//     for (var i = 0; i < childrens.length; i++) {
//         search(childrens[i])
//     }


// }

// search(elRoot)

// console.log(result)



var stack = []
var result = [];

function search() {

    var node = stack.shift()

    if (node) {
        result.push(node)
    } else {
        return
    }

    var child = node.children

    for (var i = 0; i < child.length; i++) {
        stack.unshift(child[child.length - 1])
    }
    search()

}

stack.push(elRoot)
search()
console.log(result)

