import { Input } from '@/components/ui/input'
import { Search, ShoppingBag } from 'lucide-react'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import CartModal from './cart-modal'
import { Badge } from '@/components/ui/badge'
export default function ShopNavbar({ removeFromCart, addToCart, getCartDetails, updateCartQuantity, customer }: any) {
    return (

        <nav className="flex justify-between py-10 items-center bg-white">
            <h1 className="text-xl text-gray-800 font-bold">HotCoffee</h1>
            <div className="flex items-center">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {/* <input className="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..." /> */}
                </div>
                <ul className="flex items-center space-x-6">

                    <li >
                        <Sheet >
                            <SheetTrigger asChild>
                                <button className='cursor-pointer relative'>
                                    {
                                        getCartDetails()?.cartItems?.length ? <Badge className='absolute -top-3 hover:bg-primary rounded-full'>

                                            {getCartDetails()?.totalItems}

                                        </Badge> : <></>
                                    }
                                    <ShoppingBag />
                                </button>
                            </SheetTrigger>
                            <CartModal customer={customer} getCartDetails={getCartDetails} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity} addToCart={addToCart} />

                        </Sheet>

                    </li>

                </ul>
            </div>
        </nav>
    )
}
