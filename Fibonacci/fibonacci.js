function fibs(num){
    let fibsNum = [];
    let first = 0
    let sec = 1
    for(i = 0; i< num; i++){
        fibsNum.push(first);
        let sec2 = sec
        sec = first+sec;
        first = sec2;       
    }
    return fibsNum;
}

console.log(fibs(9));

const fibsRec = num =>{
    let fibsNum = [] 
    if(num == 1){
        fibsNum.push(0);
        console.log(fibsNum)
    }
    else if(num == 2){
        fibsNum.push(1)
        console.log(fibsNum)
    }
    else{
        fibsNum = fibsNum.concat(parseInt(fibsRec(num-1))+parseInt(fibsRec(num-2)));
        console.log('_')
        console.log(fibsNum)
    }
    return fibsNum
}

console.log(fibsRec(8));