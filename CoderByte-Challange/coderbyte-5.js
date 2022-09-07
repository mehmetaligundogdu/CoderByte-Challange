//***********************************Find Intersection************************************
/*
Have the function findIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: The first element will represent a list of comma-separated numbers sorted in ascending order,the secondd element will represent a second list of comma-separatednumbers(also sorted). Your goal is to return a comma-separated string containing the number that occur in elements of strArr in sorted order.If there is no intersection, return the string false.
*/
export const findIntersection=function(arr){
    let intersection=[]; //Kesişen elemanları koyacağımız boş bir array tanımlıyoruz
    const set1=arr[0].replace(/\s/g,"").split(","); //Yeni bir küme oluşturup , boşluk"space" leri replace edip değiştirdik(sildik),split ile karekter karekter array haline dönüştürdük.Arrayın [0], 0.indexi yani 1.string ifade için.
    const set2=arr[1].replace(/\s/g,"").split(",") //Arrayın [1], 1.indexi yani 2.string ifade için.Daha sonra froEach ile tüm stringi dolaşacağız.

    set1.forEach(function(item){//set2 içinde set1 elemanlarından herhangi biri var mı diye forEach ile tek tek eleman kontrolü yaparız.
        if(set2.includes(item)){ //set2 itemlardan birini içeriyor mu?
            intersection.push(item); //İçeriyorsa o itemi intersectiona push et.
        }
    })
    if(intersection.length!=0){//intersection array boş küme değilse, yani eleman varsa
        return intersection.toString(); //intersection arrayını stringe çevirip return et.
    }
    else{
        return false;
    }
}


//2 stringden oluşan arrayı incele ve kesişen değerleri string olarak bize ver.
//Öncelikle kesişen elemanları koyacağımız boş bir array oluştururuz
//2 sitringten oluşan arrayın stringlere (2'ye) bölüp , içerisindeki boşlukları(space),regular exp ve replace yardımı ile siler ve tüm elemanları array elemanına dönüştürürüz.
//forEach yardımı ile 1.string ile 2.stringde kesişen eleman var mı diye tek tek kontrol ederiz.
//Kesişme olanları string olarak yazdırırız,eğer yoksa sonucu false olarak döndürürüz.
