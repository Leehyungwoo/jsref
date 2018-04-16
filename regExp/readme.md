문자|일치|예제
---|----------|--------
^|입력 값의 시작| /^this/ 는 "This is..."와 일치
$|입력값으 끝 | /end$/ 는 "This is the end"와 일치
*|0번 이상 반복 | /se*/ 는 "seeee" 및 "se"와 일치
?|0번 또는 1번 반복| /ap?/ 는 "apple" 및 "and 와 일치"
+|1번 이상 반복 | /ap+/ 는 "apple"과 일치, "and"와 불일치
{n}|정확히 n번 반복 | /ap{2}/ 는  "apple"과 일치, "apie"와 불일치
{n,}|n번 이상 반복| /ap{2,}/ 는 "apple" 및 "appple"의 모든 p와 일치,"apie"와 불일치
{n,m}|최소 n번 최대 m번 반복| /{ap2,4}/ 는 "apppppple"의 p4개와 일치
.|줄바꿈(new line)을 제외한 모든 문자| /a.e/ 는 "ape" 및 "axe"와 일치
[...]|대괄호 안의 모든 문자|/a[px]e/ 는 "ape"및 axe"와 일치, "ale"와 불일치
[^...]|대괄호 안의 문자를 제외한 모든 문자|/a[^px]/ 는 "ale"와 일치, "axe" 또는 "ape"와 불일치
\b|단어 경계| /\bno/는 "nono"에서 첫 번째 "no"와 일치
\B|\b를 제외한 모든 문자| /\Bno/는 "nono"에서 두 번째 "no"와 일치
\d|0~9까지의 숫자| /\d{3}/은 "Now in 123"에서 123과 일치
\D|숫자가 아닌 모든 문자| /\D{2,4}/는 "Now in 123"에서 Now와 일치
\w|단어 문자(알파벳,숫자,밑줄)|/\w/는 "javascript"에서 "j"와 일치
\W|모든 특수문자 (알파벳,숫자,밑줄 제외)| /\W/는 "100%"에서 "%"와 일치
\n|줄바꿈
\s|하나의 공백 문자
\S|공백이 아닌 하나의 문자
\t | 탭
(x)|캡쳐 괄호 | 일치된 문자를 기억


```javascript
var a = "apple"
 var b = "and"
 var c = /ap+/
 
 console.log(c.exec(b))
 console.log(c.exec(a))
```