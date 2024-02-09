export type TProduct = {
    id: number,
    name: string,
    category?: string,
    price: number,
    imageUrl: string,
    quantity?: number,
    description: string
  }

export type BreadcrumProps = {
    product: string,
    category: string,
    name: string
}

export type ShopContextType = {
    all_product: TProduct[];
    cartItems: Record<number, number>;
    addToCart: (itemId: number) => void;
    removeFromCart: (itemId: number) => void;
    getTotalCartAmount: () => number;
    getTotalCartItems: () => number;
}


export type ItemProps = {
    id: number;
    name: string;
    image: string;
    price: number;
  }
  
export type CartItem = {
  name: string;
  price: number;
}
