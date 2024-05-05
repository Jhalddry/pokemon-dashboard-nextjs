import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: 'Shopping Cart',
  description: 'A simple shopping cart',
}

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Shopping Cart</span>
      
      <CartCounter value={10}/>
    </div>
  );
}