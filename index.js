// to make calculator functional
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        // sreenValue is a variable and screen.value os the value of screen
        if(buttonText == 'X'){
            buttonText='*';
            screenValue += buttonText;
            screen.value = screenValue;
            
        }
        else if (buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            // eval=evaluate (calculate)
            screen.value = eval(screenValue);
       
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
               }
           })
}
