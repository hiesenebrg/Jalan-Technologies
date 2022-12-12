function leastElement(arr , i , j){
    let min = 120000;
    let index = -1;
    while(i<=j){
        if(arr[i]<min){
            min = arr[i];
            index = i;
            
        }
        i+=1;
    }
    
    return index;
}

function answer(arr){
    let i = 0;
    let j = arr.length-1;
    while(i!=arr.length-1){
        if(i%2==0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j-=1;
            i+=1;
        }else{
            let temp = arr[i];
            let min_index = leastElement(arr,i,arr.length-1);
            arr[i] = arr[min_index];
            arr[min_index] = temp;
            i+=1;
        }
       
    }
    return arr;
}
let arr = [2,4,6,8,10];

let ans = answer(arr);
console.log(ans);