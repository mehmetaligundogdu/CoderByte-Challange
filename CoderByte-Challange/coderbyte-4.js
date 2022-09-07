// *********************************First Reverse ****************************************
//Have the function firstReverse() take the str parameter being passed and return the string in reserved order.

export const firstReverse=function(string){
    const arr=string.split(""); //harf harf array yaparız
    const reversedArr=arr.reverse(); //Array halindeki ifadeyi ters çevirdik.
    const newString=reversedArr.join("");//Ters çevrilen Array halindeki ifadeyi tekrar string yapıyoruz
    return newString;

    /* Kısa Yolu
    return string.split("").reverse().join("");
    */
}

//Kısaca bizden Array içerisindeki string ifadeyi ters çevirmemiz isteniyor. *(.reverse())
//Öncelikle string ifadeyi Array haline getirmemiz gerekiyor.             ***(.split())***
//Array halinde ters çevirdiğimiz yapıyı tekrar stringe çevirmemiz gerekir. ***(join())***