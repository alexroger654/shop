'use client'

import React, { useEffect, useState } from 'react'
import Categories from './(components)/categories'
import Products from './(components)/products'
import ShopNavbar from './(components)/navbar'
import { useQuery } from '@/hooks/useQuery'
import { AnyNaptrRecord } from 'node:dns'
import { useSearchParams } from 'next/navigation'
import { toast } from 'sonner'
import { IProduct } from '@/shared/interfaces/product.interface'
import { ICategory } from '@/shared/interfaces/category.interface'

interface IProductData {
    data: IProduct[]
}
interface ICategoryData {
    data: ICategory[]
}



export default function page() {

    const [cart, setCart] = useState<{ product: IProduct; quantity: number }[]>([]);

    const searchParam = useSearchParams()

    const customer = searchParam.get('customer')
    const searchedCategory = searchParam.get('category')






    // ======================== cart
    // Function to add a product to the cart
    const addToCart = (product: IProduct, quantity: number = 1) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item.product._id === product._id);

            if (existingProductIndex !== -1) {
                // Update quantity if product exists
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += quantity;
                return updatedCart;
            } else {
                return [...prevCart, { product, quantity }];
            }
        });

        toast.success("Product Added to Cart");
    };

    // Function to update the quantity of a product in the cart
    const updateCartQuantity = (productId: string, quantity: number) => {
        setCart(prevCart =>
            quantity > 0
                ? prevCart.map(item =>
                    item.product._id === productId ? { ...item, quantity } : item
                )
                : prevCart.filter(item => item.product._id !== productId) // Remove if quantity is 0
        );
    };

    // Function to remove a product from the cart
    const removeFromCart = (productId: string) => {
        setCart(prevCart => prevCart.filter(item => item.product._id !== productId));
    };

    // Function to get cart details
    const getCartDetails = () => {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        const totalPrice = cart.reduce((total, item) => total + parseFloat(item?.product?.originalPrice) * item.quantity, 0);
        const totalOfferPrice = cart.reduce((total, item) => total + parseFloat(item.product.offerPrice) * item.quantity, 0);
        const totalSave = totalPrice - totalOfferPrice;

        return { cartItems: cart, totalItems, totalPrice, totalOfferPrice, totalSave };
    };
















    // =================== data fetching
    const { data: productData, loading, } = useQuery<IProductData>('product');
    const { data: categories, loading: categoryLoading, } = useQuery<ICategoryData>('category');

    function groupDataByCategory() {
        const groupedData: any = [];
        const categoryMap = new Map();

        productData?.data.forEach((item: any) => {
            const categoryName = item.categoryName;

            if (!categoryMap.has(categoryName)) {
                categoryMap.set(categoryName, {
                    categoryName: categoryName,
                    products: []
                });
                groupedData.push(categoryMap.get(categoryName));
            }

            categoryMap.get(categoryName).products.push(item);
        });

        return groupedData;
    }


    // ===================== use effects
    // Load cart from localStorage on mount
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        if (storedCart.length) setCart(storedCart);
    }, []);

    // Sync cart with localStorage when it changes
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            localStorage.removeItem("cart"); // Clear cart when empty
        }
    }, [cart]);

    // ======================== render =================
    return (
        <div className='w-full h-screen overflow-y-scroll fixed top-0 z-[500] bg-background '>
            <div className='mx-auto max-w-screen-2xl px-4 lg:px-0'>
                <ShopNavbar getCartDetails={getCartDetails} customer={customer} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity} addToCart={addToCart} />
            </div>


            <div className="mx-auto max-w-screen-2xl  px-4 lg:px-0">
                <div className="relative h-[200px] lg:h-[400px] rounded-lg bg-cover bg-center bg-no-repeat shadow-lg" style={{ backgroundImage: "url(https://static.vecteezy.com/system/resources/thumbnails/001/338/250/small_2x/black-friday-sale-banner-free-vector.jpg)" }}>
                    <div className="px-4 pt-8 pb-10">
                        <div className="absolute inset-x-0 -bottom-10 mx-auto w-28 lg:w-36 rounded-full border-8 border-white shadow-lg">
                            <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                            <img className="mx-auto h-auto w-full rounded-full" src="https://img.freepik.com/free-vector/gradient-abstract-logo-flat-design_23-2148203400.jpg?uid=R135031770&ga=GA1.1.366406594.1732686458&semt=ais_hybrid" alt="" />
                        </div>
                    </div>
                </div>



                {/* ================== categories =================== */}

                <div className='w-full mt-20 '>
                    <Categories />
                </div>
                {
                    groupDataByCategory()?.length ? <>
                        {
                            groupDataByCategory()?.map((item: any, i: number) =>
                                <div key={i} className='w-full '>
                                    <Products categoryName={item?.categoryName} products={item?.products} addToCart={addToCart} />
                                </div>)
                        }
                    </> : <></>
                }



            </div>

        </div>
    )
}
