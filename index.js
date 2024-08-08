

// let alphabets = ["a","b","c","d","e","F"];

//  function write(){

// let add = document.getElementById("confirm")
// add.addEventListener("click", work)
// let fun = myfunction()
// let sy = sym()


//     if(check.checked == true){
//          let text = ""
//         for (let i = 0; i < 1; i++) {
//             text += "The number is " + cars.substring(random, random +1) + "<br>";
//           } 
          
         
//   }
//   else{
//     alert("not-selected")

//   }
// }




// let check = document.getElementById("checkBox")
// // check.addEventListener("click", myfunction)
// function myfunction(){
//   let cars = "abcdefghijklmno";
 
//   let random = Math.floor(Math.random()*cars.length) 
// return cars;    }        

        
//         let sym = document.getElementById("symbol")
//         // sym.addEventListener("click", symb)
//         function symb(){
//           let extra = "/?&%@^£><-$";
//           let txt = ""
//           let rand = Math.floor(Math.random()*extra.length)

          
//       for (let i = 0; i < 1; i++) {
//         txt += extra.substring(rand, rand +1) ;
//           } 
//           return txt
        
    
           
          
        
//         }        
 









    
        //  for (let i = 0; i <= passwordLength; i++) {
        //      let randomNumber = Math.floor(Math.random() * chars.length);
        //      password += chars.substring(randomNumber, randomNumber +1);
        //  }
               

   
  


// let but = document.getElementById("right")
// but.addEventListener("click", myfunction)


function myfunction(){
    let numb = document.getElementById("val").valueAsNumber
    let txt = ""
    let al = alphabets()
    let sy = symb()
    let pu = uppercase()
    let nm = nmb()
    let bx = document.getElementById("Box").checked
    let sx = document.getElementById("symb").checked
    let up = document.getElementById("caps").checked
    let sb = document.getElementById("num").checked
    let fa = !bx
    let ga = !sx
    let ha = !up
    let ja = !sb
    // for (let i = 0; i < 1; i++) {
    //             txt += al + " " + sy ;
    //               } 
    //     // alert ("hello world")
if ( sx && bx && up && sb == true){
   let combine = "abcdefghijklmnopqrstuvwxyz?/<>£$+!@%&1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   let numb = document.getElementById("val").valueAsNumber
    for(let j = 0 ; j<numb ; j++){
        let ran = Math.floor(Math.random()*combine.length)
        txt+= combine.substring(ran, ran +1);
    }
    document.getElementById("tes").innerHTML = txt
//      for( let i=0; i<numb; i++){
            // txt += al; 
            // document.getElementById("tes").innerHTML = sy + "" + txt; }
}

else if (bx && up && ja && ga == true ){

    let combin = "?/<>£$+!@%&ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numb = document.getElementById("val").valueAsNumber
     for(let j = 0 ; j<numb ; j++){
         let ran = Math.floor(Math.random()*combin.length)
         txt+= combin.substring(ran, ran +1);
     }
     document.getElementById("tes").innerHTML = txt
}


else if (bx && sb && ha && ga == true ){

    let combin = "?/<>£$+!@%&1234567890"
    let numb = document.getElementById("val").valueAsNumber
     for(let j = 0 ; j<numb ; j++){
         let ran = Math.floor(Math.random()*combin.length)
         txt+= combin.substring(ran, ran +1);
     }
     document.getElementById("tes").innerHTML = txt
}

else if (bx && sx && ja && ha == true ){

    let combi = "?/<>£$+!@%&abcdefghijklmnopqrstuvwxyz"
    let numb = document.getElementById("val").valueAsNumber
     for(let j = 0 ; j<numb ; j++){
         let ran = Math.floor(Math.random()*combi.length)
         txt+= combi.substring(ran, ran +1);
     }
     document.getElementById("tes").innerHTML = txt
}

else if (sx && up && ja && fa == true ){

    let comb = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numb = document.getElementById("val").valueAsNumber
     for(let j = 0 ; j<numb ; j++){
         let ran = Math.floor(Math.random()*comb.length)
         txt+= comb.substring(ran, ran +1);
     }
     document.getElementById("tes").innerHTML = txt
}
else if (sb && up && fa && ga == true ){

    let combin = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numb = document.getElementById("val").valueAsNumber
     for(let j = 0 ; j<numb ; j++){
         let ran = Math.floor(Math.random()*combin.length)
         txt+= combin.substring(ran, ran +1);
     }
     document.getElementById("tes").innerHTML = txt
}
else if (sx && sb && ha && fa == true ){

    let combin = "abcdefghijklmnopqrstuvwxyz1234567890"
    let numb = document.getElementById("val").valueAsNumber
     for(let j = 0 ; j<numb ; j++){
         let ran = Math.floor(Math.random()*combin.length)
         txt+= combin.substring(ran, ran +1);
     }
     document.getElementById("tes").innerHTML = txt
}

else if (bx && up && sb && ga == true ){

    let combin = "?/<>£$+!@%&ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let numb = document.getElementById("val").valueAsNumber
     for(let j = 0 ; j<numb ; j++){
         let ran = Math.floor(Math.random()*combin.length)
         txt+= combin.substring(ran, ran +1);
     }
     document.getElementById("tes").innerHTML = txt
}
else if (bx && up && sx && ja == true ){

    let combin = "?/<>£$+!@%&ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let numb = document.getElementById("val").valueAsNumber
     for(let j = 0 ; j<numb ; j++){
         let ran = Math.floor(Math.random()*combin.length)
         txt+= combin.substring(ran, ran +1);
     }
     document.getElementById("tes").innerHTML = txt
}
else if (fa && up && sx && sb == true ){

    let combin = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let numb = document.getElementById("val").valueAsNumber
     for(let j = 0 ; j<numb ; j++){
         let ran = Math.floor(Math.random()*combin.length)
         txt+= combin.substring(ran, ran +1);
     }
     document.getElementById("tes").innerHTML = txt
}

else if (bx && sx && sb && ha == true ){

    let combin = "?/<>£$+!@%&abcdefghijklmnopqrstuvwxyz1234567890"
    let numb = document.getElementById("val").valueAsNumber
     for(let j = 0 ; j<numb ; j++){
         let ran = Math.floor(Math.random()*combin.length)
         txt+= combin.substring(ran, ran +1);
     }
     document.getElementById("tes").innerHTML = txt
}

else if (bx == true ){
    document.getElementById("tes").innerHTML= sy;
}
else if (sx  == true ){
    document.getElementById("tes").innerHTML= al;
}
else if (up  == true ){
    document.getElementById("tes").innerHTML= pu;
}
else if (sb == true ){
    document.getElementById("tes").innerHTML= nm;
}
// else if(bx .checked == true){
//     document.getElementById("tes").innerHTML = sy
//         // document.getElementById("tes").innerHTML= sy
//     //     let xt = ""
//     //     for( let k=0; k<numb; k++){
//     //        xt += sy;
//     //         document.getElementById("tes").innerHTML = xt
//     // } 
// }


// else if{

// }
}

function alphabets(){
    let alpa = "abcdefghijklmnopqrstuvwxyz"
    let numb = document.getElementById("val").valueAsNumber
    let tx = ""
    for(let j = 0 ; j<numb ; j++){
        let ran = Math.floor(Math.random()*alpa.length)
        tx+= alpa.substring(ran, ran +1);
    }

    return tx;
}
function symb(){
    let symbols = "?/<>£$+!@%&"
    let numb = document.getElementById("val").valueAsNumber
    let txt = ""
    for (let i = 0 ; i<numb ; i++){
        let rand = Math.floor(Math.random()*symbols.length)
        txt+= symbols.substring(rand, rand +1);
    }
  return txt
}
function uppercase(){
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numb = document.getElementById("val").valueAsNumber
    let text = ""
    for(let l = 0 ; l<numb ; l++){
        let ra = Math.floor(Math.random()*upper.length)
        text+= upper.substring(ra, ra +1);
    }

    return text;
}

function nmb(){
    let nb = "1234567890"
    let numb = document.getElementById("val").valueAsNumber
    let tt = ""
    for(let n = 0 ; n<numb ; n++){
        let ra = Math.floor(Math.random()*nb.length)
        tt+= nb.substring(ra, ra +1);
    }

    return tt;
}


// function getvalu(){
//     let numb = document.getElementById("val").value
//   alert(numb)
// }


// COPY BUTTON
function copyPassword() {
    let copyText = document.getElementById("tes").innerHTML;
   navigator.clipboard.writeText(copyText).then(function(){
    alert("copied passsword");
   });  }

    