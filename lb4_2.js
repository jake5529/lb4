
function delElArr(){
    let N = 9;
    let arr = [];
    let arr1 = [];

    for (let i = 0; i < N; i++){
        arr.push(getRandomNumber(1, 10));
    }
    console.log(arr)

    for (let i = 0; i < N-1; i++){
        if(arr[i]==arr[i+1]){
            arr1.push(arr[i])
            i++;
        }
        else{
            arr1.push(arr[i])
        }
    }
    console.log(arr1)
}

delElArr()
