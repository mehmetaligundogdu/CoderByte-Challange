// **********************************FizzBuzz****************************************

//Have the function FizzBuzz(num) take the num parameter being passed and return all the numbers from 1 to num separatedby spaces, but replace every number that is divisible by 3 with tha word "Fizz", replace every number that is divisible by 5 with tha word "Buzz", and every number that is divisible by both 3 and 5 with the word "FizzBuzz".
//Ex. İf num is 16, then your program should return the string "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16". The input will be within the range 1-50

export function FizzBuzz(num){
    for( let i=1; i<=num;i++){
        if(i%15===0){
            console.log("FizzBuzz");
        }else if(i%5===0){
            console.log("Buzz");
        }else if(i%3===0){
            console.log("Fizz");
        }else{
            console.log(i);
        }
    }
}


//1-50 arasında verilecek olan numaralardan;
//for döngüsü ile 1den (num) a kadar tüm sayıları test edip döneriz.
//15 (3 ve 5'in ortak katı) ile bölünebilenlere "FizzBuzz" yazacak. İf döngüzünde de ilk önce 15 ile bölünebilmeyi kuralını yazacağız. Kodlar yukarıdan aşağıya derlendiği için, eğer 5 ile bölünebilme kuralını başa yazarsak 15 ile bölünenlerde önce 5 ile bölünme kuralı işleyeceğinden dolayı "Buzz" yazacak ve 15 ile bölünme kuralı hiç işlemeyecektir.
