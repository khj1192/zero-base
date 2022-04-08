BigInt(48593859283952985);
console.log(0n == 0);
console.log(0n === 0);

console.log(Number.MAX_SAFE_INTEGER);
// 
Math.floor(); // down
Math.ceil(); // up
Math.round(4.5); // 반올림.

parseInt('10');
Number('10');

// ES2015+
const backQuote = `1
2
3
`;

const doubleQuote = "1\
2\
3\
";

const paragraph = 'abcdefghijklmnopqrstuvwxyz';
const searchTerm = 'j';

console.log(paragraph.indexOf(searchTerm));

function genHello(name){

    // &&연산자로 쓰면 undefined 둘 다 false라서.
    const nameOr = name || "없음";
    return console.log("어서오세요 "+ nameOr +"님");
    // return console.log("어서오세요" + name ? name+"님 안녕" : '없음님 안녕하세요');
}
// undefined님 안녕..... 
// 우선순위의 문제때문이라는데 삼항연산자를 ()로 묶어주면 잘 작동한다.
// 매개변수 자체가 없는데 왜 안녕이 뜰까??

genHello();

// 띄워쓰기도 인식함..
console.log('HELLO WORLD'.split(' '));
console.log(['1', '2', '3'].join(''));

const helloWorld = 'HELLO WORLD';
// 배열로 풀고 다시 조인!
console.log([...helloWorld].join(''));

/**
 * 템플릿 리터럴
 * 
 * 1. 멀티라인 (개행)이 자유롭다
 * 2. Basic String Formatting ==> 보간법을 활용 => 표현식을 문자열 포함가능
 * 3. HTML Escaping: 안전하게 사용하도록 도움 (XSS, SQL Injection)
 * 
 */

const htmlTemplate = '<div>' + '안녕하세요' + '</div>';

// console.log(body.innerHTML = htmlTemplate);

function genHello2(name2){

    const nameOr2 = name2 || "없음";
    
    return console.log(
        `어서오세요 
        ${nameOr2}
        님`
    );

}
genHello2();
// 챕터02 05.문자열 마지막강의 참고.
// 뭔가 신기한걸 본거같다.


console.log(typeof []);
console.log(typeof {});
console.log(typeof null); // obj
// null이 obj인건 JS 초기설계 오류라고 보는게 타당하다.

// instanceof
// 객체 인스턴스가 어떤 생성자로 생성된 것인지
const obj1 = {};
console.log(obj1 instanceof Object); //true
// 결국 obj는 오브젝트라는 객체에서 만들어진것.

console.log(null instanceof Object); // false..?;; null => 원시값이다.

/**
 *  JS배열
 * 
 * 1. 객체이다.
 * 2. index : value(딕셔너리?)
 *  
 */

const arr = [1, 2, 3];

// 배열의 접근방법
console.log(arr[0]);
console.log(arr[1]);
// 배열의 추가
arr[3] = 4; // 할당 해주는 느낌
// push메서드로 들어갈 값을 넣는다.
arr.push(5); // 추가 하는 느낌.
arr[10] = 2; // 중간에 값이 비워진채로, 주소10에 2가 추가된다.

console.log(arr);
// 잘 출력되고, 추가된다.

    // for문 기본 구조
    // 초기화식; 평가될 식(참이면 문 실행); 반복 후 평가식
for(let i = 0; i < arr.length; i++){
    // let index = arr[i];
    // console.log("값 : "+index);
    console.log(arr[i]);
}




















