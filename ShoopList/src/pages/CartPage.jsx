import { useCart } from "./CartContext"

function CartPage() {
	const {cartStatus, getQuantity, getTotalPrice} = useCart();

	return (
		<>
		{getQuantity() === 0 ? <h1>Nie dodałeś jeszcze nic do koszyka</h1> : <><h1>Produkty w koszyku:</h1>{cartStatus.map(product =><ProductCard product={product} key={product.id} />)}<h1>Suma Kosztów: {getTotalPrice()}</h1></>}
		</>
	);
}

function ProductCard({product}){
	return (
		<div className="cont">
		<img src={product.imageUrl} alt={product.name} />
		<div>
			<h3>{product.name}</h3>
			<h4>{product.price} zł</h4>
		</div>
		</div>
	);
}

export default CartPage