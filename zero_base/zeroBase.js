// 주석은 사람을 위한 코드.
/*MDN사이트와 친해지자 */
let count = 0;

count = count + 1;

// const를 활용하라
const a = 1;

// 문자열 값 (원시 값)
var str = 'word';
str.toUpperCase();
console.log(str);
// 대문자로 바뀌지 않음.

const obj = {
    name: 'jin',
}

const arr = ['jin'];

function func(){
    return 'jin';
}

console.log(typeof(obj)); // object
console.log(typeof(arr)); // object
console.log(typeof(func)); // function

// !== 서로 다른지 엄격하게 검사. 
// ===엄격한 비교 데이터타입 구분과 분류 중요.
// 원시값과 레퍼런스값이 있다..

const word2 = '문자';
console.log(word2[0]); // 문


const temp = 1 ==='1' ? '참일때' : '거짓일때';
console.log("temp : "+temp);
// 위 코드를 조건문으로 풀이하면

const temp2 = 1;
if(1 === '1'){
    console.log(temp2+" :if temp2 : 참일때");
} else{
    console.log(temp2+" :else temp2 : 거짓일때");
}

const age = prompt("나이") > 19 ? '성인' : '미성';

    alert(age);


