// ********************************SepWalking******************************************

//Have the function StepWalking(num) take the num parameter being passed which will be an integer between 1-1000 that represents the number of stairs you will have to climb. You can climb the sef of stairs by taking either 1 step or 2 steps, and you can combine these in any order. So for example, to climb 3 steps you can either do:(1 step,1 step,1 step) or (2,1) or(1,2). So for 3 steps we have 3 different ways to climb them, so your program should return 3. Your program should return the number of combinations of climbing num steps.

export function StepWalking(num){
    if(num===1){
        return 1;
    }
    if(num===2){
        return 2;
    }
    return StepWalking(num-1) + StepWalking(num-2);

}

//Merdivenlerini 1 ya da 2şer basamak çıkabildiğimiz soruda,aynı merdiveni kaç farklı şekilde çıkabileceğimiz sorulmaktadır.
//1 ve 2 basamaklı merdiveni çıkmanın olasılığı sabit olduğundan ilk başta onları belirtmiş olduk.
//2 den fazla basamaklı merdivenleri çıkarken ise yukarıda kullandığımız formülü kullanırız. Num=(num-1)+ (num-2)