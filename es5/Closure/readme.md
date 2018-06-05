# closure

lexical environment :
선언 당시 환경에 대한 정보를 담는 객체<br>
(함수와 그 함수가 선언될 당시 환경정보 사이의 조합)<br>
함수 내부에서 생성한 **데이터**와 그 **유효범위**로 인해 발생하는 특수한 **현상/상태**

+ closure 사전적의미 : 닫혀있음,폐쇄성,완결성
+ 외부에 정보를 노출할수있는 유일한방법:return
+ return function하면 scope 및 lexical envvironment는 변하지 않는다.
+ return function 최초 선언시의 정보를 유지

클로저를 잘 활용하면 아래것들이 가능하다
1. 접근 권한 제어
2. 지역변수 보호
3. 데이터 보존 및 활용



## 접근권한제어,지역변수 보호
```javascript

function a(){
    var x = 1;
    function b(){
        console.log(x)  //접근가능
    }
    b();
}
a();
console.log(x) //접근불가
```

## 데이터 보존 및 활용
```javascript

function a(){
    var x = 1;
    return function b(){
        console.log(x)  //접근가능
    }
    b();
}
var c = a();
c()
```

## 접근권한제어,데이터 보존 및 활용
```javascript

function a(){
    var _x = 1;
    return {
        get x() {return _x;},
        set x(v) {_x = v;}

    }
}
var c = a();
c.x=10;
```

<br/><br/><br/><br/>

```javascript
function setName(name){
    return function(){
        return name;
    }
}
var sayMyName = setName('Lee');
sayMyName();
```


+ 전역 실행 컨텍스트 생성 global
1. 함수 setName 선언 global>setName
2. 변수 sayMyName 선언
   + 2-1. setName('Lee') 호출 -> setName 실행 컨텍스트 생성
     + 2-1-1. 지역변수 name선언 및 'Lee' 할당
     + 2-1-2. 익명함수 선언 global>setName>unnamed
     + 2-1-3. 익명함수 반환
3. setName실행 컨텍스트 종료
4. 변수 sayMyName에 반환된 함수를 할당
5. sayMyName 호출 ->sayMyName 실행 컨텍스트 생성 
    + 5-1. unnamed scope에서 name 탐색-> setName에서 name 탐색 -> 'Lee' 반환
+ 전역 실행 컨텍스트 종료 global

<br><br><br>

# closuere로 private member 만들기

- 자동차 게임 
    - 차량별로 연료량 및 연비는 랜덤
    - 유저별로 차량 하나씩 고르면 게임 시작
    - 각 유저는 자신의 턴에 주사위를 굴려 랜덤하게 나온 숫자만큼 이동함
    - 만약 연료가 부족하면 이동 불가
    - 가장 멀리 간 사람이 승리

프로토타입으로 차량한대의 기능을 만들어 연료,연비를 바탕으로 숫자만큼 이동, 연료 부족시 이동할수 없게 만듬

```javascript

    var car = {
        fuel:10,  //연료
        power:2,  //연비
        total:0,
        run:function(km){
            var wasteFuel = km /  this.power;
            if(this.fuel<wasteFuel){
                console.log('이동불가')
                return
            }
            this.fuel -=wasteFuel;
            this.total +=km;
        }
    }
    /* 
    외부에서 변경가능한 코드라 리팩토링이 필요함 
    외부에서 변경불가능하게 하려면, scope를 사용하면됨.
    
    (함수의 지역변수로 만들어 놓고,외부에 노출할 기능만 return 하면됨.)
    
    */
```



```javascript

    var car = function(f,p) {
        var fuel=f;  //연료
        var power=p;  //연비
        var total=0;
        return {
            run:function(km){
                var wasteFuel = km /  this.power;
                if(this.fuel<wasteFuel){
                    console.log('이동불가')
                    return
                }
                fuel -=wasteFuel;
                total +=km;
            }
        }
    }

    var car = createCar(10,2);
```


+ 함수에서 지역변수 및 내부함수 등을 생성한다
+ 외부에 노출시키고자 하는 멤버들로 구성된 객체를 return한다
    +  return한 객체에 포함되지 않은 멤버들은 private하다
    +  return한 객체에 포함된 멤버들은 public하다




