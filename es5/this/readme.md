# this
 

## 전역공간에서
window/global

```javascript
console.log(this)//window

```
## 함수 내부에서
window/global

```javascript
function a(){
    console.log(this)//window
}
a()


function b(){
    function c(){
        console.log(this)//window
    }
    c();
}
b()

var d ={
    e:function(){
        function f(){
            console.log(this)//window
        }
        f();
    }
}

d.e();

```

## 메소드 호출시
+ 메소드 호출 주체(메소드명앞)
+ 함수는 전역객체(window)의 메서드다.
```javascript

var a = {
    b:function(){
         console.log(this)  // a객체
    }
}

a.b()


var a = {
    b:{
        c:function(){
            console.log(this) //a.b객체
        }
    }

}

a.b.c()

```

+ 같은객체내의 this 바인딩하기 

```javascript
var a =10;
var obj ={
    a:20,
    b:function(){
        console.log(this.a)//20
   
        function c(){
            console.log(this.a)//10
        }
        c()
    }

  
}

obj.b();


var a =10;
var obj ={
    a:20,
    b:function(){
        var that = this
        console.log(that.a)//20
   
        function c(){
            console.log(that.a)//20
        }
        c()
    }

  
}

obj.b();


```




## callback에서
+ 기본적으로는 함수 내부에서와 동일  (함수의 this와 같다)
+ 제어권을 가진 함수가 callback의 this를 명시한경우 그에 따른다.
+ 개발자가 this를 바인딩한 채로 callback을 넘기면 그에 따른다



```javascript
function a(x,y,z){
    console.log(this,x,y,z)
}

var b ={c:'eee'}

a.call(b,1,2,3);

a.apply(b,[1,2,3])

var c = a.bind(b); //새로운 함수를 생성 = currying
c(1,2,3)

var d = a.bind(b,1,2);
d(3)


```

``` javascript
var callback = function(){
    console.dir(this) //window
}

var obj = {
    a:1,
    b:function(cb){
        cb();
    }
}

obj.b(callback)

var callback = function(){
    console.dir(this) //obj객체
}

var obj = {
    a:1,
    b:function(cb){
        cb.call(this); 
    }
}

obj.b(callback)

```



``` javascript
var callback = function(){
    console.dir(this)   //window
}

var obj = {
    a:1
}

setTimeout(callback,100)




var callback = function(){
    console.dir(this)   //obj
}

var obj = {
    a:1
}

setTimeout(callback.bind(obj),100)







```


+ 아래와같이 이벤트핸들러에서 this가 dom객체인 이유는 addEventListener메서드가 자체적으로 콜백함수를 호출할때는 Dom객체를 this로 명시해서그렇다..
+ 
```javascript
document.body.innerHTML ='<div id="A">abc</div>'

function cbFunc(x){
	console.log(this,x)  
}

document.getElementById('A').addEventListener('click',cbFunc)
$('#a').on('click',cbFunc)



document.body.innerHTML ='<div id="A">abc</div>'
var obj = {a:1}
 

document.getElementById('A').addEventListener('click',function(){
    console.dir(this)
}.bind(obj))
 


```


## 생성자함수에서
+ 인스턴스를 가르킴
```javascript
function Person(n,a){
    this.name=n;
    this.age=a;
}

var Lee = new Person('리',30)
console.log(Lee)
``` 
    

 