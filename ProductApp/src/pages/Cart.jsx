import React from 'react';
import { Container } from '../components';
import { useCart } from '../Context/CartContext';

function Cart() {
    const { cartItems, removeFromCart } = useCart();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-blue-50 py-10 px-4">
            <Container>
                <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                ) : (
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
                            >
                                <div>
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                    <p className="text-sm text-gray-600">Price: ${item.price}</p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <h2 className="text-xl font-bold text-right text-green-700">Total: ${total.toFixed(2)}</h2>
                    </div>
                )}
            </Container>
        </div>
    );
}

export default Cart;