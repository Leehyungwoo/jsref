# function

## hoisting

```javascript
    console.log(a())
    console.log(b())
    console.log(c())


    function a(){
        return 'a';
    }

    var b = function bb(){
        return 'bb';
    }

    var c = function (){
        return 'c'
    }

```


```javascript
    function a(){
        return 'a';
    }

    var b;
    var c;
    console.log(a())
    console.log(b())
    console.log(c())


   
    b = function bb(){
        return 'bb';
    }

    c = function (){
        return 'c'
    }

```
<br/><br/><br/>

## function declaration(함수선언문) , function expression(함수표현식)

```javascript
    // function declaration 함수선언문
    function a(){ 
        return 'a';
    }
    // named function expression 기명함수표현식
    var b = function bb(){
        return 'bb';
    }
    // (unnamed/annonymous)function expression(익명)함수표현식
    var c = function (){
        return 'c'
    }

```

```javascript
   // 변수 c선언
   // 익명함수 선언
   // 변수c에 익명함수 할당

    var c = function (){
        return 'c'
    }

```

<br><br><br>

## scope(유효범위), execution context(실행 컨텍스트)


``` javascript
var a = 1;
function outer(){
    console.log(a);

    function inner(){
        console.log(a);
        var a = 3;
    }
    inner();
    console.log(a);
}
outer();
console.log(a)
```


``` javascript
var a = 1;
function outer(){
    console.log(a); // a = 1

    function inner(){
        console.log(a); // a = undefined
        var a = 3;
    }
    /*
     function inner(){
        var a ;
        console.log(a)
        a = 3;
    }*/

    inner();
    console.log(a); // a = 1
}
outer();
console.log(a) // a = 1   
```
+ 전역 컨텍스트 생성(global)
1. 변수 a 선언
2. 함수 outer 선언 (global>outer)
3. 변수 a에 1 할당
4. outer함수 호출->outer 컨텍스트 생성
    - 4-1 함수 inner 선언
    - 4-2 outer scoped에서 a 탐색 -> global scope에서 a탐색->1출력
    - 4-3 inner함수 호출 - >inner 실행컨텍스트 생성
        - 4-3-1 변수 a선언
        - 4-3-2 inner scope에서 a탐색 ->undefined 출력
        - 4-3-3 변수a에 3 할당 
    - 4-4 inner 실행 컨텍스트 종료
    - 4-5 outer scope에서 a 탐색->globalscope에서 a 탐색 -> 1 출력
5. outer 실행 컨텍스트 종료
6. globalscope에서 a 탐색 -> 1 출력
+ 전역컨텍스트 종료.


## this

+ 메서드 내에서 this는 객체를 참조한다. 
```javascript

var obj = {
    a:1,
    b:function bb(){
        console.log(this) //this에 obj를 바인딩
    },
    c:function () {
        console.log(this.a) //1
    }
}

obj.b(); 
obj.c();




```



## callback 함수

```javascript
var aa = [1,2,3]
aa.forEach(function(){
	console.log(this) // 함수의 this는 윈도우기때문에 winddow
})

```

```javascript
document.body.innerHTML ='<div id="A">abc</div>'

function cbFunc(x){
	console.log(this,x) // click 이벤트 콜백함수의 this는 DOM.addEventListener에서 this는 DOM객체를 바인딩하고있기때문에 dom이 선택된다.
}

document.getElementById('A').addEventListener('click',cbFunc)
$('#a').on('click',cbFunc)
```

