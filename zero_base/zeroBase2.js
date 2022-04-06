const arr = ['data', 'num', 'boolean', 'name'];

console.log("arr[1] : "+
    arr[1] // 0~3
);
arr[0] = 'abc';
console.log("arr[0] = 'abc' : "+arr[0]);

arr.push('마지막');
arr.unshift('첫번째'); // push, unshift 메소드라함.

        //초기화; 평가 될 식(참=실행, 거짓=다음으로); 
    for(let index = 0; index < arr.length; index++){
        console.log("for문 : "+arr[index]);
    }

    if(10 > 1){
       console.log('10은 1보다 크다');  
    }
    
    // 함수 선언문.
    function func(a){
        if(10 > a){
            return 'Hello';
        }
    }
    console.log(func(5));

    function sum(a, b) {
        return a+b;
    }
    console.log(sum(3,4));

    const hyeunJin = {
        // 오브젝트(객체)는 key(property),속성 : value로 구성.
        name: 'hyeun-jin',
        age: 20,
        gender: 'male',
        guest: function(g){
            return 'hello '+ g +' my name is HJ'
        }
    }
    console.log(hyeunJin.guest('jin'));
    console.log(hyeunJin.name);
    
    /**
     * Scope
     * 변수 유효 범위.
     * 
     * var -> 처음부터 존재.
     * -내부에서 외부로 접근 가능
     * -외부에서 내부로 접근 불가
     * 
     * let, const -> ES2015+부터 존해
     */
     
    var varVal = '함수-단위'
    const constVal = '블럭-단위'

    var globalV = '전연변수'
    
    function outfunc(){
        
        console.log("내부에서 외부 호출 : "+globalV);
        // console.log("infunc밖에서 infunc 변수 호출 : "+ inV); // 에러

        function infunc(){
            var inV = '내부변수';
            console.log("내부에서 외부 호출(infunc) : "+globalV);
        }
        
        infunc();
        // return inV; // out에서 호출 x
        return ;
    }
    outfunc();



