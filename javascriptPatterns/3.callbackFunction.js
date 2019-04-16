/* 아래와 같은경우 2번의 loop를 돌기때문에 비효율적이다. */

var findNodes = function () {
    var i = 100000,  //긴루프
        nodes = [],  //결과를 저장할 배열
        found;    //노드탐색결과
    while (i) {
        i -= 1;
        //이부분에 복잡한 로직
        nodes.push(found)
    }
    return nodes;
}


var hide = function (nodes) {
    var i = 0, max = nodes.length;
    for (; i < max; i += 1) {
        nodes[i].style.display = "none"
    }
}

hide(findNodes()) //함수실행


/* 아래의 경우 해결법*/


var findNodes = function (callback) {
    var i = 100000,
        nodes = [],
        found;
    if (typeof callback !== "function") {
        callback = false;
    }
    while (i) {
        i -= 1;
        //이부분에 복잡한 로직
        if (callback) {
            callback(found)
        }
        nodes.push(found)
    }
    return nodes
}


var hide = function (nodes) {
    nodes.style.display = "none"
}

findNodes(hide)


/*아래의 경우는 메서드가 들어가야할경우 */

var myapp = {};
myapp.color = "red";
myapp.paint = function (node) {
    node.style.color = this.color
}


var findNodes = function (callback, callback_obj) {
    var i = 100000,
        nodes = [],
        found;

    if (typeof callback === "string") {
        callback = callback_obj[callback]
    }
    //..


    if (typeof callback === "function") {
        callback.call(callback_obj, found)
    }
    //...
    while (i) {
        i -= 1;
        //이부분에 복잡한 로직
        if (callback) {
            callback(found)
        }
        nodes.push(found)
    }
    return nodes
}


findNodes("paint", myapp)
