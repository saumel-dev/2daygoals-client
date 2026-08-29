import React from 'react';
import Image from 'next/image';

// One object per card. If a value differs between cards (icon, price, features,
// button labels/colors), it lives here. If it's identical across all three
// (fonts, sizes, layout), it lives in the JSX below instead — that split is
// what keeps the markup from being copy-pasted three times.
const plans = [
    {
        id: 'free',
        icon: '/assets/icons/fire.svg',
        title: 'Free Forever',
        subtitle: 'No minimum commitment pause or cancel anytime',
        price: '0$',
        period: '/Lifetime',
        features: ['WithAds', '100 Project', 'Unlimited Seat', 'Management View', 'Calendar View', 'Chat View'],
        buttons: [
            { label: "Register - it's Free", variant: 'primary' },
        ],
    },
    {
        id: 'monthly',
        icon: '/assets/icons/arrow.svg',
        title: 'Monthly',
        highlighted: true, // taller than the other two, but only from md: up
        subtitle: 'No minimum commitment pause or cancel anytime',
        price: '19$',
        period: '/month',
        features: ['Without Ads', 'Unlimited Project', 'Unlimited Seat', 'Management View', 'Calendar View', 'Chat View'],
        buttons: [
            { label: 'Get Started', variant: 'primary' },
            { label: 'Contact to sales', variant: 'glass' },
        ],
    },
    {
        id: 'yearly',
        icon: '/assets/icons/lock.svg',
        title: 'Yearly',
        subtitle: 'No minimum commitment pause or cancel anytime',
        price: '199$',
        period: '/yearly',
        features: ['Without Ads', 'Unlimited Project', 'Unlimited Seat', 'Management View', 'Calendar View', 'Chat View'],
        buttons: [
            { label: 'Get Started', variant: 'accent' },
        ],
    },
];

// The two dark-UI button looks from the Figma file, both built the same way:
// an outer box IS the gradient (that's its entire background), and an inner
// box sized 1px smaller on every side sits on top with the real fill color —
// so only a 1px sliver of the gradient shows through as a "border". A plain
// CSS border-color can never be a gradient, so this two-layer stack is the
// standard workaround. 'accent' (Yearly) skips this — it's a flat fill, no
// gradient ring was specified for it.
const buttonFillClass = {
    primary: 'bg-[#18191E]',
    glass: 'bg-transparent',
};

const Pricing_Section = () => {
    return (
        <section>
            <div className="relative bg-[url('/assets/pricing_section_bg_png.png')] bg-cover bg-no-repeat bg-center overflow-hidden">

                {/* Section heading */}
                <div className="mt-24 mx-5 md:mx-24">
                    <h2 className="text-white font-helvetica text-3xl md:w-[37.5rem]">
                        Check Out Our Pricing Plans for Both Monthly and Yearly Subscriptions
                    </h2>
                    <p className="mt-2.5 md:w-[41.25rem] font-helvetica text-[10px] text-[#B7B7B7]">
                        We understand that as your business grows, your needs evolve. Thats why our flexible plans are designed to adapt and scale seamlessly alongside your business
                    </p>
                </div>

                {/* Cards */}
                <div className="flex justify-center items-end gap-10 flex-wrap mt-24 pb-24">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative rounded-2xl bg-[url('/assets/pricing_bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden w-96 p-8 ${plan.highlighted ? 'md:pt-16' : ''}`}
                        >
                            {/* icon */}
                            <Image src={plan.icon} alt={plan.title} width={40} height={40} />

                            {/* title */}
                            <h3 className="mt-6 font-helvetica text-2xl text-white">{plan.title}</h3>

                            {/* subtitle */}
                            <p className="mt-2 font-helvetica text-[10px] text-[#B7B7B7]">{plan.subtitle}</p>

                            {/* price */}
                            <div className="mt-4 flex items-baseline gap-1.5">
                                <span className="font-helvetica text-[28px] text-[#FFFFFF]">{plan.price}</span>
                                <span className="font-helvetica text-[10px] text-[#9FE770]">{plan.period}</span>
                            </div>

                            {/* buttons — same width/height on every card; only the fill style changes */}
                            <div className="mt-5 flex flex-col gap-2.5">
                                {plan.buttons.map((btn) =>
                                    btn.variant === 'accent' ? (
                                        // Flat fill, no gradient ring — Yearly's plain #163300 button
                                        <button
                                            key={btn.label}
                                            className="w-64 h-11 rounded-lg px-4 flex items-center justify-between bg-[#163300] text-white text-sm font-helvetica"
                                        >
                                            {btn.label}
                                            <Image src="/assets/icons/Arrow_Icon.svg" alt="" width={16} height={16} />
                                        </button>
                                    ) : (
                                        // Gradient-border wrapper: outer = the gradient, inner = the real fill
                                        <button
                                            key={btn.label}
                                            className="w-64 h-11 rounded-lg p-px bg-gradient-to-b from-[#DEDEDE]/[0.32] to-[#787878]/[0.12]"
                                        >
                                            <span
                                                className={`${buttonFillClass[btn.variant]} flex items-center justify-between h-full rounded-[7px] px-4 text-white text-sm font-helvetica`}
                                            >
                                                {btn.label}
                                                <Image src="/assets/icons/Arrow_Icon.svg" alt="" width={16} height={16} />
                                            </span>
                                        </button>
                                    )
                                )}
                            </div>

                            {/* feature list */}
                            <div className="mt-6">
                                <p className="font-helvetica text-sm font-semibold text-white">What's Include</p>
                                <ul className="mt-3 flex flex-col gap-2.5">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2.5">
                                            <Image src="/assets/icons/Verify_Icon.svg" alt="" width={16} height={16} />
                                            <span className="font-helvetica text-sm text-[#B7B7B7]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Pricing_Section;