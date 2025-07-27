// https://www.hackerrank.com/challenges/taum-and-bday/problem

// change types outside of func fron number to bigint :\

function taumBday(b: number, w: number, bc: number, wc: number, z: number): BigInt {
    // Write your code here
    
    const convertBc = wc + z;
    const convertWc = bc + z;
    
    return BigInt(Math.min(bc, convertBc))* BigInt(b) + BigInt(Math.min(wc, convertWc))* BigInt(w); 
}
