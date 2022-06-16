//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!
function pluck<T, U extends Object >(arreglo: T[], prop: U):T{
    return arreglo.map((object) => {
        return object[prop]
    }) 
}