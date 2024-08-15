let text =document.getElementById('displaybutton');
let btn=document.querySelectorAll('button');



let string="";
let functions=Array.from(btn);
console.log(functions);
functions.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        console.log(e.target)
        if(e.target.innerHTML == "="){
            string=eval(string);
            text.value=string;
        }
        else if(e.target.innerHTML == "←"){
            string=string.toString().slice(0, -1);
            text.value=string;
          }

        else if(e.target.innerHTML =='AC'){
            string="";
            text.value=string;
        }
        
        else {
            string += e.target.innerHTML;
            text.value=string;
            console.log(e.target.innerHTML)
        }
    })
});
//!second method for AC button
// function allclear() {
//     string="";
//     document.querySelector('.operator').value = string;

//   }



function calculate() {
    try {
      text.value = eval(text.value);
    } catch (error) {
      text.value = 'Error';
      alert('Invalid Input')
    }
  }
