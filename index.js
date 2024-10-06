let arr = [4,5,6,2,1,77,8,9]
for(let i = 0;i< arr.length;i++){
    let count= 0
    for(let j= 1;j<=arr[i];j++){
    if(arr[i] % j == 0){
        count++
        }
    }

    if(count === 2){
        console.log(arr[i] , " - This is prime Number")
    }

}