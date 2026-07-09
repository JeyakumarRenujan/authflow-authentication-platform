import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FiMenu } from "react-icons/fi";

import Sidebar from "../components/Sidebar";


function DashboardLayout({ children }) {
    const [openSidebar, setOpenSidebar] = useState(false);


    return (
        <div
            className="
                relative
                min-h-screen
                flex
                overflow-hidden
                bg-gradient-to-br
                from-[#CCFBF1]
                via-[#EEF2FF]
                to-[#F3E8FF]
            "
        >

            {/* Background Decorations */}

            <motion.div
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 8,
                }}
                className="
                    absolute
                    top-20
                    left-40
                    w-72
                    h-72
                    bg-[#14B8A6]/25
                    rounded-full
                    blur-3xl
                "
            />

            <motion.div
                animate={{
                    y: [0, 40, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                }}
                className="
                    absolute
                    bottom-10
                    right-20
                    w-96
                    h-96
                    bg-[#A855F7]/25
                    rounded-full
                    blur-3xl
                "
            />



            {/* Mobile Menu Button */}

            <button
                onClick={() => setOpenSidebar(true)}
                className="
                    md:hidden
                    fixed
                    top-5
                    right-5
                    z-50
                    p-3
                    rounded-2xl
                    bg-white/70
                    backdrop-blur-xl
                    shadow-lg
                    text-2xl
                    text-[#14B8A6]
                    hover:scale-105
                    transition
                "
            >
                <FiMenu />
            </button>



            {/* Desktop Sidebar */}

            <div
                className="
                    hidden
                    md:block
                    relative
                    z-10
                "
            >
                <Sidebar />
            </div>



            {/* Mobile Sidebar */}

            <AnimatePresence>
                {openSidebar && (
                    <>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            onClick={() => setOpenSidebar(false)}
                            className="
                                fixed
                                inset-0
                                bg-black/30
                                backdrop-blur-sm
                                z-40
                                md:hidden
                            "
                        />


                        <motion.div
                            initial={{
                                x: -300,
                            }}
                            animate={{
                                x: 0,
                            }}
                            exit={{
                                x: -300,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="
                                fixed
                                left-0
                                top-0
                                z-50
                                md:hidden
                            "
                        >
                            <Sidebar />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>



            {/* Page Content */}

            <main
                className="
                    relative
                    z-10
                    flex-1
                    p-6
                    md:p-8
                    overflow-y-auto
                "
            >
                {children}
            </main>

        </div>
    );
}


export default DashboardLayout;