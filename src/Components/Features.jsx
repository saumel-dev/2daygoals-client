import Image from 'next/image';
import React from 'react';

const Features = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div>
                    <h1 className='text-[50px] font-helvetica w-150'>Save time by having everything in one platform</h1>
                    <p className='text-[18px] font-medium'>Our product simplifies tasks, organizes workloads, <br /> and boosts collaboration.</p>
                </div>
            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center my-12.5'>
                <div className='bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8/1] rounded-2xl'>
                    <div className='relative'>
                        <div className='p-10 rounded-xl'>
                            <Image
                                src={"/assets/fe3.svg"}
                                width={"500"}
                                height={"600"}
                                alt='feature'
                                // className='w-100'
                            >
                            </Image>
                        </div>
                        <div className='w-70 absolute -bottom-10 left-58'>
                            <Image
                                src={"/assets/fe4.svg"}
                                width={"0"}
                                height={"0"}
                                alt='feature'
                                className='w-100'
                            >
                            </Image>
                        </div>
                    </div>
                    <div className='mt-5 mb-5 pl-10'>
                        <p className='font-helvetica text-[28px] font-medium'>Manage Your Task</p>
                        <p className=''>Efficiently organize and oversee your tasks for <br /> enhanced productivity and goal achievement.</p>
                    </div>
                </div>
                <div className='bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8/1] rounded-2xl'>
                    <div className='relative'>
                        <div className='p-10 rounded-xl'>
                            <Image
                                src={"/assets/fe3.svg"}
                                width={"500"}
                                height={"600"}
                                alt='feature'
                                // className='w-100'
                            >
                            </Image>
                        </div>
                        <div className='w-70 absolute -bottom-10 left-58'>
                            <Image
                                src={"/assets/fe4.svg"}
                                width={"0"}
                                height={"0"}
                                alt='feature'
                                className='w-100'
                            >
                            </Image>
                        </div>
                    </div>
                    <div className='mt-5 mb-5 pl-10'>
                        <p className='font-helvetica text-[28px] font-medium'>Manage Your Task</p>
                        <p className=''>Efficiently organize and oversee your tasks for <br /> enhanced productivity and goal achievement.</p>
                    </div>
                </div>
                <div className='bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8/1] rounded-2xl'>
                    <div className='relative'>
                        <div className='p-10 rounded-xl'>
                            <Image
                                src={"/assets/fe3.svg"}
                                width={"500"}
                                height={"600"}
                                alt='feature'
                                // className='w-100'
                            >
                            </Image>
                        </div>
                        <div className='w-70 absolute -bottom-10 left-58'>
                            <Image
                                src={"/assets/fe4.svg"}
                                width={"0"}
                                height={"0"}
                                alt='feature'
                                className='w-100'
                            >
                            </Image>
                        </div>
                    </div>
                    <div className='mt-5 mb-5 pl-10'>
                        <p className='font-helvetica text-[28px] font-medium'>Manage Your Task</p>
                        <p className=''>Efficiently organize and oversee your tasks for <br /> enhanced productivity and goal achievement.</p>
                    </div>
                </div>
                <div className='bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8/1] rounded-2xl'>
                    <div className='relative'>
                        <div className='p-10 rounded-xl'>
                            <Image
                                src={"/assets/fe3.svg"}
                                width={"500"}
                                height={"600"}
                                alt='feature'
                                // className='w-100'
                            >
                            </Image>
                        </div>
                        <div className='w-70 absolute -bottom-10 left-58'>
                            <Image
                                src={"/assets/fe4.svg"}
                                width={"0"}
                                height={"0"}
                                alt='feature'
                                className='w-100'
                            >
                            </Image>
                        </div>
                    </div>
                    <div className='mt-5 mb-5 pl-10'>
                        <p className='font-helvetica text-[28px] font-medium'>Manage Your Task</p>
                        <p className=''>Efficiently organize and oversee your tasks for <br /> enhanced productivity and goal achievement.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;