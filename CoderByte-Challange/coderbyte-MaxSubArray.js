// *********************************Max SubArray***************************************

//Have the function MaxSubarray(arr) take the array of numbers stored in arr and determine the largest sum that can be formed by any contiguous subarray in the array.
//ex. İf arr is [-2,5,-1,7,-3] then your program should return 11 because the sum is formed by the subarray[5,-1,7]. Adding any element before or after this subarray would make the sum smaller.

export function MaxSubarray(arr){
    let currentSum=arr[0];
    let maxSum=arr[0];

    for(let i=1; i<arr.length ; i++){
        currentSum=Math.max(currentSum + arr[i] , arr[i])
        maxSum=Math.max(currentSum,maxSum);
    }
    return maxSum;

}

//currentSum ve maxSum değişkenlerini boş tanımlarız
//Array uzunluğunca döndürdüğümüz for'da , currenSum için "currenSum + arr[i]" mi daha büyük yoksa "arr[i]" mi daha büyük bunu Math.max ile kıyaslarız.
//Array uzunluğunca döndürdüğümüz for'da , maxSum için "maxSum" mu daha büyük yoksa "currentSum" mu daha büyük bunu Math.max ile kıyaslarız.