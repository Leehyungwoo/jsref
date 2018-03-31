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
