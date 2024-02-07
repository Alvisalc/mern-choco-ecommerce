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
    all_product: any,
    cartItems: any,
    removeFromCart: () => void,
    getTotalCartAmount: () => number
}