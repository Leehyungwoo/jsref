//커링:하스켈 커리로부터 유래
//함수를 변형하는 과정, 매개변수가 비슷하다면 커링의 대상

// call(바인딩될대상,넘어갈매개변수1,넘어갈매개변수2.....)
//함수호출이라는것은 사실상 함수적용:문법설탕


var a = {
    b: 'hi',
    c: function () {
        console.log(this)
    }
}

var d = {
    e: 'bye',
}
a.c.call(d)


/*
function add(x,y){
	var oldx = x,oldy=y;
	if(typeof oldy === "undefined"){
		return function(newy){            // 이부분이커링
return oldx + newy
		}
	}
return x + y;
}
add(3)(4)

var add2000 = add(2000)
add2000(10)
    * /

/*
//위에코드 간단화
function add(x,y){
	if(typeof y === "undefined"){
		return function(y){
			return x+y
		}
	}
	return x+y;
}

*/