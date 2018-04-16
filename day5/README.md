# JSON

+ 개요
    + Javascipt Object notation
    + 빌트인 오브젝트
    + new로 인스턴스 생성 불가
    + 자바스크립트 값 타입 지원
    + 다른 언어에서도 사용하므로 완전하게 같지는 않음

+ 주요 기능
    + 데이터 송수신 상호간의 데이터 변환 기준
    + 오브젝트가 아닌 텍스트 형태이므로 송수신 속도가 빠름
    + XML에서 JSON으로 대체

+ 제이슨 문서
    + 국제 인터넷 표준화 기구(IETF)에 RFC4627 문서로 등록
    + MIME(multipurpose internet Mail Extension)타입
        + application/json
    + .json


# parse()

+ 개요
    + JSON형태의 문자열을 자바스크립트 값 타입으로 변환
    + JSON.parse()형태로 호출

+ 변환 작성 방법
    + object 위치에 JSON 오브젝트 작성
    + 첫번째 파라미터에 변환할 데이터 작성
    + 두번째 파라미터에 변환을 완료한 후 호출할 함수 작성

+ 숫자 값 제약
    + "123."은 "123.0"과 같이 소수점 아래에 숫자 작성
    + 16진수 불가, 10진수 사용
    + 0123과 같이 첫자리에 0 사용 불가
    + "1.23.e5"와 같이 지수 사용 불가

+ 큰 따옴표 사용


    ```javascript
        var result = JSON.parse("123");
        console.log(typeof result)

        var bool = JSON.parse("true")
        console.log(typeof bool)
        /* Boolean소문자 사용 가능, 대문자 불가*/

        Array.isArray(JSON.parse("[]"))
        /* [] 사용 가능 */
    
        JSON.parse("['ABC','가나다']")
        /* 오류 */

        console.log(JSON.parse('null'))
        //문자열 null을 NUll 타입으로 변환
        //"NULL"과 같이 대문자 사용 불가

    ```
    

    1. 데이터 체크를 해봐야한다. **undefined,null,Infinity,NaN etc...**
    
    2. 3차까지 뎁스를 깊게하는걸 자제한다. 왜냐하면 깊은복사(deep copy)로 데이터를 복제해야되는 경우가 있기때문이다.


# stringify()

+ 자바스크립트 형태이 값을 JSON 형태의 문자열로 변환 
+ JSON.stringify()로 호출

+ 변환기준
    + object위치에 JSON 오브젝트 자성
    + 첫번째 파라미터에 변환할 값을 자바스크립트 형태로 작성
        + 일반적으로 [],{}를 작성하지만 String 등도 작성가능


```javascript
    var result = JSON.stringify(123)
    console.log(typeof result)
    // 숫자열 타입을 문자열로 변환
    
    JSON.stringify([Infinity,NaN,null])
    // null로 변환

    console.log(JSON.stringify([true,false]))
    // 문자열로 변환
```




# function 오브젝트

# new Funcetion()
```javascript
var obj = new Function('book','return book')
```

+ new Function('book','return book')
    + 사용 자제
    + eval과 같은느낌.

+ 개요
    + 일반적으로 function 키워드를 사용하여 Function 오브젝트 생성
    + function getBook(title){return tite}
    + var result = getBook('자바스크립트')
+ function 오브젝트(인스턴스) 생성
    + 자바스크립트 엔진이 function 키워드를 만나면
    + 이름이 getBook인 Function 오브젝트 생성
    + new로 생성자를 호출하지 않았으므로 오브젝트로 표기
    + 성격 측면에서보면 인스턴스

+ function 분류
    + 빌트인 function 오브젝트
    + function 오브젝트
    + function 인스턴스(new 사용),prototype 사용

# 함수 생명 주기

+ 함수 호출
    + function getBook(title){return title}
    + var result = getBook('자바스크립트')
    + 함수를 호출하면서 파라미터값으로 자바스크립트를 넘겨줌
    + getBook()앞에 오브젝트를 작성하지않으면 글로벌 오브젝트 작성을 생략한것을 간주 (자바스크립트 엔진이 new Function('getBook','return title')으로 변환한다는소리) 사용 금하는것이 내부 엔진에서 처리

+ 함수 블록의 코드 실행
    + 자바스크립트 엔진 컨트롤이 함수의 처음으로 이동
    + 파라미터 이름에 넘겨 받은 파라미터 값 매핑
    + 함수블록 () 안의 코드 실행
    + return 문에 관계없이 반환 값을 갖고 함수를 호출한 곳으로 돌아감(return값이 없으면 undefined가 자동 반환)
    + 할당 연산자가 있으므로 반환된 값을 result 변수에 할당

# 함수 형태

+ 함수 선언문 
    + function getBook(book){코드}

+ 함수 표현식
    + var getBook = function(book){코드}

# 함수 선언문

+ function 키워드, 함수 이름,블록{} 작성은 필수
+ 파라미터, 블록 안의 코드 작성은 선택
+ 엔진이 function 키워드를 만나면 function 오브젝트 생성
+ 이때 함수 이름을 function 오브젝트로 이름 사용

# 함수 표현식

+ var name = function(){}  (name이 함수이름)
+ Function 오브젝트를 생성하여 변수에 할당
+ 식별자 위치의 함수 이름은 선택으로 작성하지 않아도 됨
    + var name = function abc(){} 에서 abc가 함수이름
    + 최근에 사용하지 않아도 되는 환경이 되어 사용하지않음
    + Function 오브젝트를 할당하는 변수 이름이 함수 이름

# call()

+ 개요
    + getTotal.call(this,10,20);
    + getTotal() 함수를 호출하면서 10과 20을 파라미터로 넘겨줌
+ 첫 번째 파라미터
    + 호출된 함수에서 this로 참조할 오브젝트 작성
    + 일반적으로 this를 사용하지만, 다른 오브젝트 사용가능
    + 호출된 함수의 파라미터로 넘어가지않고
    + 두번째 파라미터가 첫 번째 파라미터로 넘어감

```javascript
    function getTotal(one,two){
        return one + two;
    }
    console.log(getTotal.call(this,10,20));

    /*
        첫번째 파라미터 this는
        호출된 함수의 파라미터 값으로 넘어가지 않는다.
        10이 one에 설정되고 20이 two에 설정된다.
    */
```


```javascript
var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName:"Mary",
    lastName: "Doe",
}
person.fullName.call(myObject);  // Will return "Mary Doe"

```

# apply()

+ 개요
    + getTotal.apply(this,[10,20])
    + getTotal() 함수를 호출하면서 파라미터 10과 20을 배열로 넘겨줌
    + 함수호출 방법은 call과 같지만
    + 파라미터를 배열로 넘겨주는 것이 다름

+ 파라미터 수가 유동적일때 사용
    + 호출받는 파라미터 이름 매핑이 어려워 가독성 떨어짐

+ call(),apply()의 목적은
    + 첫번째 파라미터에 this와 같이 오브젝트를 사용하는것

**※파라미터값이 유동적이면 apply, 고정적이면 call을 사용한다. 둘다 가능하면 call이 더 시멘틱하니 권장한다.**

**es6에서는 더좋은것이 있다.**

```javascript
function getTotal(){
    var total = 0;
    for(var k = 0; k<arguments.length;k++){

        total += arguments[k];
    }
    return total;
}
console.log(getTotal.apply(this,[10,20,30]))
```


# Math
+ 수학용 함수 제공
+ 빌트인 오브젝트
+ 싱글톤: new로 인스턴스를 생성할수 없는 오브젝트
    + 소프트웨어 디자인 패턴에서 싱글턴 패턴(Singleton pattern)을 따르는 클래스는, 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴한다. 이와 같은 디자인 유형을 싱글턴 패턴이라고 한다. 주로 공통된 객체를 여러개 생성해서 사용하는 DBCP(DataBase Connection Pool)와 같은 상황에서 많이 사용된다.
 
+ Math,JSON 글로벌 오브젝트가 싱글 오브젝트
+ 함수가 prototype에 프로퍼티로 연결되어 있지 않고
+ Math 오브젝트에 직접 연결되어 있으므로 메소다가 아닌 함수
+ Math.round() 형태로 작성



메서드|내용
|-----|-------|
abs()| 절대값 
floor()|소수점 이하 버림
ceil() |소수 이하 절상
round() |소수 이하 반올림
max() |최댓값
min() |최솟값
random() |0이상 1미만의 수



```javascript

    var arr = [];
    var sum = null;
	for(var i = 0 ; i < 10 ; i++){
		len = Math.random();
		arr.push(len);
		sum += len;
	}
	console.log(arr)

	console.log('최소'+Math.min.apply(this,arr));
	console.log('최대'+Math.max.apply(this,arr));

	console.log('최소'+Math.min(...arr))
	console.log('최대'+Math.max(...arr))
	console.log(sum/arr.length)
```



# Date

+ 년월일,시분초,밀리초 제공
+ 밀리초가 프리미티브 값, 시간값이라고도 부름
+ UTC 기준
+ 월은 0부터시작   0:1월  1:2월  11:12월
+ 일은 1에서 31일까지 정수로 표시
+ 요일은 0부터 시작 0:일요일  1:월요일 6:토요일
+ Date오브젝트로 값을 수할때 숫자가 아니면 NaN반환



```javascript
console.log(new Date(2018,11,33))

//월일시분초 범위를 넘치면 상위 일자에 반영한다
//11월 33일을 작성하면 30일이 넘침으로 3을남기고 월에 1일 더한다

//월에 더한 결과가 11이 넘으면 다시 연도값에 1일 더한다
//- 또한 12월 31일에서 일을 33에 적용하면 2가 남는다.
//캘린더 라이브러리가 이런식
```



# es5 object

+ Object 오브젝트
    + 추가된 것은 모두 함수이며 메소드 없음
    + new로 생성한 인스턴스에 함수가 할당되지 않으므로
    + 함수에 값을 파라미터로 넘겨주어 처리

+ 인스턴스 생성 목적
    + 프로퍼티 이름은 같지만 인스턴스마다 다른 값을 가지려는것
    + Object.prototype에 연결된 메소드는 모든 빌트인 오브젝트에 상속
    + 상속할 필요가 없을 때는 함수가 효율적

+ Object 객체(오브젝트)에 추가된 함수는 이런 사상

+ Object는 모든 빌트인 오브젝트에 상속된다.



# defineProperty

+ 프로퍼티 값이 변경되지않음

```javascript
var obj ={};
Object.defineProperty(obj,'book',{
value:123
})
console.log(obj)
obj.book =456; //변경작업
console.log('변경후',obj)
```

```javascript
var obj ={};
Object.defineProperty(obj,'book',{
value:123
})
for(var name in obj){
	console.log(name)
}
//obj를 읽어 프로퍼티 이름을 읽으려 하였으나 출력되지 않는것은 열거 불가
```

+ 프로퍼티로 값 변경할수 있게하기

```javascript
var obj ={};
Object.defineProperty(obj,'book',{
value:123,
enumerable:true
})
for(var name in obj){
	console.log(name)
}
//enumerable:true 추가작성하여 열거 가능하도록 하기 때문.
//디폴트값은 enumerable:false로 열거 불가
```


# getter, get속성 , 게터

```javascript
var obj = {};
Object.defineProperty(obj,'book',{
 get:function(){ return '책'}
})
var result = obj.book;
console.log(result)
```

# setter, set속성, 세터

```javascript
  var bookValue,obj = {};
Object.defineProperty(obj,'book',{
 get:function(param){
     bookValue=param;
  },
  set:function(){
      return bookValue;
  }
})

obj.book = 123;
result = obj.book;
console.log(result)
```


# getOwnPropertyDescriptor

```javascript
var obj = Object.defineProperty({},'book',{
	value:'자바스크립트',
	writable:true,
	enumerable:true
})


// value 속성을 작성했으므로 데이터 프로퍼티 디스크립터

var desc = Object.getOwnPropertyDescriptor(obj,'book');
for(var key in desc){
	console.log(key + ':' + desc[key])
}

//데이터 프로퍼티 디스크립터에 속하는 속성 이름과 속성 값을 반환

```

# getOwnPropertyNames

```javascript
var abc = {'a':'b','c':'d','e':'f'}

console.log(Object.getOwnPropertyNames(abc))
```

# keys

```javascript
var abc = {'a':'b','c':'d','e':'f'}

console.log(Object.kesy(abc))
```

# getPrototypeOf()

+ prototype 오브젝트에 연결된 프로퍼티 반환


```javascript
function Book(){
	this.count = 123;
};

Book.prototype = {
	getValue:function(){},
	getAbount:function(){}
};

var obj = new Book();

var result = Object.getPrototypeOf(obj);
for(var key in result){
	console.log(key)
}

```

# preventExtensions()

+ 프로퍼티 추가 금지 설정
+ 삭제 변경은 가능

```javascript
function Book(){}

Book.prototype.getValue = function(){}

var obj = new Book();

Object.preventExtensions(obj)

obj.getAbount = function(){} // 에러가 발생하지 않지만 추가불가

console.log(obj.getAbount) //undefined

```


+ 프로퍼티 추가 금지 확인

```javascript
function Book(){}

Book.prototype.getValue = function(){}

var obj = new Book();
console.log(Object.isExtensible(obj)) 
Object.preventExtensions(obj)

console.log(Object.isExtensible(obj)) 

```


+ 새로운 속성을 추가할 수 없고, 현재 존재하는 모든 속성을 설정 불가능 상태로 만들어줍니다. 하지만 쓰기 가능한 속성의 값은 밀봉 후에도 변경할 수 있습니다

```javascript
var obj = Object.defineProperty({},'swim',{
    value:'수영',
    writable:true,
    enumerable:true,
    configuable:true
});
Object.seal(obj);


try{
    Object.defineProperty(obj,"baseball",{
        value:'야구'
    })

} catch(e) {
    console.log('추가불가 :baseball');
}
//프로퍼티를 추가할 수 없는 상태에서 추가하면 에러 발생

delete obj.swim;

console.log(obj.swim)


```


```javascript
var obj = Object.defineProperty({},'swim',{
    value:'수영',
    writable:true,
    enumerable:true,
    configuable:true
});

console.log(Object.isSealed(obj)) // 추가 삭제 금지를 설정했으므로 false반환
Object.seal(obj);
console.log(Object.isSealed(obj)) // 추가 삭제 금지를 설정했으므로 true반환

```



```javascript

var objOne = {};
Object.defineProperty(objOne, 'music', {
    value: '음악', 
    writable: true
});
Object.seal(objOne);

try {
    Object.defineProperty(objOne, 'book', {
        value: '책'
    });
} catch(e) {
    console.log(e);
    console.log('추가불가 : book');
}
console.log(objOne.book);


/* param 값은 던져졌으나 this.book값이 추가되지 않는다.*/
var objTwo ={
    music:'음악',
    add:function(param){
        this.book = param;
    }
}
Object.seal(objTwo);

try{
    objTwo.add('책')
} catch(e) {
    console.log('추가 불가:book')
}

console.log(objTwo.book);




```

# freeze()

```javascript
var obj = Object.defineProperty({},"swim",{
    value:'수영',
    writeable:true
})

Object.freeze(obj);


try{
    Object.defineProperty(obj,'swim',{
        value:'값 변경'
    })
}catch(e){
    console.log('value값 변경 불가')
}

```


# isFrozen()

```javascript
var obj = Object.defineProperty({},"swim",{
    value:'수영',
    writeable:true
})

Object.freeze(obj);
console.log(Object.isFrozen(obj))
```