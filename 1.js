// input array is sorted but not decreasing 
// delete duplicate value and replace it with "_" 
// importantly do not change the number of array 
const input = [0,1,1,2,2,2,2,3,4,5,5]
const process = (array) => {
    array.sort((a,b)=> a.Min - b.Max)
    for(let i = 0 ; i < array.length ; i ++ ){
        if(array[i] - array[i + 1] == 0){
            array[i] = undefined
        }
    }
    array.sort((a,b)=> a.Min - b.Max)

    for(let i = 0 ; i < array.length ; i ++ ){
        if(array[i] === undefined){
            array[i] ='_'
        }
    }
    let kValue = 0;
    for(let i = 0; i < array.length ; i ++){
        if(array[i] - array[i] == 0){
            kValue += 1
        }
    }

    console.log(kValue)
    return array
}

const result = process(input)
console.log(result)