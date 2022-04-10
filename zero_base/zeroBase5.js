const squidMember = ['지니', '상우', '새벽'];

squidMember.unshift('프론트');
squidMember.push('백');

for(let i = 0; i < squidMember.length; i++){
    console.log(squidMember[i]);
}

// -1은 존재하지 않는다.
console.log(squidMember.indexOf('현진'));

// 4에 존재.
console.log(squidMember.indexOf('백'));
// 존재여부 확인.
console.log(squidMember.includes('프론트'));
// 배열요소 지우기
console.log(squidMember.shift()); // unshift반대
console.log(squidMember.pop()); // push반대
// 첫번째 인자는 몇번째값을 지울지 선택
// 두번째 인자는 천번째 인자값에서 몇개를 지울지.
squidMember.splice(1, 2);// 특정 요소 지우기
console.log(squidMember);

const arrowFunc = () => {}

function testFunc(num1, num2){ // 함수를 만드는쪽에서는 파라미터라함.
    // let sum = num1 + num2;
    return num1+num2;
}
testFunc(); // 인자를 받아서 넘기는쪽 아규먼트라함.
console.log(testFunc());
// 용어 정리를 해야할거같다!!

// 기명 함수 표현식
// const func1 = function func1(){
//     return 'func';
// }

// 익명 함수 표현식(함수를 변수에 할당)
const func1 = function(){
    return 'func1';
}
console.log(func1);

// HTML 시맨틱 구조 지키려 노력하자
// 이벤트리스너, 콜백?

const person = {
    _firstName: 'Kim',
    lastName: 'hyeun-Jin',

    get firstName(){
        return this._firstName.toUpperCase();
    },
    set firstName(newFirstName){
        if(typeof newFirstName !== 'string'){
            this._firstName = '알수없는 이름';

            return;
        }
        this._firstName = newFirstName;
    },
    
    get fullName(){
        return(
             
        this._firstName +
        ' ' +
        this.lastName +
        ' ' +
        '입니다.'
        );
    }
};

    console.log(person._firstName);
    console.log(person.fullName);

// 인스턴스 공부.
// this의 개념

    const me = {
        name: 'hyeun',
        age: 20,
        location: 'korea',
    };

    function Person(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }

    const you = new Person('gu', 26, 'korea');

    console.log(you);