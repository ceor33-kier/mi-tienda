// 1. BASE DE DATOS DE PRODUCTOS
const products = [
    { 
        id: 1, 
        name: "Buzo BB", 
        price: 48.00, 
        img: "img/RopaBB.jpg", 
        category: "ropa",
        features: ["conjunto para BB", "Capucha y Pantalon", "Corte entallado"]
    },
    { 
        id: 2, 
        name: "Reloj Mujer", 
        price: 65.00, 
        img: "img/Rmujer.png", // Asegúrate de tener esta imagen
        category: "electronica",
        features: ["Pantalla tactil", "Carga USB", "ideal para regalo"]
    },
    { 
        id: 3, 
        name: "Reloj Cuarzo", 
        price: 45.00, 
        img: "img/Rvar.png", 
        category: "electronica",
        features: ["Reloj de cuarzo", "correa ajustable", "= ideal para regalo"]
    },
    { 
        id: 4, 
        name: "Reloj Hombre", 
        price: 43.00, 
        img: "img/Rhombre.jpg", 
        category: "electronica",
        features: [
            "Reloj Inteligente", 
            "Modos deportivos integrados", 
            "Compatible con iPhone y Android",
        ]
    },
    {
        id: 5, 
        name: "Reloj mariposa", 
        price: 68.00, 
        img: "img/Rmariposa.png", 
        category: "electronica",
        features: [
            "Reloj de cuarzo", 
            "+ pulsera, collar, aretes", 
            "Toque juvenil",
        ]
    },
    {
        id: 6, 
        name: "Capibara", 
        price: 18.00, 
        img: "img/capibara.jpg", 
        category: "hogar",
        features: [
            "Capibara peluche", 
            "con capucha", 
            "12 cm alto",
        ]
    },
    {
        id: 7, 
        name: "teclado Acer", 
        price: 45.00, 
        img: "img/teclado.jpg", 
        category: "electronica",
        features: [
            "Teclado USB, con cable", 
            "Acer ergonomico", 
            "104 teclas",
        ]
    },
    {
        id: 8, 
        name: "Zapatillas peluche", 
        price: 25.00, 
        img: "img/Zapeluche.jpg", 
        category: "ropa",
        features: [
            "Zapatillas tipo peluche", 
            "Suela antideslizante", 
            "talla 26-27",
        ]
    },
    {
        id: 9, 
        name: "Repuesto licuadora", 
        price: 32.00, 
        img: "img/RepuestoLi.jpg", 
        category: "electronica",
        features: [
            "Repuesto licuadora", 
            "Base, cuchilla y 02 gomas", 
            "compatible para licuadora Oster y Osterizer",
        ]
    },

];

let cart = [];

// 2. FUNCIONES DE RENDERIZADO (DIBUJAR EN PANTALLA)
function renderProducts(productList) {
    const container = document.getElementById('product-container');
    container.innerHTML = ""; // Limpiar contenedor

    if (productList.length === 0) {
        container.innerHTML = `<p style="text-align:center; grid-column: 1/-1;">No se encontraron productos.</p>`;
        return;
    }

    productList.forEach(p => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${p.img}" alt="${p.name}" onclick="showProductDetail(${p.id})" style="cursor:pointer">
                <h3 onclick="showProductDetail(${p.id})" style="cursor:pointer">${p.name}</h3>
                <p>S/ ${p.price.toFixed(2)}</p>
                <button class="btn-add" onclick="addToCart(${p.id})">🛒 Añadir al carrito</button>
            </div>
        `;
    });
}

// 3. LÓGICA DEL CARRITO
function addToCart(id) {
    const item = products.find(p => p.id === id);
    if (item) {
        cart.push(item);
        updateCartUI();
    }
}

function updateCartUI() {
    const total = cart.reduce((sum, i) => sum + i.price, 0);
    const formattedTotal = total.toFixed(2);

    // Actualizar contadores
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-count-footer').innerText = cart.length;

    // Actualizar lista lateral
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = cart.map(i => `<p>${i.name} - S/ ${i.price.toFixed(2)}</p>`).join('');

    // Actualizar totales
    document.getElementById('total-price').innerText = formattedTotal;
    document.getElementById('total-price-footer').innerText = formattedTotal;
}

function toggleCart() {
    document.getElementById('shopping-cart').classList.toggle('hidden');
}

// 4. FILTROS Y BÚSQUEDA
function filterProducts() {
    const searchTerm = document.getElementById('product-search').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm));
    renderProducts(filtered);
}

function filterByCategory(category) {
    // Manejar botones activos
    const buttons = document.querySelectorAll('.btn-filter');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const filtered = category === 'todos' 
        ? products 
        : products.filter(p => p.category === category);
    
    renderProducts(filtered);
}

// 5. DETALLE DE PRODUCTO (MODAL)
function showProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    // Llenar información
    document.getElementById('detail-img').src = product.img;
    document.getElementById('detail-name').innerText = product.name;
    document.getElementById('detail-category').innerText = product.category;
    document.getElementById('detail-price').innerText = product.price.toFixed(2);

    // Lista de características
    const featuresList = document.getElementById('detail-features-list');
    featuresList.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');

    // Configurar botón de carrito dentro del modal
    document.getElementById('add-from-detail').onclick = function() {
        addToCart(product.id);
        closeDetail();
    };

    // Mostrar modal
    document.getElementById('product-detail-modal').classList.remove('hidden');
}

function closeDetail() {
    document.getElementById('product-detail-modal').classList.add('hidden');
}

// 6. PAGOS
function showPaymentMethods() {
    if(cart.length === 0) return alert("El carrito está vacío");
    document.getElementById('payment-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('payment-modal').classList.add('hidden');
    document.getElementById('payment-details').innerHTML = "";
}

function payWithYape() {
    document.getElementById('payment-details').innerHTML = `
        <p>Escanea el QR para pagar</p>
        <img src="https://via.placeholder.com/200?text=QR+YAPE" style="width:200px; margin: 10px auto; display: block;">
        <p>Envía el comprobante al WhatsApp: 986 994 220</p>
    `;
}

function payWithCard() {
    document.getElementById('payment-details').innerHTML = `
        <input type="text" placeholder="Número de Tarjeta" style="width:100%; padding: 8px; margin-bottom:10px;">
        <div style="display:flex; gap:5px;">
            <input type="text" placeholder="MM/AA" style="padding: 8px; width: 50%;">
            <input type="text" placeholder="CVV" style="padding: 8px; width: 50%;">
        </div>
        <button onclick="alert('Pago procesado con éxito')">Confirmar Pago</button>
    `;
}

// INICIALIZACIÓN
renderProducts(products);

function enviarPedidoWhatsApp() {
    const telefono = "51986994220"; 
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let mensaje = "¡Hola! Quisiera realizar el siguiente pedido por Yape:\n\n";
    cart.forEach(item => {
        mensaje += `• ${item.name} - S/ ${item.price.toFixed(2)}\n`;
    });

    const total = cart.reduce((sum, i) => sum + i.price, 0).toFixed(2);
    mensaje += `\n*Total a pagar: S/ ${total}*`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

async function enviarPedidoWhatsApp() {
    const urlScript = "https://script.google.com/macros/s/AKfycbyUzaN-btbgwuvJ_On_5wuaSV1HX9BUCwxzi6yPz2dFz7uWTzLf5CVYyMbuv_5h66pD/exec"; // Pega aquí la URL que copiaste
    
    if (cart.length === 0) return alert("Carrito vacío");

    const total = cart.reduce((sum, i) => sum + i.price, 0).toFixed(2);
    const listaProductos = cart.map(i => i.name).join(", ");

    // 1. Enviar a Google Sheets de forma invisible
    try {
        await fetch(urlScript, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify({
                productos: listaProductos,
                total: total
            })
        });
    } catch (e) {
        console.error("Error guardando en Sheets", e);
    }

    // 2. Abrir WhatsApp (como ya lo hacías)
    let mensaje = `¡Hola! Nuevo pedido:\n${cart.map(i => `- ${i.name}`).join("\n")}\n*Total: S/ ${total}*`;
    window.open(`https://wa.me/51986994220?text=${encodeURIComponent(mensaje)}`, '_blank');
}