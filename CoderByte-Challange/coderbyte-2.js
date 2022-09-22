//****************************************Longest Word************************************
/*
-Using the JavaScript language, have the function longestWord(sen) take the sen parameter being passed and return the largest word in the string.
-If there are two or more words that are the same length, return the first word from the string with that length.
-Ignore punctuation and assume sen will not be empty
*/

export const longestWord=function (sen){
    const arr=sen.replace(/[^a-zA-Z ]/g, "").split(" "); //Regular expression kullanarak noktalama işaretlerini kelimelerden kaldırdık ve split yardımı ile boşluklardan kelimeleri bölerek Array oluşturduk.
    arr.sort(function(a,b){ //sort metodunu fonksiyon olarak kullandık
        return b.length-a.length; //uzunluk olarak büyük olanı ,arrayın başına geçirir.
    })
    console.log(arr);
    return arr[0]; //Bize en uzun kelime lazım. Kelimeler uzunlukları arasında büyükten küçüğe sıralandıkları için en büyük kelime 0.indexe yerleşir.
}

//Noktalama işaretlerini kaldır

//Kelimeleri boşluklardan split edip bir Array oluşturmak.

//Oluşan Arrayı , kelimelerin karakter sayılarına göre büyükten küçüğe sıralamak (.sort() metodu) Sort; string array elemanlarının baş haflerini alfabetik olarak sıralar.Burda kelimelerin .length ini yani bir sayı kullanacağız. O sebeple .sort bir function olur.

//En uzun kelimeyi (0.index) return etmek.