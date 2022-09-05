export class Ingredient {
    // adding "public" before the variable
    // names enables TS to take in input
    // for those variables, and make those
    // inputs accessible as properties of 
    // the associated class under the same names
    constructor(public name: string, public amount: number)   {
        
    }
}