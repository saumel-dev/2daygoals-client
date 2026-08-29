import React from 'react';

const Pricing_Section = () => {
    return (
        <section className=''>
            <div className="relative bg-[url('/assets/pricing_section_bg_png.png')] bg-cover bg-no-repeat bg-center overflow-hidden">
                <div className='mt-25 mx-5 md:mx-25'>
                    <h2 className='text-white font-helvetica text-3xl md:w-150'>Check Out Our Pricing Plans for Both Monthly and Yearly Subscriptions</h2>
                    <p className='mt-2.5 md:w-165 text-[#B7B7B7]'>We understand that as your business grows, your needs evolve. Thats why our flexible plans are designed to adapt and scale seamlessly alongside your business</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center'>
                    <div className="relative rounded-2xl p-6 bg-[url('/assets/pricing_bg.png')] bg-cover overflow-hidden mt-25 w-96">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi odit dignissimos, officiis facere amet ipsa asperiores provident, assumenda fuga suscipit voluptatem quod adipisci dolore.</p>
                    </div>
                    <div className="relative rounded-2xl p-6 bg-[url('/assets/pricing_bg.png')] bg-cover overflow-hidden mt-25 w-96">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi odit dignissimos, officiis facere amet ipsa asperiores provident, assumenda fuga suscipit voluptatem quod adipisci dolore.</p>
                    </div>
                    <div className="relative rounded-2xl p-6 bg-[url('/assets/pricing_bg.png')] bg-cover overflow-hidden mt-25 w-96">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi odit dignissimos, officiis facere amet ipsa asperiores provident, assumenda fuga suscipit voluptatem quod adipisci dolore.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing_Section;