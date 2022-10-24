export function NumberSearch(str){
    var numberArr=/[0-9]/;
    var letterArr=/[a-zA-z]/;
    var number=0;
    var letter=0;

    for(let i=0;i<str.length;i++){
        if(str[i].match(numberArr)){
            number +=Number(str[i]);
        }
        if(str[i].match(letterArr)){
            letter++;
        }
    }
    return Math.round(number / letter);
}