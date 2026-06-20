

function consultarClima(ciudad) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const climas = {
                "Quito": {temperatura: "18°C", condicion: "Nublado"},
                "Madrid": { temperatura: "24°C", condicion: "Soleado" },
                "Londres": { temperatura: "15°C", condicion: "Nublado" },
                "Paris": { temperatura: "20°C", condicion: "Lluvioso" },
                "Mexico": { temperatura: "22°C", condicion: "Parcialmente nublado" },
                "Buenos Aires": { temperatura: "30°C", condicion: "Soleado" }
            };
            
            if (climas[ciudad]) {
                resolve(climas[ciudad]);
            } else {
                reject("Sin datos de la ciudad consultada");
            }
        }, 1500);
    });
}

async function mostrarClima(ciudad) {
    try {
        console.log("Consultando clima para " + ciudad + "...");
        const clima = await consultarClima(ciudad);
        console.log("Ciudad: " + ciudad);
        console.log("Temperatura: " + clima.temperatura);
        console.log("Condicion: " + clima.condicion);
        console.log("Consulta completada");
    } catch (error) {
        console.log("Error al consultar el clima: " + error);
    }
}

// Exitoso consumiendo: 
mostrarClima("Quito");

// Consumuiendo fallido: 
mostrarClima("Tokioaa");