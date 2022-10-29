function isSequenceArray(n,m,arr) {
if(arr[0]!==n || arr[arr.length-1]!==m)return 0
let x=[0]
for (let  i= 0; i < arr.length; i++) {
if(arr[i]==x){
    continue
}
if (arr[i]==x+1) {
    x=arr[i]
}else return 0
}
    return 1;
}

console.log(isSequenceArray(1,5,[0,1,2,3,4,5]));