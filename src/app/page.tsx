'use client'

import React from 'react'
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
export default function Page() {


  const router = useRouter()

  useLayoutEffect(() => {
    router.push('/shop/new-delhi-shop')
  }, [])


  return (
    <div>page</div>
  )
}
