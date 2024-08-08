

let alphabets = ["a","b","c","d","e","F"];

 function work(){

let add = document.getElementById("confirm")
add.addEventListener("click", work)
let fun = myfunction()
let sy = sym()
let ressult = fun + "" + sy

    if(check.checked == true){
       document.getElementById("test").innerHTML= ressult
  }
  else{
    alert("not-selected")

  }
}




let check = document.getElementById("checkBox")
// check.addEventListener("click", myfunction)
function myfunction(){
  let cars = "abcdefghijklmno";
  let text = ""
  let random = Math.floor(Math.random()*cars.length)

    for (let i = 0; i < 1; i++) {
      text += "The number is " + cars.substring(random, random +1) + "<br>";
    } 
    return text
   
 
        }        

        
        let sym = document.getElementById("symbol")
        // sym.addEventListener("click", symb)
        function symb(){
          let extra = "/?&%@^£><-$";
          let txt = ""
          let rand = Math.floor(Math.random()*extra.length)

          
      for (let i = 0; i < 1; i++) {
        txt += extra.substring(rand, rand +1) ;
          } 
          return txt
        
    
           
          
        
        }        
 









    
        //  for (let i = 0; i <= passwordLength; i++) {
        //      let randomNumber = Math.floor(Math.random() * chars.length);
        //      password += chars.substring(randomNumber, randomNumber +1);
        //  }
               

   
  

    