// //myStyle
// var doc = document;
// var html = document.children[0]

// function treaver(target) {
//     console.group(target)
//     for (var i = 0, len = target.childNodes.length; i < len; i++) {
//         if (target.childNodes[i].nodeType !== 3) {
//             console.dir(target.childNodes[i])
//             treaver(target.childNodes[i])
//         }
//     }
//     console.groupEnd()
// }

// treaver(document.querySelector('#elRoot'))


// // myStyle





//elRoot를 순회하는법
//1. 스택에 노드를 넣는다.
//2. 노드를 꺼낸다.
//2-5 자식노드를 알아낸다.
//3. 자식노드를 하나씩 스택에 넣는다
//4. 자식노드가 없으면, 그 노드를 저장한다.
//5. 다음 노드를 꺼낸다

// var stack = [];
// stack.push(document)

// var res = [];
// //1. 노드를 꺼낸다
// traverse()
// dir(res)
// function traverse() {
//     log('stack length', stack.length)
//     var node = stack.pop();   //stack.shift()
//     if (!node) return; //스택이 비었으면, 종료한다

//     res.push(node)

//     var children = node.children;
//     if (children.length > 0) {
//         for (var i = 0, len = children.length; i < len; i++) {
//             stack.push(children[i])
//         }
//     }
//     traverse();
// }

// var node = stack.pop();
// //2.
// var children = node.children;
// //3.
// if (children.length > 0) {
//     for (var i = 0, len = children.length; i < len; i++) {
//         stack.push(children[i])
//     }
// } else {
//     res.push(node)
// }

// //4. 노드를 꺼낸다







// // 반대


// var stack = [];
// stack.push(document)

// var res = [];
// //1. 노드를 꺼낸다
// traverse()
// dir(res)
// function traverse() {
//     // log('stack length', stack.length)
//     var node = stack.shift();   //stack.shift()
//     if (!node) return; //스택이 비었으면, 종료한다

//     res.push(node)

//     var children = node.children;
//     if (children.length > 0) {
//         for (var i = 0, len = children.length; i < len; i++) {
//             stack.push(children[i])
//         }
//     }
//     traverse();
// }


var stack = [];
stack.push(document)

var res = [];
//1. 노드를 꺼낸다
traverse()
dir(res)
function traverse() {
    log('stack length', stack.length)
    var node = stack.shift();
    if (!node) return; //스택이 비었으면, 종료한다

    res.push(node)

    var children = node.children;
    if (children.length > 0) {
        for (var i = 0, len = children.length; i < len; i++) {

            stack.unshift(children[(len - 1) - i])
        }
    }
    traverse();
}
















