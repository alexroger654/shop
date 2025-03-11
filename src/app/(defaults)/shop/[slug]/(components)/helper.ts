import { IProducts } from "@/shared/interfaces/product.interface";
import { toast } from "sonner";

// Function to add a product to cart
export const addToCart = (product: IProducts, quantity: number = 1) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]') as { product: IProducts, quantity: number }[];

    const existingProductIndex = cart.findIndex(item => item.product._id === product._id);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += quantity; // Update quantity if product exists
    } else {
        cart.push({ product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Product Added to Cart')
};

// Function to update the quantity of a product in cart
export const updateCartQuantity = (productId: string, quantity: number) => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]') as { product: IProducts, quantity: number }[];

    cart = cart.map(item =>
        item.product._id === productId ? { ...item, quantity } : item
    );

    localStorage.setItem('cart', JSON.stringify(cart));
};

// Function to remove a product from cart
export const removeFromCart = (productId: string) => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]') as { product: IProducts, quantity: number }[];

    cart = cart.filter(item => item.product._id !== productId);

    localStorage.setItem('cart', JSON.stringify(cart));
};


export const getCartDetails = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]') as { product: IProducts, quantity: number }[];

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.product.price) * item.quantity, 0);
    const totalOfferPrice = cart.reduce((total, item) => total + parseFloat(item.product.offerPrice) * item.quantity, 0);
    const totalSave = totalPrice - totalOfferPrice;

    return {
        cartItems: cart,
        totalItems,
        totalPrice,
        totalOfferPrice,
        totalSave,
    };
};
