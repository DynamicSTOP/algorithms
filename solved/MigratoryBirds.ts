// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr: number[]): number {
    // Write your code here
    const map:Record<number,number|undefined> = {}
    arr.forEach(a=>{
        map[a] = ( map[a] ?? 0) + 1;
    })
    const pairs = Object.entries(map);
    pairs.sort(([idA,numA], [idB,numB])=>{
        if(numA===numB){
            return Number.parseInt(idA,10) - Number.parseInt(idB,10);
        }else{      
            return (numB??0) - (numA??0)
        }      
    });    
    
    return Number.parseInt(pairs[0][0],10);
}
