"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { Cover } from "../ui/cover";
import { GradientButton } from "../ui/GradientButton";

export function Hero() {
    return (
        <section className="pt-20">
            <LampContainer>
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text py-4 text-center  font-medium tracking-tight text-transparent "
                >
                    <h1 className="text-4xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Generate more leads with <br /> <Cover>Instagram DM</Cover>
                    </h1>
                    <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                        Spotlight effect is a great way to draw attention to a specific part
                        of the page. Here, we are drawing the attention towards the text
                        section of the page. I don&apos;t know why but I&apos;m running out of
                        copy.
                    </p>

                    <div className="mt-8 max-w-52 mx-auto">
                        <GradientButton>Get Started For Free</GradientButton>
                    </div>


                </motion.div>
            </LampContainer>
        </section>
    );
}
