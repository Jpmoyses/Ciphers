const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
     "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function caesarCipher(message, shift){
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
    console.log(newMessage);
}


caesarCipher("QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD", 3);
