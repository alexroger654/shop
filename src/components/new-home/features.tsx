"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Grow your Followers",
        description:
            "Use DM automation to expand your organic brand reach on Instagram and get more followers from paid Ads. Create instant gratification for fans leading to brand loyalty",
        content: (
            // <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            //     Collaborative Editing
            // </div>
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://img.freepik.com/free-psd/facebook-logo-3d-social-media-icon-isolated_47987-11965.jpg?t=st=1738241271~exp=1738244871~hmac=4ca23569db52e8350012f9c840f198f238cdee26862e5ad6a4a03f6fdd40958b&w=740"
                    width={1300}
                    height={1300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Boost Engagement",
        description:
            "Increase your mentions, comments, and reactions by running messaging-powered campaigns, like giveaways, promotions, and contests. Make it  easy for customers to start conversations with you and to receive relevant, personalized responses..",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://cdn.dribbble.com/users/6079/screenshots/12254763/media/e288deb23c583e8eb0283efe6ad946da.png?resize=1000x750&vertical=center"
                    width={1300}
                    height={1300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Version control",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://img.freepik.com/free-vector/modern-whatsapp-logo_1035-8973.jpg?t=st=1738254809~exp=1738258409~hmac=dc64f304fe8362b674928c36a5dd84677c655adffcf44d6adcc707019ddee6a5&w=740"
                    width={1300}
                    height={1300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Running out of content",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
    },
];
export function Features() {
    return (
        <div className="p-10">
            <StickyScroll content={content} />
        </div>
    );
}
