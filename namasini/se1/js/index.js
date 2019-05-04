var elRoot = document.getElementById('elRoot');
var result = []


function stackSeach(searchTarget) {
    var searchChild = searchTarget.children;

    for (var i = 0, lng = searchChild.length; i < lng; i++) {
        debugger
        if (searchChild) {
            result.push(searchChild[i])
            stackSeach(searchChild[i])
        } else {

            return
        }
    }
    return result
}

console.log(stackSeach(elRoot))
