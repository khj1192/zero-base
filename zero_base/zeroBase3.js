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
