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
        price: 58.00, 
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
        price: 45.00, 
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
        price: 38.00, 
        img: "img/RepuestoLi.jpg", 
        category: "electronica",
        features: [
            "Repuesto licuadora", 
            "Base, cuchilla y 02 gomas", 
            "compatible para licuadora Oster y Osterizer",
        ]
    },
    {
        id: 10, 
        name: "USB 250MB", 
        price: 25.00, 
        img: "img/USB.jpg", 
        category: "electronica",
        features: [
            "USB alta velocidad", 
            "Datos, fotos, videos, musica", 
            "interfaz Type-C",
        ]
    },
    {
        id: 11, 
        name: "Mochila capibara", 
        price: 58.00, 
        img: "img/mochila.jpg", 
        category: "ropa",
        features: [
            "Nylon de colores", 
            "Correas ajustables", 
            "Toque juvenil",
        ]
    },
    {
        id: 12, 
        name: "Bolso Hello Kitty", 
        price: 49.00, 
        img: "img/carteraHK.jpg", 
        category: "ropa",
        features: [
            "Bolso con bufanda", 
            "Estioo casual para mujer", 
            "Toque juvenil",
        ]
    },
    {
        id: 13, 
        name: "Bolso con mariposa", 
        price: 42.00, 
        img: "img/bolsoHK.jpg", 
        category: "ropa",
        features: [
            "Decorado con mariposa y HK", 
            "Tela alta calidad resistente", 
            "Toque juvenil",
        ]
    },
    {
        id: 14, 
        name: "Rubor e iluminador", 
        price: 28.90, 
        img: "img/sombras.png", 
        category: "ropa",
        features: [
            "sombras bronce y rosado", 
            "hecho en Francia", 
        ]
    },
    {
        id: 15, 
        name: "Crema hidratanta", 
        price: 34.90, 
        img: "img/crema.jpg", 
        category: "ropa",
        features: [
            "Extracto de monoi, 250ml", 
            "hecho en Francia", 
        ]
    },
    {
        id: 16, 
        name: "Mascarilla zanahoria", 
        price: 32.90, 
        img: "img/mascarilla.jpg", 
        category: "ropa",
        features: [
            "Extracto de zanahoria", 
            "hecho en Francia", 
        ]
    },
    {
        id: 17, 
        name: "Parches", 
        price: 24.90, 
        img: "img/parches.png", 
        category: "ropa",
        features: [
            "Parches para el acne", 
            "hecho en Francia", 
        ]
    },
    {
        id: 18, 
        name: "Leche corporal", 
        price: 49.90, 
        img: "img/leche.jpg", 
        category: "ropa",
        features: [
            "Especial para pieles secas", 
            "hecho en Francia", 
        ]
    },
    {
        id: 19, 
        name: "Derpy Kpop", 
        price: 45.90, 
        img: "img/Derpy.jpg", 
        category: "ropa",
        features: [
            "Felino azul", 
            "Funko Kpop", 
        ]
    },
    {
        id: 20, 
        name: "Jinu Kpop", 
        price: 45.90, 
        img: "img/Jinu.jpg", 
        category: "ropa",
        features: [
            "Kpop Demon Hunters", 
            "Funko Kpop", 
        ]
    },
    {
        id: 21, 
        name: "Mira Guerrera", 
        price: 45.90, 
        img: "img/Mira.jpg", 
        category: "ropa",
        features: [
            "Kpop Demon Hunters", 
            "Funko Kpop", 
        ]
    },
    {
        id: 22, 
        name: "Rumi Guerrera", 
        price: 45.90, 
        img: "img/Rumi.jpg", 
        category: "ropa",
        features: [
            "Kpop Demon Hunters", 
            "Funko Kpop", 
        ]
    },
    {
        id: 23, 
        name: "Zoey Guerrera", 
        price: 45.90, 
        img: "img/Zoey.jpg", 
        category: "ropa",
        features: [
            "Kpop Demon Hunters", 
            "Funko Kpop", 
        ]
    },
    {
        id: 24, 
        name: "StitBoy Kpop", 
        price: 45.90, 
        img: "img/StitBoy.jpg", 
        category: "ropa",
        features: [
            "Kpop Demon Hunters", 
            "Funko Kpop", 
        ]
    },
    {
        id: 25, 
        name: "Polera LaBubu", 
        price: 30.00, 
        img: "img/polera.jpg", 
        category: "ropa",
        features: [
            "Polera LaBubu", 
            "Tallas 6 y 14", 
        ]
    },
    {
        id: 26, 
        name: "Gafas para mujer", 
        price: 32.00, 
        img: "img/lentes.png", 
        category: "hogar",
        features: [
            "Forma cuadrada sin montura", 
            "Adorno con pedreria", 
        ]
    },
    {
        id: 27, 
        name: "Bolso blanco", 
        price: 36.00, 
        img: "img/CarteraB.jpg", 
        category: "ropa",
        features: [
            "Bolso para paseo", 
            "Color blanco", 
            "Toque juvenil",
        ]
    },
    {
        id: 28, 
        name: "Falda Verde", 
        price: 26.00, 
        img: "img/faldaV.jpg", 
        category: "ropa",
        features: [
            "Falda juvenil", 
            "Talla M y L", 
        ]
    },
    {
        id: 29, 
        name: "Falda Dorada", 
        price: 26.00, 
        img: "img/faldaD.jpg", 
        category: "ropa",
        features: [
            "Falda juvenil", 
            "Talla M", 
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