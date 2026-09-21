let text = "OrAnGe";

let result = text.split('') 
    .map(char => {         
        if (char === char.toUpperCase()) {
            return char.toLowerCase(); // 
        } else {
            return char.toUpperCase(); 
        }
    })
    .join('');            

console.log(result); 


