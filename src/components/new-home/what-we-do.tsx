"use client";


import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Tabs } from "./Tabs";


export function WhatWeDo() {
    const tabs = [
        {
            title: "DM Chatbots",
            value: "DM Chatbots",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>DM Chatbots</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Mentions Reaction",
            value: "Mentions Reaction",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>
                        Story Mentions Reaction</p>
                    {/* <p className="text-lg font-semibold mb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae magni rem praesentium nisi corrupti? Voluptates consectetur eligendi expedita assumenda sint?</p> */}
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Comments Automation",
            value: "Comments Automation",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Comments Automation</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Quick Reply",
            value: "Quick Reply",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Quick Reply</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Follow Check",
            value: "Follow Check",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Follow Check</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Connect Messengers",
            value: "Connect Messengers",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Connect Messengers</p>
                    <DummyContent />
                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[50rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <div className="max-w-2xl mx-auto text-center ">
                <TextGenerateEffect words={"Grow your Business with Instagram DM Automation"} className='text-7xl' />

            </div>
            <div className="max-w-7xl mx-auto h-full mt-10">
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}

const DummyContent = () => {
    return (
        <Image
            src="https://cdn.dribbble.com/users/6079/screenshots/3735928/media/948d51a3eca1373b1ab513587c16aa44.png?resize=800x600&vertical=center"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[50%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};
