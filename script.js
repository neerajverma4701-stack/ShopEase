const products = [
    {
        id: 1,
        name: "Running Shoes",
        price: 1499,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
    },
    {
        id: 2,
        name: "T-Shirt",
        price: 599,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
    },
    {
        id: 3,
        name: "Headphones",
        price: 1999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 2499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
        id: 5,
        name: "Backpack",
        price: 899,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
    },
    {
        id: 6,
        name: "Sunglasses",
        price: 499,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"
    }
];

let cart = [];

function displayProducts() {
    const container = document.getElementById("products");

    if (!container) {
        console.error('HTML mein id="products" wala element nahi mila.');
        return;
    }

    container.innerHTML = products.map(product => `
        <div class="card">
            <img
                src="${product.image}"
                alt="${product.name}"
                style="width:100%; height:200px; object-fit:contain;"
                onerror="this.alt='Image unavailable'; this.style.display='none';"
            >

            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `).join("");
}

function addToCart(id) {
    const product = products.find(item => item.id === id);

    if (!product) return;

    cart.push(product);

    const count = document.getElementById("cartCount");
    const total = document.getElementById("cartTotal");
    const items = document.getElementById("cartItems");

    if (count) count.textContent = cart.length;

    if (total) {
        total.textContent = cart.reduce(
            (sum, item) => sum + item.price, 0
        );
    }

    if (items) {
        items.innerHTML = cart.map(item =>
            `<p>${item.name} - ₹${item.price}</p>`
        ).join("");
    }
}

displayProducts();