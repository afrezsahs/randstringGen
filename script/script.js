const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz"; 
var numb = "0123456789";
 const symb = "!\"#$\&\'()*+,-./<=>?@[\\]^_`{|}~";
function getRandomInt(max) { // return rand(max)
  return Math.floor(Math.random() * max);
}

function generatestring( many,str ) { // generate string
result = "";
   for (i=0;i<many;i++){ 
x=getRandomInt(str.length);
result += str[x] ;
}

 return result;  }

 function sumstring(choiceX){
    result = ""
    for (i = 0; i<choiceX.length;i++){
switch (true) {
    case (choiceX[i]=='upper'): result += upper; break;
    case (choiceX[i]=='lower'): result += lower; break;
    case (choiceX[i]=='numb'): result += numb; break;
    case (choiceX[i]=='symb'): result += symb; break;}
 } return result;
 }
console.log(generatestring (10,symb+numb));


const form = document.querySelector('form')
form.addEventListener ('submit',(e)=>{
    e.preventDefault();
let choice = [];
    document.querySelectorAll('[type="checkbox"]').forEach(item =>{
        if (item.checked===true){
            choice.push(item.value)
        }
    })
    var test2 = form.querySelector('[id="many"]')
    selectedVal = test2.value;
    console.log(choice);
    console.log(test2);
    console.log(generatestring (10,sumstring(choice)));
   
    resultbox = form.querySelector('[id="result"]')
    resultbox.value = generatestring (selectedVal,sumstring(choice));
})

//document.getElementById("demo").innerHTML = generatestring (10,test);