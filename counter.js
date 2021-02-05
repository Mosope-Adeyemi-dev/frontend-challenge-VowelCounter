
//Method 1, only allows for the counting of 
//  var vowels = ["a", "e", "i", "o", "u"];
// var count = 0;
// var button = document.getElementById("count");

// button.addEventListener("click",countVowels);
// function countVowels(){
// var input = document.getElementById("userText").value;
// var text = input.toLowerCase();
// if(text != null && text != ""){

//     for(t of text){
//         for(v of vowels){
//             if(t==v){
//                 count++;
//                 }
//             }
//         } 
//     alert("Number of Vowels = "+count);
//     document.getElementById("userText").value = "";
//     count = 0;
//     text = "";
//     }else{
//         alert("Hey there, you have not entered a word to count");
//     }      
// }



//method 2, using .match() to return array of vowels found in text

var button = document.getElementById("count");
//add click listener to button 
button.addEventListener('click',countVowels);

//call back function
function countVowels(){
const vowels = /[aeiou]/ig;    //regex
var input = document.getElementById("userText").value;
var text = input.toLowerCase(); //covert all user input to lower case;

if(text != null && text != ""){   //do not operation if input is empty
var result = text.match(vowels);  //searches and returns an array of matched vowels
if(result == null){
    alert(`your input "${input}" has: no Vowels in it`);
    document.getElementById("userText").value = ""; 
    totalCount = 0;
}
var totalCount = result.length;   //count number of vowel found from text


//count number of times a single vowel appears 
/*
remainder:- Update with a loop.
*/
var countForA = result.filter((x) => x === "a").length;
var countForE = result.filter((x) => x === "e").length;
var countForI = result.filter((x) => x === "i").length;
var countForO = result.filter((x) => x === "o").length;
var countForU = result.filter((x) => x === "u").length;


alert("your input \""+input+"\" has:  "+"\nTotal No. of Vowels= "+totalCount+" \n A= "+countForA+"    E= "+countForE+"    I= "+countForI+"    O= "+countForO+"    U= "+countForU)
document.getElementById("userText").value = ""; 
} 
    else{
        alert("Hey there, you have not entered a word to count");
    }
}