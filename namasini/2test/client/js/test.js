//elRoot를 순회하는법
//1. 스택에 노드를 넣는다
//2. 노드를 꺼낸다.
//3. 자식 노드를 알아낸다
//4. 자식노드를 하나씩 스택해 넣는다
//5. 자식노드가 없으면, 그 노드를 저장한다
//6. 다음 노드를 꺼낸다


var doc = document;
var html = document.children[0]; //html
var head = html.children[0]; //head
var body = html.children[1];


console.log(body.children[0])
console.log(body.children[1])