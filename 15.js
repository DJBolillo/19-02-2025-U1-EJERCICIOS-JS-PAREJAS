function Promesa() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Promesa resuelta");
        }, 2000);
    });
}

async function ejecutarPromesa() {
    const resolucion = await Promesa();
    console.log(resolucion);
}

ejecutarPromesa();
