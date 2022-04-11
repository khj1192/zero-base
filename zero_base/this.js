/**
 * this
 * 
 * 1. 전역 공간
 * 2. 함수
 * 3. 메서드
 * 
 * 암시적인 this 바인딩..
 * call, apply, bind
 */

    const person = {
        name: '현진',
        sayName: function(){
            return this.name +'입니다';
        }
    };

    const zero = {
        name: '베이스',
        sayName: function(){
            return this.name + '입니다';
        }
    };

    function sayFullName(firstName){
        return firstName + this.sayName();
    }
    // console.dir()

    const result = sayFullName.bind(person);
    console.log(result('김'));
    const result2 = sayFullName.bind(zero);
    console.log(result2('제로'));

    // 심화과정부터 너무 어려워진 느낌이다.
    // 프로토타입. JS는 프로토타입 기반 언어.
    const str = '문자열';
    const num = 123;
    const bool = false;
    console.log(str.prototype); // undefined
    console.dir(num.__proto__);