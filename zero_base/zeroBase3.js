const h2Element = document.querySelector('h2');
const h2Element2 = document.querySelector('.h22');

// console.log("여기 베이스3번 : "+h2Element);


function replaceH2Text(){

    h2Element.innerText = '바뀌나요?';
}

h2Element.addEventListener('click', replaceH2Text);

    // replaceH2Text();
console.log("여기 베이스3번 : "+h2Element);

function replaceH2Text2(){
    h2Element2.innerText = '얘는 왜 안바뀜?';
}

h2Element2.addEventListener('click', replaceH2Text2);


let i = 0;
const max = 10;

while(i < max){
    
    i++;
    if(i % 2 === 0){
        continue;
    }
    
    console.log(i);
}

// i++가 console.log(i); 위로가면 무한루프.. 충격
// 0/2=0 -> continue; 무한루프

/**
 * JS type
 * - 원시(Primitive)
 * - 객체, 참조(Reference);
 */
console.log(typeof true); // boolean

let test = 'string';
console.log(test.toUpperCase()); // STRING
console.log(test);  // string
// 원시값은 재할당을 해야 바뀜.
test = test.toUpperCase();
console.log(test); // STRING

// 참조타입은 메모리에 value를 할당
const obj = {
    name: 'hyeun',
    age: 20,
    arr:[],
    func: function(){},
    child:{}
}
obj.name.toUpperCase();
console.log(obj.name); // 왜 소문자야?
// string 원시타입이고 obj가 참조타입이라
// 값을 자유롭게 추가삭제가 가능한거같다.
console.log(obj);
obj.gender = 'male';
obj.bool = true;
console.log(obj);

let variable; // undefined 정의X
const initValue = null; // null = 비워진 값

const result0 = Number(1) + '입니다';
const result1 = String(1) + '입니다';
const result2 = Number('11') + 11;
const result3 = Number(['111']) + 111;
const result4 = String(['111']) + 111;

console.log("result0 : "+typeof result0, result0); // string
console.log("result1 : "+typeof result1, result1); // string
console.log("result3 : "+typeof result3, result3); // num
console.log("result4 : "+typeof result4, result4); // string

// 비교시 엄격비교연산자로 작성하자.
// 타입도 최대한 명시적으로 사용하는것이 좋다.

const time = 10;
let message3;

if(time < 12){
    message3 = '오전이다!!';
} else if(time > 12){
    message3 = '오후!!';
} else{
    message3 = '여긴 올수없어!';
}

console.log(message3);






