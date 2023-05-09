let colorArr = [
    'red', 'blue', 'green', 'black', 'silver', 'pink', 'yellow'
]

let button = document.getElementById('btn');
// function changeColor(){
//     const el = document.getElementsByClassName('box')[0];
//     el.style.background = '#' + 154698 * Math.floor(9*Math.random());
//     console.log('#' + 154698 * Math.floor(9*Math.random()))
// }

// button.onclick = changeColor;

const el = document.getElementsByClassName('box')[0];

el.innerHTML = '<div class="innerBox">1</div>' + '<div class="innerBox">2</div>' + '<div class="innerBox">3</div>' + '<div class="innerBox">4</div>';
el.style.display = 'flex';
el.style.flexWrap = 'wrap';

let innerBox = document.getElementsByClassName('innerBox');
let i = 0;
let change = '';

for(i; i < innerBox.length; i++){
    innerBox[i].style.width = '150px';
    innerBox[i].style.height = '150px';
    innerBox[i].style.display = 'flex';
    innerBox[i].style.justifyContent = 'center';
    innerBox[i].style.alignItems = 'center';
}

// console.log(innerBox);


function changeColor(){
    for(let i = 0; i< innerBox.length; i++){
        innerBox[i].style.color = 'black';
        let a = Math.floor(10 * Math.random());
        if( a < colorArr.length){
            if(colorArr[a] == 'black'){
                innerBox[i].style.color = 'white';
            }
            innerBox[i].style.background = colorArr[a]
            innerBox[i].textContent = colorArr[a];
            
        } else {
            if(colorArr[a] == 'black'){
                innerBox[i].style.color = 'white';
            }
            a = Math.abs(a-colorArr.length);
            innerBox[i].style.background = colorArr[a]
            innerBox[i].textContent = colorArr[a];
        }  
    }
}
button.onclick = changeColor;