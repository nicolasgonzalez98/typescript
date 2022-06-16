function suma(a: number|string, b: number|string): number|string {
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b
    }else{
        return a +' '+ b
    }
}
// Logra que esta funcion tambien concatene strings