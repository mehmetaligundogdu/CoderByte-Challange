// ****************************First Factorial******************************************
//Using the Js language, have the function firstFactorial(num) take num parameter being pased and return the factorial of it (ie.)
//if num=4, return(4*3*2*1). For the test cases,the range will be between 1 and 18.

export const firstFactorial=function(num){
    let factorial=1;
    for(let i=2;i<=num;i++){ //i=1 den başlamamız gereksiz olur.
        factorial=factorial*i;
    }
    return (num+"!"+"="+factorial);
}