//함수에 프로퍼티를 추가하여 결과값을 캐시하면 다음 호출 시점에 복잡한 연산을 반복하지 않을수있다. 이런 활용법을 메모이제이션 패턴이라고 한다.
// 캐시할당이 메모이제이션이라고 봐도 될듯하다.
var myFunc = function (param) {
    if (!myFunc.cache[param]) {
        var result = {};
        //..비용이 많으 드는 수행
        myFunc.cache[param] = result
    }
    return myFunc.cache[param]

}

myFunc.cache = {};