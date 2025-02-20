function Promesa() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Promesa resuelta");
        }, 2000);
    });
}


Promesa().then(resolucion => console.log(resolucion));
