##  new Number()

+ 개요
    + 잘 사용안함.
    + 새로운 Number 인스턴스를 생성하여 반환
    + 파라미터값이 프리미티브 값으로 설정
    + 값을 설정하지않으면 0을 반환
    + new Number(true) 면 1로 변환후 반환
    + new Number('ABC') 파라미터 값이 숫자로 반환할 수 없으면 NaN으로 반환
<br/>

##  Number()

+ 개요
    + 파라미터 값을 숫자 값으로 반환
    + 파라미터에 값을 작성하지 않으면 0 반환
    + Number(null)  null은 0으로 변환
    + Number('ABC') 파라미터 값이 숫자로 변환할 수 없으면 NaN으로 반환 
    + Number(true) 면 1로 변환후 반환
    + Number(undefind) NaN로 반환
    + Number(0x14) 16진수를 10진수로 변환하여 반환

<br/>

##  parseInt()와의 차이

+ Number()와 parseInt().parseFloat() 차이 
+ 공통적 목적
    + String 타입의 숫자를 Number 타입으로 변환

+ parseInt()
    1. 글로벌 오브젝트에 존재
        - ES6에서는 Number.parseInt() 형태로 사용 가능
    2. 정수 값 반환, 소수 이하 짤림. Numbber()는 소수값 유지
    3. "123ABC"를 123으로 반환, Number()는 NaN
    4. 진수 사용 가능, Number()는 진수 사용 불가

+ parseFloat()
    + 실수 값 반환
    + 다른 기능은 parseInt()와 같음

<br/>



## toString()
+ 개요
    + 파라미터 값을 문자열로 변환하여 반환
    + 두 번째 파라미터를 작성 하지 않으면 10 진수 적용
    + Object 오브젝트의 tosTring()은 Object를 문자열로 변환
    + Numbre 오브젝트의 toString()은 문자열로 변환

<br/>

## valueof
+ Number 인스턴스의 프리미티브값 반환 

<br/>

<br/>



## 배열 개요

+ 배열 오브젝트
    + [123,"ABC","가나다"] 형태
    + 대괄호 안에 콤마로 구분하여 작성
    + 2의 32승(4,294,967,296) -1개 작성 가능
    + 123,"ABC"를 배열 엘리먼트라고 부름
    + 배열 전체를 엘리먼트 리스트라고함
    + 배열에 엘리먼트를 추가,삭제가능(불가능한 언어도 있음)
    + 엘리먼트 위치를 인덱스(index)라고 부름
    + 왼쪽부터 0번 인덱스,1번인덱스
+ 배열 특징
    + 작성 순서가 순서 의미를 가짐
    + 순서를 가지므로 처음부터 읽거나 인덱스를 지정하여 읽을 수 있음

+ 1차원배열
    + [1,2,3] 형태
+ 2차원배열
    + [[1,2,3],[4,5,6]]
    + 배열안에 배열이 있는 형태


## 배열 생성
+ 배열 오브젝트 생성 방법
    + 대괄호[]로 생성 
```javascript
        var sport2 = [];
        var sport = new Array()
```
+ Array()로 생성 
```javascript
        var sports = Array();
```
+ 배열에 초깃값 설정
   
    + 자바스크립트가 지원하는 모든 값 타입, 오브젝트 사용가능
 ```javascript   
         var sports = [12,34];
         var values= [12,'',true,'',{book:'자바스크립트'}]
 ```

+ 배열에 shift메서드. 
    배열이 10만개 이상이라고 가정했을때 중간에 하나 빼면 뒤에 배열들의 인덱스가 하나씩 앞당겨지기때문에 엔진에 부담을 줄수있다.
    + 이런 10만개이상일경우 object형태로 넣고 삭제하는것도 고려해볼만하다


## length
+ 개요
    + 배열의 엘리먼트 수 반환
    + [1,2,3]에서 마지막 인덱스는 2이고 length값은 3
    + (length-1)이 마지막 인덱스
    + 배열 오브젝트에 length 프로퍼티가 자동으로 설정됨
    + 열거,삭제는 할 수 없지만 변경은 가능
    + length 프로퍼티 값을 변경하면 배열의 엘리먼트 수에 반영됨


## delete
+ 오브젝트에서 프로퍼티 삭제
+ 삭제에 성공하면 true 실패하면 false
+ 프로퍼티는 삭제 가능하나 변수는 삭제 불가능.
+ delet sport.soccer
+ var를 키워드로 선언한 변수는 삭제할 수 없다
+ var 키워드를 사용하지 않으면 글로벌 변수가 되며 delete 연산자로 삭제 할  수 있다.


 ```javascript 
var globalVar = 123;
delete globalVar
console.log(delete globalVar)

 globalVar = 123
 console.log(delete globalVar);

try{
    console.log('globalVar:',globalVar)
}catch(e){
    console.log('globalVar 삭제')
}
/*globalVar 변수가 삭제되어 존재하지 않으므로 try문에서 에러가 발생하여 catch()문을 실행하게 된다*/
 ```


 ```javascript
var book = {
    title:'책',
    author:'저자'
}

console.log(delete book.title);
/*book 오브젝트의 title 프로퍼티가 삭제된다*/

console.log(book.title)
/*앞에서 삭제하여 존재하지않으므로 undefined 반환*/

console.log(delete book)
/*var 키워드를 사용했으므로 삭제 불가*/

sports={
    soccer:'11명'
}
console.log(delete sports)
/*var 키워드를 사용하지 않았으므로 삭제된다*/
```


 ```javascript
var values =[12,34,56,78,9]
console.log(delete values[2]);
/*배열의 인덱스 2의 엘리먼트를 삭제한다
    삭제에 성공하면 true가 반환된다
*/

console.log(values.length)
/*
    삭제가 되었으므로 length값이 5에서 4로 줄어야 하는데
    length값이 5가 출력된것은 배열처리 메커니즘 때문
    아래는 이에 대한 설명이다
*/

for(var k = 0; k<values.length;k++){
    console.log(values[k])
}
/*
    삭제한 인덱스 2에 undefined가 설정된 것을 볼 수 있다.
    이것은 배열 엘리먼트 삭제의 일반적인 메커니즘으로
    삭제를 하면 배열의 엘리먼트 위치를 당겨야하지만
    당기지 않고 그 위치에 undefined를 설정한다
*/

values = [12,34,56,78,9];
values[2] = undefined;
console.log(values[2])
/*
    values[2]에 undefined를 할당하더라도 배열처리에 영향을 미치지 않는다.
*/

```

```javascript
function Sports(){}
Sports.prototype.baseball="야구"
var obj = new Sports();

console.log(delete obj.baseball)
/*
true가 반환되므로 삭제가 된거같지만
인스턴스의 프로퍼티는 삭제되지 않는다
*/

console.log(obj.baseball);
/*
프로퍼티 값이 출력된 것은 삭제 되지 않았다는 반증
이유는 Sports.prototype에 baseball이 존재하기 때문
Sport.prototype에 연결된 프로퍼티는 다른 인스턴스에서 참조하기 때문에 삭제되지 않는다
*/

console.log(delete Sports.prototype.baseball)
/*
prototype에 연결된 프로퍼티를 삭제하면 삭제된다
*/

console.log(Sports.prototype.baseball);
console.log(obj.baseball)
/*
prototype에 연결된 프로퍼티를 삭제하면 인스턴스의 프로퍼티도 삭제된다
*/



배열이길어져서 메모리가 엄청크면 사용후에 
delete로 삭제하는경우도있다

```

## 배열의 toString()
```javascript
/* 2차원배열 문자열로 합치기*/
console.log([['가','나'],['다','라']].toString())

```

## concat , isArray
```javascript
var value = [1,2]
var result =value.concat(3,4)
console.log(result)

/* typeof array를 검사하면 "object"가 반환되었는데 es5 isArray의 등장으로 구분이 손쉬워졌다.*/
console.log(Array.isArray(result))

var result2 = value.concat([5,6],[7,8])
console.log(result2)
```

## push
```javascript
var value = [1,2,3];
var len = value.push('456');
console.log(value)
console.log(len)
```

## unshift
```javascript
var value = [1,2,3];
var len =value.unshift(45);
console.log(value)
console.log(len)
value.unshift([78],[12])
console.log(value)

```

## join
+ 엘리먼트와 분리자를 하나씩 결합하고
    + 문자열로 연결하여 반환
+ [0]번 인덱스에 이어서 분리자 연결
    + 이어서 [1]번 인덱스에 분리자 연결
    + 마지막 엘리먼트에는 분리자를 첨부하지 않음
+ data위치의 배열은 변경되지 않음

```javascript
var value=[1,2,3];
console.log(value,join())
/*
파라미터를 작성하지않으면 콤마를 분리자로 사용
각엘리먼트 끝에 분리자를 첨부하고 문자열로 연결하여 반환
*/

console.log(value.join('## ');
/*
엘리먼트 값에 "## "을 첨부한 후 문자열로 연결하여 반환
*/

console.log(value.join(''));

/*
,를 제거하여 문자열 반환
*/
```


## pop

```javascript
var value = [1,2,345]
var result = value.pop();

console.log(result)
console.log(value)

```

## shift
+ 배열의 첫 번째 엘리먼트 삭제하고
  삭제한 엘리먼트 반환


```javascript
var value = [123,4,5]
var result = value.shift();

console.log(result)
console.log(value)

```


## sort
+ 배열의 엘리먼트 값을 승순(가나다순)으로 정렬하여 반환
+ 정렬기준
    + 정렬 기준은 엘리먼트 값의 Unicode
    + Unicode 값이 작으면 앞에 오고 크면 뒤에 옴
    + sort 대상 배열도 정렬되어 순서가 바뀜
    + 엘리먼트 값이 undefined이면 끝으로 이동
+ 역순 sort는 제공하지 않음
    + 파라미터에 하무를 작성하여 sort 가능


```javascript
var value = [4,2,3,1]
var result = value.sort()

console.log(result)

//sort 대상인 value도 sort된다
console.log(value)

console.log(['A1','A01','B2','B02'].sort())
//왼쪽에서 오른쪽으로 문자 하나씩 정렬, 따라서 A01이 A1보다 앞에온다

console.log([,78,12].sort())
//undefined는 끝으로 이동

/* 
5000건 sort하는것 1초도 안걸린다. 
p.s) 이런것은 서버보다는 클라이언트에서 하는게 낫다
*/

```

```javascript
var value =[101,26,7,1234];
value.sort();
console.log(value)
/* 
sort 결과를 보면 사람들이 생각 하는것과 다름
이렇게 정렬된 이유는

자바스크립트가 숫자를 문자열로 변환하고
앞에서부터 하나씩 Unicode로 비교하여 sort하기 때문

101과 26에서 1이 2보다 작으므로 다음값은 비교하지 않기때문

따라서 101이 26보다 작은 것으로 인식된다

두번째 파라미터에 함수를 작성하여 사람이 인식하는방법으로 바꾸어야한다
*/
```

## reverse
+ 역순으로 바꿈 
```javascript
var value = [1,3,7,6]
var result = value.reverse()

console.log(value)
console.log(result)

```

## slice
+ 첫번째 파라미터의 인덱스부터 두번째 파라미터의 인덱스 직전까지 엘리먼트 반환
+ 파라미터를 적지않으면 전체 반환(배열복사)


## splice
+ 개요
    + 배열에서 엘리먼트를 삭제하고 삭제한 엘리먼트 반환
    + 새로운 엘리먼트 삽입
    + 파라미터에 작성한 값에 따라 처리가 다름
    + 엘리먼트를 삭제하고 넣는것 가능
    + 삭제하는곳에 사용하자

<br/>

<br/>

#es5
## # 메서드를 시멘틱하게 사용하여야한다. 
※배열에서 아래것(시멘틱한 메서드)이 없을경우 반복문을 사용


메서드|개요|
-------|-------------------------------------------------|
isArray | 배열 여부 반환 배열이면 true, 아니면 false 반환
forEach |배열을 반복하면서 콜백하무 실행
every |반환값이 false 일때까지 콜백함수 실행
some| 반환값이 true 일때까지 콜백함수 실행
filter| 콜백함수에서 true를 반환한 엘리먼트 반환
map| 콜백함수에서 반환한 값을 새로운 배열로 반환
reduce| 배열의 엘리먼트 값을 누적하여 반환
reduceRight| 배열의 엘리먼트 값을 누적하여 반환; 배열의 끝에서 앞으로 누적
indexOf| 지정한 값에 일치하는 엘리먼트 인덱스 반환
lastIndexOf| 지정한 값에 일치하는 엘리먼트 인덱스 반환 배열 끝에서 앞으로 검색



## isArray

```javascript
/* typeof array를 검사하면 "object"가 반환되었는데 es5 isArray의 등장으로 구분이 손쉬워졌다.*/

console.log(typeof [1,2])

console.log(Array.isArray[1,2])

```


## forEach
+ 개요
    + [1,2].forEach(function(element,index,list){...})
    + 배열 엘리먼트를 하나씩 읽어가면서 콜백 함수 호출
    + 반복 횟수는 forEach()를 시작할 대 결정됨

+ callback 함수 파라미터
    + 엘리먼트 값,인덱스 배열 전체 

+ 실행중에 배열이 변경되었을때
    + 엘리먼트를추가하면 처리하지않음
    + 현재 인덱스보다 큰 인덱스의 값을 변경된 값을 사용
    + 현재 인덱스보다 작은 인덱스의 값을 변경하면 처리하지 않음
    + 현재 인덱스보다 큰 인덱스의 엘리먼트를 삭제하면 처리하지 않음

    + break문과 continue문을 사용할 수 없음
    + 콜백 함수에서 return; 문을 만나면 다음 엘리먼트를 처리
+ 3번째 파라미터
    + callback 함수에서 this로 참조할 오브젝트 지정 가능


```javascript
['a','b','c'].forEach(function(element,index,list){
    console.log(
        'element: '+element,'\n'+
        'index: '+index,'\n'+
        'list: '+list+'\n\n'
    )
})

/*
반복 처리방법
1. 배열의 첫번째 엘리먼트 ['a']를 읽는다

2. 콜백함수를 호출한다
    - 배열 엘리먼트,인덱스,배열 전체 순서로 넘겨준다

3. 콜백함수의 문장 리스트를 수행한다
*/

```


+ 함수호출에 부담을 갖지 않는다
```javascript
var book = function(){}
var arr = []

for(var i = 0; i<1000000; i++){
	arr[i]=i;
}

console.log(arr)


console.time()
var start = Date.now()

arr.forEach(function(a,b,c){
	book()
},this)


console.log("계산식",Date.now()-start)
console.timeEnd()

/*백만번 돌아도 0.0?? 초 밖에 안걸린다*/
```


#every

+ 배열 엘리먼트를 하나씩 읽어가면서 반환값이 false가 될때까지 콜백함수 호출
+ 콜백 함수에 엘리먼트 값, 인덱스,전체 배열을 넘겨줌
+ 콜백 함수에서 false를 반환하지 않으면 true로 반환
 따라서 콜백함수에 false가 반환되는 조건만 작성해도 된다
+ 배열에서 false 조건이 앞에 있을때 효율성이 높음
+ 배열 끝까지 반복했는데 콜백 함수에서 false를 반환하지 않으면 최종적으로 every에서 true 반환

```javascript
var value =[20,10,30];
var result = value.every(function(el,index,list){
    console.log('값: '+el)
    return a > 15;
})

console.log(result)

/*
10이 15보다 작으므로 false를 반환한다.
false를 반환하면 반복을 종료하므로
배열 마지막의 30은 실행되지 않는다.

콜백함수에서 한번이라도 false 반환하면 result에 false가 설정되고 한번이라도 false를 반환하지 않으면 result에 true가 설정된다.
이값으로 반복 중간에 콜백 함수가 종료된 것을 체크할 수 있다.
*/


/*for문과 if문으로 한다고 생각하고 비교해보자*/


```
## #중간에 반환이 멈출 배열이면 every,some   끝까지갈 배열이면 forEach
#some
+ 배열 엘리먼트를 하나씩 읽어가면서 반환값이 true가 될때까지 콜백 함수 호출
+ 콜백함수에 엘리먼트 값,인덱스,전체 배열을 넘겨줌
+ 콜백함수에서 true를 반환하지 않으면 디폴트로 false 반환

```javascript
var value = [20,10,30];
var result = vaule.some(function(el,index,all){
    console.log(el)
    return element < 15;
})

/*
10이 15보다 작으므로 true 반환
true를 반환하므로 반복을 종료하므로 30이 출력되지 않는다
*/

console.log(result)
/*
콜백함수에서 한번이라도 true를 반환하면
result에 true가 설정되고
콜백함수에서 한번이라도 true반환하지 않으면 result가 false가 설정된다.
콜백함수가 종료된 것을 체크할 수 있다.
*/
```


##  filter()
+ 개요
    + <code>var newArray = arr.filter(callback[, thisArg])</code>
    + 콜백 함수에서 true 를 반환했을 때의 엘리먼트 값을 배열로 묶어서 반환
    + 콜백 함수에서 false만 반환한 후 종료하면 빈 배열을 반환
    + 조건에 맞는 엘리먼트를 추려낼 때 사용
    + 반복과 파라미터 값을 넘겨주는 방법은 forEach()와 같음
```javascript
var reulst = [10,20,30,40].filter(function(el,index,list){
    return el <25
})
console.log(result)
```

## map
+ forEach와 같으나, 반환값이 없다
+ map은 맵핑이다
```javascript
var result =[10,20,30].map(function(el,index,list){
    return el*7
})

```

## reduce
+ 개요
    + 배열 끝까지 콜백함수를 호출하고 콜백함수에서 반환한 값을 반환
    + 두번째 파라미터를 작성하면 처리가 나름

```javascript
var value = [10,20,30,40];
var result = value.reduce(function(previous,current,index,all){
    console.log('pre: ' + previous + ', cur: '+ current)
    return previous + current
})
```
## reduceRight
+ 개요
    + reduce와 같으나 오른쪽부터

```javascript
var value = [10,20,30,40];
var result = value.reduceRight(function(previous,current,index,all){
    console.log('pre: ' + previous + ', cur: '+ current)
    return previous + current
})
```

## indexOf()
+ 개요
    + 파라미터값과 일치하는 엘리먼트의 인덱스 값을 반환
    + 왼쪽에서 오른쪽으로 검색
    + 일치하는 엘리먼트가 없으면 -1
    + 데이터타입까지 체크 
    + 두번째 파라미터를 작성하면 작성한 인덱스 부터 검색

```javascript
var value = [1,2,3,1,2,3]
console.log(valu*e.indexOf(3))
/*앞의 3이 검색*/
console.log(valu*e.indexOf('3'))
/*없으므로 -1*/
```

## lastIndexOF()
+indexOf와 같으나 오른쪽부터
