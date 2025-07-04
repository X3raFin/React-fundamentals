import { createContext, useState, useContext } from "react"

const cartContext = createContext([]);

export default function ContextProvider({ children }) {
	const [cartStatus, setCartStatus] = useState([]);

	const addItemToCart = (product) => {
		setCartStatus(prevItems => {
			const existingItem = prevItems.find(item => item.id === product.id);
			if (existingItem) {
				return prevItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
			}
			return [...prevItems, { ...product, quantity: 1 }];
		})
	}

	const removeItemFromCart = (productId) => {
		setCartStatus(prevItems => prevItems.filter(item => item.id !== productId));
	}

	const getTotalPrice = () => {
		return cartStatus.reduce((total, item) => total + (item.price * item.quantity), 0);
	};

	const getQuantity = () => {
		return cartStatus.reduce((total, item) => total + item.quantity, 0);
	};

	const contextValue = {
		cartStatus,
		addItemToCart,
		removeItemFromCart,
		getQuantity,
		getTotalPrice,
	};

	return (
		<cartContext.Provider value={contextValue}>
			{children}
		</cartContext.Provider>
	);
}

export const useCart = () => {
	const context = useContext(cartContext);
	if (context === null) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
}
