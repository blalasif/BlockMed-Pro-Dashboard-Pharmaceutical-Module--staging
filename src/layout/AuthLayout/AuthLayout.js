'use client'

import Image from "next/image";

const AuthLayout = ({ children }) => {

    return (
        <div className='flex flex-col gap-10 xl:gap-0 xl:justify-between w-full xl:h-screen p-3.5 xl:overflow-hidden xl:p-5 xl:flex-row'>
            <div className="xl:w-[45%] h-[12rem] md:h-[18rem] xl:h-full">
                <Image src="/assets/images/auth-bg.svg" className="rounded-[34px]" alt="Auth Layout" priority={true} width={1000} height={1000} style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%"
                }} />
            </div>
            <div className="w-full xl:w-[55%] flex justify-center h-full xl:overflow-auto">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;
