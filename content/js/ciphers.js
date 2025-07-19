const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
     "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const newDocumentMessage = document.getElementById("newMessage");
const input = document.querySelector("textarea");
const shiftUpdate = document.querySelectorAll("button");

shiftUpdate.forEach(item =>{
    item.addEventListener("click", () =>{
        let message = document.getElementById("message");
        let shift = document.getElementById("counter-input");

        if(Number(shift.value) + 1 > 26 && item.id == "addButton"){}
        else if(Number(shift.value) - 1 < -26 && item.id == "decreaseButton"){}
        else{
            if(item.id == "addButton"){
            shift.value = Number(shift.value) + 1; 
            }
            if(item.id == "decreaseButton"){
                shift.value = Number(shift.value - 1); 
            }
                
            newDocumentMessage.value = caesarCipher(message.value, Number(shift.value));
            shiftNumber = shift.value;
        }
})
})
input.addEventListener("mousedown", () =>{
    let message = document.getElementById("message");
    let shift = document.getElementById("counter-input");
    console.log(shift);
        
    newDocumentMessage.value = caesarCipher(message.value, Number(shift.value));
    shiftNumber = shift.value;
})
input.addEventListener("input", () =>{
    let message = document.getElementById("message");
    let shift = document.getElementById("counter-input");
    console.log(shift.value);
    
    
    newDocumentMessage.value = caesarCipher(message.value, Number(shift.value));
})


function caesarCipher(message = '', shift){
    message = message.toLowerCase();
    let newMessage = message.split("");
    
    while(shift < 0){
        shift += 26;
    }
    while(shift > 26){
        shift -= 26;
    }

    // Main loop going through the two strings
    for(x = 0; x < message.length; x++){
        for(y = 0; y < 26; y++){
            if(message[x] == alphabet[y]){
                if(y+shift > 25){
                    newMessage[x] = alphabet[(y+shift) - 26];
                }
                else{
                    newMessage[x] = alphabet[y+shift];
                }
            }
        }
    }

    newMessage = newMessage.join("");
    
    return(newMessage);
}

