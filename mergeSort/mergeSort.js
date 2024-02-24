let merge = (array, l, m, r) => {
    let i, j, k;
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = [], R = [];

    for(i = 0; i < n1; i++){
        L[i] = array[l + i]
    }
    for(i = 0; i < n2; i++){
        R[i] = array[m + 1 + i];
    }

    i = 0;
    j = 0;
    k = l;

    while (i < n1 && j < n2){
        if(L[i] <= R[j]){
            array[k] = L[i];
            i++
        }
        else{
            array[k] = R[j];
            j++
        }
        k++
    }

    while(i < n1){
        array[k] = L[i];
        i++
        k++
    }

    while(j < n2){
        array[k] = R[j];
        j++;
        k++;
    }
}



function mergeSort(array, l, r){
    if(l<r){
        let m = parseInt(l+(r-l)/2);

        mergeSort(array, l, m);
        mergeSort(array, m+1, r);

        merge(array, l, m, r);
    }
}

let array = [1,4,5,7,8,23,4,5,0,5,200,3,5,67,34,123,34,34,456,47];

console.log(array);

mergeSort(array, 0, array.length-1);

console.log(array);