const array = ['JS', 'HTML', 'CSS'];

const newArr = array.concat('TS', 'Java');

console.log(array);
// array값은 추가되지 않음.
console.log(newArr); // 훼손x

const newArr2 = [
    ...array, 'TT', 'JJ'
];
// 오오..
console.log(newArr2);

/**
 * 전역 스코프 (Global)
 * 
 * 지역 스코프
 *      함수 스코프
 *      블록 스코프
 */

// 어디서나 이 전역변수로 접근 가능.
var foo = ''; // 전역스코프 

{
    foo = '문푸';
    console.log(foo);
}

    function func(){
        foo = '함수푸';
        return foo;
    }
    // console.log(func());
    console.log(foo);

    if (true){
        foo = '이프푸';
        console.log(foo);
    }
    
    console.log(foo);
    // 런타임시점 자기가 만들고도 이해하기 어려워질 수 있다.
    // 어렵지만 지역스코프 단위로 코드 작성훈련이 필요하다.

    // 전역객체 window객체가 있다.
    // 어디서나 사용이 가능하다.
    /**
     * 전역객체
     * 1. 브라우저 -> window
     * 2. NodeJS -> global
     * 가지고 있는 객체의 환경이 다르다.
     */

/**
 * - JSON Parse (서버에서 데이터를 가져올때)
 *  ㄴ JSON -> "JS Object"
 * 
 * - JSON stringify (서버로 데이터를 보낼때)
 *  ㄴ "JS Object" -> JSON
 * 
 *  JavaScript (프론트엔드)
 *  ㅣ
 *  JSON
 *  ㅣ
 *  Java, Python, Ruby, Go (배엔드)
 * JSON은 중간 통로의 역할 서로가 소통이 가능해진다.
 */
