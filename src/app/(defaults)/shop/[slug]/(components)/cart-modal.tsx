'use client'

import { useState } from 'react'
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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LabelInputContainer from '@/components/LabelInputContainer'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Minus, Plus } from 'lucide-react'


export default function CartModal({ customer, removeFromCart, addToCart, getCartDetails, updateCartQuantity }: any) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        address: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };




    async function makeOrder() {
        const orderData = {
            userId: "",
            userName: "",
            customerDetails: {
                name: "",
                email: "",
                phone: "",
                city: "",
                state: "",
                address: "",
                profileId: "",
            },
            products: {
                name: "",
                description: "",
                categoryName: "",
                imageUrl: "",
                price: 0,
                tax: 0,
                quantity: 0
            }
        }
    }














    // ============================= render
    return (


        <SheetContent side={"bottom"} className='relative z-[8888888888888888888] w-full h-screen'>
            <ScrollArea className=" lg:px-20 xl:px-32 h-screen w-full ">
                <div className=' grid sm:px-10 grid-cols-1 lg:grid-cols-2'>


                    <div className="px-4 pt-8">
                        <p className="text-xl font-medium">Order Summary</p>
                        <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                        <ScrollArea className="mt-8 h-[48vh] space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                            {getCartDetails()?.cartItems?.map((item: any, i: number) => (
                                <div key={i} className="flex flex-col rounded-lg bg-white sm:flex-row items-center">
                                    <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item?.product?.imageUrl[0]} alt="" />
                                    <div className="flex w-full flex-col px-4 py-4">
                                        <span className="font-semibold">{item?.product?.name}</span>
                                        <span className="float-right text-gray-400 line-through"> ₹{item?.product?.originalPrice}</span>
                                        <p className="text-lg font-bold"> ₹{item?.product?.offerPrice}</p>
                                    </div>
                                    <div>
                                        <div className='border border-border rounded-full flex items-center justify-center gap-4'>
                                            <button onClick={() => updateCartQuantity(item?.product?._id, item?.quantity + 1)} className='text-black text-xs rounded-xl p-1'>
                                                <Plus />
                                            </button>
                                            <p>{item?.quantity}</p>
                                            <button onClick={() => updateCartQuantity(item?.product?._id, item?.quantity - 1)} className='text-black text-sm rounded-xl p-1'>
                                                <Minus />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ScrollArea>

                        <p className="mt-8 text-lg font-medium">Shipping Methods</p>
                        <form className="mt-5 grid gap-6">
                            <div className="relative">
                                <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
                                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
                                    <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                                    <div className="ml-5">
                                        <span className="mt-2 font-semibold">Fedex Delivery</span>
                                        <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                                    </div>
                                </label>
                            </div>
                            <div className="relative">
                                <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
                                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
                                    <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
                                    <div className="ml-5">
                                        <span className="mt-2 font-semibold">Fedex Delivery</span>
                                        <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                        <p className="text-xl font-medium">Payment Details</p>
                        <p className="text-gray-400">Complete your order by providing your payment details.</p>
                        <div className="">
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Tyler"
                                    className='bg-white'
                                    type="text"
                                    onChange={handleInputChange}
                                />
                            </LabelInputContainer>

                            <LabelInputContainer className="mt-4">
                                <Label>Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="projectmayhem@fc.com"
                                    className='bg-white'
                                    type="email"
                                    onChange={handleInputChange}
                                />
                            </LabelInputContainer>

                            <LabelInputContainer className="mt-4">
                                <Label>Phone</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    placeholder="01**********"
                                    className='bg-white'
                                    type="text"
                                    onChange={handleInputChange}
                                />
                            </LabelInputContainer>

                            <LabelInputContainer className="mt-4">
                                <Label>City</Label>
                                <Input
                                    id="city"
                                    name="city"
                                    placeholder="Dhaka"
                                    className='bg-white'
                                    type="text"
                                    onChange={handleInputChange}
                                />
                            </LabelInputContainer>

                            <LabelInputContainer className="mt-4">
                                <Label>State</Label>
                                <Input
                                    id="state"
                                    name="state"
                                    placeholder="Dhaka"
                                    className='bg-white'
                                    type="text"
                                    onChange={handleInputChange}
                                />
                            </LabelInputContainer>

                            <LabelInputContainer className="mt-4">
                                <Label>Address</Label>
                                <Input
                                    id="address"
                                    name="address"
                                    placeholder="Road no, 1, house no. 120"
                                    className='bg-white'
                                    type="text"
                                    onChange={handleInputChange}
                                />
                            </LabelInputContainer>


                            {/* <!-- Total --> */}
                            <div className="mt-6 border-t border-b py-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Subtotal</p>
                                    <p className="font-semibold text-gray-900">$399.00</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Shipping</p>
                                    <p className="font-semibold text-gray-900">$8.00</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Total</p>
                                <p className="text-2xl font-semibold text-gray-900">$408.00</p>
                            </div>
                        </div>
                        <SheetClose asChild>
                            <button className="mt-4 mb-8 w-full rounded-md gradient-bg px-6 py-3 font-medium text-white">Place Order</button>
                        </SheetClose>
                    </div>
                </div>
            </ScrollArea>
        </SheetContent>

    )
}
