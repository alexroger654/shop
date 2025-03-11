'use client'

import React from 'react'
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
export default function page() {


  const router = useRouter()

  useLayoutEffect(() => {
    router.push('/shop/new-delhi-shop')
  }, [])


  return (
    <div>page</div>
  )
}
