#함수와 메서드
+ 함수와 메소드 구분
    + 함수: 오브젝트에 연결
    + 예: **Object**.create
    + 메소드: 오브젝트.prototype에 연결
    + 예: **Object**.prototype.toString
+ 호출방법
    + 함수:**Object**.create()
    + 메소드:**Object**.prototype.toString()
    + 또는 인스턴스를 생성하여 인스턴스.toString()


<br/>

# toString()
구분|타입|데이터(값)
---|----|---------
object|instance|변환대상
파라미터|Any|사용불가
반환|String|변환결과


+ 개요
    + 인스턴스 타입을 문자열 표시 형태로 변환하여 반환
+ 작성 방법
    + 파라미터에 값 작성 불가
    + Object 위치에 오브젝트가 아닌 인스턴스 작성
+ **toString**() 메커니즘
1. 대부분의 빌트인 오브젝트에 **toString**()이 있음
2. 모든 인스턴스에
    + Object.prototype.**toString**()이 설정됨
3. 오브젝트에 **toString**()이 있으면
    + 오브젝트의 **toString**()이 호출되고
4. 없으면 Object의 **toString**()이 호출됨

[예제](./1.html)

<br/>

# valueOf()

구분|타입|데이터(값)
---|----|---------
object|instance|대상 인스턴스
파라미터|Any|사용불가
반환|String|변환결과

+ 개요
    1. 오브젝트의 프리미티브 값 변환
    2. 프리미티브 값을 반환하는 오브젝트
    + Bollean,Date,Number,String 오브젝트
    3. 4개 오브젝트는 자신의 valueOf()가 호출되고
    + 다른 오브젝트는 Object.prototype.valueOf()가 호출된다
    4. Object는 프리미티브값이 없으므로 인스턴스 타입을 문자열로 반환

+ 작성방법
    + object 위치에 오브젝트가 아닌 인스턴스 작성

[예제](./2.html)

<br/>

# hasOwnproperty()

구분|타입|데이터(값)
---|----|---------
object|instance|기준 인스턴스
파라미터|String|프로퍼티 이름
반환|Bollean|true,false

+ 개요
    1. 인스턴스 소유의 프로퍼티 존재 여부 반환
    2. 인스턴스에 파라미터에 작성한 이름이 존재하면 true 반환
    + 존재하지 않으면 false 반환
    3. 자신이 만든 것이 아니라
    + 상속받은 프로퍼티이면 false 반환

+ 작성방법
    + object 위치에 오브젝트가 아닌 인스턴스 작성
    + 파라미터를 문자열로 변환하여 체크하므로 숫자 작성 가능

[예제](./3.html)

<br/>

# prototype chain
+ 개요
    1.prototype에 오브젝트를 연결하고
    + 연결된 오브젝트의 prototype에 다시 오브젝트를 연결
    2. 따라서 3개의 오브젝트가 여녈된 형태가 된다
    3. 이형태를 prototype chain 이라고 함
+ 연결
    + 함수 이름을 키로 하여 prototype에 연결한 형태
    + function Sports(){};
    + Sports.prototype["baseball"] = function(){}
+ 상속
    + 오브젝트의 prototype에 연결된 프로퍼티를
    + 인스턴스로 생성하여 연결한 형태
    + function soccer(){};
    + SPorts.prototype = new soccer(); <!-- 프로토타입체인 -->
+ new의 인스턴스 생성 기준
    1.Sports.prototype = new Soccer();
    - Soccer.prototype에 연결된 프로퍼티로 인스턴스 생성
    2.var obj = new Sports();
    - Sports.prototype에 연결된 프로퍼티로 인스턴스 생성
+ prototype Chain
    - prototype chain으로 인스턴스 연결       

<br/>

# global object

+ 글로벌 오브젝트
    + 빌트인 오브젝트
+ 전체를 통해 하나만 존재
    1. 전체 기준
    + 모든 script의 소스 코드 전체
+ 오브젝트 실체 없음
    1. Number,Array는 오브젝트 실체 있음
    + 오브젝트를 사용하여
    + Number.concat(), Array.concat()형태로 호출
    2. 글로벌 오브젝트는 오브젝트를 작성하지 못하고
    + 함수 호출 및 변수에 접근

<br/>

# global object의 특징

+ new 생성자로 호출 불가
    1. 인스턴스를 생성 할 수 없음
    + 따라서 메소드가 아닌 함수
    2. prototype 사용 여부는 엔진 개발자에게 일임
    + prototype은 자바스크립트의 기본 구조 이기 때문
+ 함수, 프로퍼티,변수
    + 글로벌 오브젝트의 함수를 글로벌함수로
    + 프로퍼티/변수를 글로벌 프로퍼티/변수로 부름

