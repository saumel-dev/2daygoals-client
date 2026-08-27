import Link from "next/link";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

const Hero = () => {
    return (
        <section className="relative">
            {/* Headline + subtext (left) and CTA (right) */}
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 pt-24 sm:pt-32 md:flex-row md:items-center">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-5xl md:text-[3.25rem]">
                        Take control of your day in minutes
                    </h1>
                    <p className="mt-4 max-w-lg text-base text-gray-600 sm:text-lg">
                        Get work done the fastest way possible - manage tasks, write
                        notes, organize projects, and share whatever you want with this
                        powerful productivity tool!
                    </p>
                </div>

                {/* Two-part CTA: black pill with an inset green circular arrow badge */}
                <Link
                    href="/register"
                    className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-black p-1 pr-5 shadow-lg transition-transform hover:scale-[1.03]"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-[#CFFF6B] to-[#3DBE5B]">
                        <LuArrowUpRight className="h-4 w-4 text-black" />
                    </span>
                    <span className="text-sm font-medium text-white">
                        Register - its Free
                    </span>
                </Link>
            </div>

            {/* Product preview: Toolbar.svg stacked on Homepage Final.svg,
                wrapped in a gradient border (#DEE9EE -> #F2F6F8, top to bottom).
                The border colors sit close to the page background on purpose
                (per your Figma), so a shadow is added to keep the card
                readable as a distinct surface even where the border blends in. */}
            <div className="relative z-10 mx-auto mb-15 mt-14 max-w-5xl px-4 sm:mt-20">
                <div className="rounded-2xl bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8] md:p-7.5 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.18)]">
                    <div className="overflow-hidden rounded-2xl bg-white">
                        <Image
                            src="/assets/Toolbar.svg"
                            alt=""
                            width={1440}
                            height={48}
                            className="w-full"
                        />
                        <Image
                            src="/assets/Homepage_Final.svg"
                            alt="2daygoals product preview"
                            width={1440}
                            height={820}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;