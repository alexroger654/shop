"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ProfileDropDown = () => {
    const [state, setState] = useState(false);
    const profileRef = useRef<any>();

    const navigation = [
        { title: "Dashboard", path: "/analytics" },
        { title: "Earn Points", path: "/auto_like" },
        { title: "Profile", path: "/profile" },
    ];




    // =============== HOOKS ==================================
    const { data: session } = useSession();

    useEffect(() => {
        const handleDropDown = (e: any) => {
            //@ts-ignore
            if (!profileRef.current.contains(e.target)) setState(false);
        };
        document.addEventListener("click", handleDropDown);
    }, []);

    return (
        <div className="relative border-t lg:border-none">
            <div className="flex items-center justify-center gap-4">
                <Link href='/analytics' className="rounded-lg text-sm  lg:text-gray-800 hover:text-primary font-bold">
                    Dashboard
                </Link>
                <button
                    ref={profileRef}
                    className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
                    onClick={() => setState(!state)}
                >
                    <div className="w-10 h-10 flex items-center justify-center uppercase font-extrabold rounded-full bg-gray-200">
                        <p>{session?.user?.email?.slice(0, 2)}</p>
                    </div>
                </button>
            </div>
            <ul
                className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:z-50 lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? "" : "lg:hidden"
                    }`}
            >
                {navigation.map((item, idx) => (
                    <li key={idx}>
                        <a
                            className="block text-gray-600 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3"
                            href={item.path}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
                <button onClick={() => signOut()} className="block w-full text-justify text-gray-600 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3">
                    Logout
                </button>
            </ul>
        </div>
    );
};



export default ProfileDropDown