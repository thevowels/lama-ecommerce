"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import useCartStore from "../stores/cartStore";

export default function ShoppingCartIcon() {
  const { cart, hasHydrated } = useCartStore();
  
  const itemCount = hasHydrated ? cart.reduce((acc, item) => acc + item.quantity, 0) : 0;
  
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      {hasHydrated && itemCount > 0 && (
        <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4 text-xs flex items-center justify-center font-medium">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
