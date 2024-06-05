export type TProduct = {
    id: number;
    name: string;
    category?: string;
    price: number;
    imageUrl: string;
    quantity?: number;
    description: string;
    item?: string;
  }

export type BreadcrumProps = {
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
    description?: string;
  }
  
export type CartItem = {
  name: string;
  price: number;
}


export type ProductDisplayProps = {
  product: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    description?: string;
  }
}

export type ShopCategoryProps = {
  product?: string;
  category?: string;
  name: string;
}

export type responseData = {
  success: boolean;
  token: string;
  errors?: string;
  cartData?: Record<string, number>;
}