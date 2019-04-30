
function sear(target) {
    if (target.children) {
        for (var i = 0, len = target.children.length; i < len; i++) {
            console.log(target.children[i])
            sear(target.children[i])
        }
    } else {
        return false;
    }
}

sear(elRoot)
