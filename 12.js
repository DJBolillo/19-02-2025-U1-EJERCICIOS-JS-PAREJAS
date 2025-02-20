let precios = [10,20,30,40];

let sumaTotal = precios.reduce((total, precio)=>{
 return total + precio;
},0);

console.log("sumaTotal: ", sumaTotal);

    
