import Image from "next/image";

const Work = () => {
    return (
        <div className="w-5/6 space-y-8 rounded-xl border-2 border-lightBlue p-4 pb-12 dark:border-lightYellow lg:w-3/4">
            <div className="block text-center text-xl font-semibold text-lightBlue dark:text-lightYellow lg:pl-5 lg:text-left lg:text-3xl">
                Work Experience
            </div>
            <div className="grid grid-flow-row grid-cols-9 gap-x-10 gap-y-8">
                <div className="relative col-span-1 col-start-2 row-span-2 h-10 w-10 justify-self-center lg:h-14 lg:w-14">
                    <Image src="/images/google-logo.png" alt="Google Logo" layout="fill" />
                </div>
                <div className="col-span-6 row-span-2 space-y-1 text-sm lg:text-lg">
                    <div>Software Engineer @ Google</div>
                    <div className="text-gray-500">Dec. 2024 - Present</div>
                </div>
                <div className="relative col-span-1 col-start-2 row-span-2 h-10 w-10 justify-self-center lg:h-14 lg:w-14">
                    <svg
                        viewBox="0 0 512 512"
                        id="icons"
                        xmlns="http://www.w3.org/2000/svg"
                        className="dark:fill-white"
                    >
                        <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                    </svg>
                </div>
                <div className="col-span-6 row-span-2 space-y-1 text-sm lg:text-lg">
                    <div>Backend Software Engineer @ TikTok</div>
                    <div className="text-gray-500">Mar. 2024 - Dec. 2024</div>
                </div>
                <div className="relative col-span-1 col-start-2 row-span-2 h-10 w-10 justify-self-center lg:h-14 lg:w-14">
                    <Image src="/images/paycom-logo.png" alt="Paycom Logo" layout="fill" />
                </div>
                <div className="col-span-6 row-span-2 space-y-1 text-sm lg:text-lg">
                    <div>Software Development Intern @ Paycom</div>
                    <div className="text-gray-500">May 2023 - Aug. 2023</div>
                </div>
                <div className="relative col-span-1 col-start-2 row-span-2 h-10 w-10 justify-self-center lg:h-14 lg:w-14">
                    <Image src="/images/microsoft-logo.png" alt="Microsoft Logo" layout="fill" />
                </div>
                <div className="col-span-6 row-span-2 space-y-1 text-sm lg:text-lg">
                    <div>Software Engineer Intern @ Microsoft</div>
                    <div className="text-gray-500">July 2020 - July 2021</div>
                </div>
            </div>
        </div>
    );
};

export default Work;
