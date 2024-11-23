// scripts/cotizaciones.js

const cotizaciones = {
    "oficial": { compra: 99.99, venta: 100.99 },
    "blue": { compra: 145.50, venta: 150.00 },
    "tarjeta": { compra: 102.50, venta: 105.75 },
    "MEP": { compra: 97.60, venta: 101.20 }
};

const compraContainer = document.getElementById('compra-cards');
const ventaContainer = document.getElementById('venta-cards');

function createCard(tipo, valor, tipoOperacion) {
    const card = document.createElement('div');
    card.classList.add('card');
    const title = document.createElement('h4');
    title.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    const value = document.createElement('p');
    value.textContent = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(valor);
    card.appendChild(title);
    card.appendChild(value);
    if (tipoOperacion === 'compra') {
        compraContainer.appendChild(card);
    } else {
        ventaContainer.appendChild(card);
    }
}

for (const tipo in cotizaciones) {
    createCard(tipo, cotizaciones[tipo].compra, 'compra');
    createCard(tipo, cotizaciones[tipo].venta, 'venta');
}

