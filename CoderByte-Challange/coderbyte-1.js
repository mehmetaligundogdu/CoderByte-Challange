/* Q.1
1.The username is between 4 and 25 characters.
2.It must start with a letter.
3.It can only contain letters, numbers, and the underscore(_) characters.
4.It cannot end with an underscore character. 
If the username is valid then your program should return the string true
*/

export const userValidation=function(string){
    if(
        string.length>=4 && string.length<=25 //first condition
        && (/[a-zA-Z]/).test(string.charAt(0)) //second condition , (/[a-zA-Z]/) stringin ilk indexinin sadece büyük-küçük harf içereceğini test eder.
        && (/^\w+$/).test(string)// (/^\w+$/) regular expressionu, stringin saddece harf-numara ve alt çizgi"_"den oluşur anlamına gelir.
        && (/[a-zA-Z0-9]/).test(string.slice(-1)) //yukarda charAt(0) ile stringin 1.indexini aldık fakat string length'ini bilmiyorsak, son indexi için slice(-1) kullanırız. Ya da "string.charAt(string.length-1)"
    ){
        return true;
    }
    else{
        return false;
    }

}




//Regular Expression
// .charAt(0) .slice(0,1) ilk indexe bakarız
// (...).test() önündeki ifadeyi ,içindeki parametreye göre test eder

