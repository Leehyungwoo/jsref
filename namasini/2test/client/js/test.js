


// var doc = document;
// var html = document.children[0]; //html
// var head = html.children[0]; //head
// var body = html.children[1];

// //html 구조를 모르는상태에서 elRoot라는 dom 모델을 수신했다고 가정하고 분석해야한다면,
// //1. elRoot의 자식노드
// dir(elRoot.children)
// //간단한 구조일때, 각각의 자식을 알려면
// dir(elRoot.children[0].children)
// dir(elRoot.children[1].children)


//elRoot를 순회하는법
//1. 스택에 노드를 넣는다
//2. 노드를 꺼낸다.
//3. 자식 노드를 알아낸다
//4. 자식노드가 있으면 자식노드를 하나씩 스택해 넣는다
//5. 자식노드가 없으면, 그 노드를 저장한다
//6. 다음 노드를 꺼낸다



var stack = [];
stack.push(elRoot)

var res = []
dir(res)

traverse()
function traverse() {
    log('length', stack.length)

    var node = stack.pop()
    if (node) { res.push(node) }
    else { return }

    var child = node.children


    for (var i = 0; i < child.length; i++) {
        stack.push(child[i])
    }

    traverse()
}

console.log(res)
