

function retirarDinero(monto) {
    return new Promise((resolve, reject) => {
        const saldoDisponible = 500;

        setTimeout(() => {
            if (monto <= saldoDisponible) {
                const saldoRestante = saldoDisponible - monto;
                resolve("Retiro exitoso de " + monto + " Y su saldo restante es: " +  saldoRestante);
            } else {
                reject("Fondos insuficientes. Límite de retiro: $500");
            }
        }, 1500);
    });
}

// Exitoso: 
retirarDinero(200).then((mensaje) => {
        console.log("✅ " + mensaje);
    })
    .catch((error) => {
        console.log("❌ " + error);
    });

// Fallido: 
retirarDinero(600).then((mensaje) => {
        console.log("✅ " + mensaje);
    })
    .catch((error) => {
        console.log("❌ " + error);
    });

