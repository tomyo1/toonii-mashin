// variable = huvisagch = ymar negen data hadaglah sav
var name = "Bat" ; 
// number, string, boolen(true, false), underfined, null(blank)
console.log("Hi"+ name );
// alert();
// +prompt("") -->garaas utga avah 
// +,-,*,%,/ --> operator
//if commit blgsn bol bugdiig n tegehgui bol aldaa garna.

//lab3:

// if, else ==> nuhtsul shalgah buyu hervee (else- tiim bish bol)
//var age =+prompt("nasaa oruulnuu");
//if deer ashiglana : <,> <=, >=, == 
// &&(zaaglah, and) , ||(or buyu esvel );
// if (age > 18 && age < 30){
//     console.log("ider nastai") ;
//     //alert("nasand hursen bn");
// }else if(age<=3 && age>10){
//     console.log("nylh huuhed bn");
// }else if (age < 18 && age > 10){
//     console.log("zaluu huuhed");
// }else{
//     console.log("nasand hursen bn");
//     //alert("nasand hureegui bn")
// }

//1 
//var number=+ prompt("too oruulna uu");
// if (number % 2 == 0 ){
//     console.log("tegsh too");
// }else  {
//     console.log("sondgoi");
// }

//2 
//var number=+ prompt("Too oruulna uu");
// if (number > 0 ){
//     console.log("eyreg");
// }else {
//     console.log("surug")
// }

//3 
//var dun =+ prompt("Dungee oruulna uu");
// 76 (dun) >=70
// if (dun == 100 || dun >= 90){
//     console.log("VIII");
// }else if (dun == 89 || dun >= 80 ){
//     console.log("VII");
// }else if (dun == 79 || dun >= 70){
//     console.log("VI");
// }else if (dun == 69 || dun >= 60){
//     console.log("V");
// }else if (dun == 59 || dun >= 50){
//     console.log("IV");
// }else if (dun == 49 || dun >= 30){
//     console.log("IIV");
// }else if (dun == 29 || dun >= 20){
//     console.log("II");
// }else{
//     console.log("I");
// }

// switch --> nuhtsul shalgah ( case)
var today = 4 ;
switch(today){
    case 5 :
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 1 :
        console.log("Monday");    
       break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 7 :
        console.log("Sunday");    
       break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Not Found");
        break;
}

var lang = "English";
switch (lang){
    case "Mongolia" :
        console.log("Sain baina uu?");
        break;
    case "English":
        console.log("Hello");
        break;
    case "Spainish" :
        console.log("Hola");
        break;
    default:
        console.log("Not Found");
        break;   
}

// 1. too3 garaas too avna 
// 2. garaas operater avna
// 3. too4 = garaas too avna
// 4. alert dr bodoj garga

var too3 =+prompt("TOO 1 oruulna uu?");
var temdeg =prompt("Temdeg oruulna uu? ? /+, -, /, */ ");
var too4 =+prompt("TOO 2 oruulna uu?");
switch(temdeg){
    case "*" :
        alert( too3 * too4 );
        break;
    case "/" :
        alert(Math.floor( too3 / too4));
        break;
    case "+" :
        alert( too3 + too4 );
        break;
    case "-" :
        alert( too3 - too4 );
        break;
    default:
        console.log("blmjgui");
        break;     
}