'use client'
import { use } from 'react';
import Image from 'next/image';
import { blogs } from '@/lib/data/blogs';
import TableOfContents from '@/Components/Marketing_Website/TableOfContents';
import BlogCard from '@/Components/Marketing_Website/BlogCard';

const BlogView_page = ({ params }) => {
    const { slug } = use(params);
    const post = blogs.find((b) => b.slug === slug);
    const recent = blogs.filter((b) => b.slug !== slug).slice(0, 3);

    if (!post) return null; // TODO: real 404 handling once backend exists

    return (
        <section className="mt-10 md:mt-16">
            <div className="container mx-auto px-5 mb-25">
                <h1 className="font-helvetica text-[32px] md:text-[46px] font-bolder leading-[1.15] text-[#111] max-w-4xl">
                    {post.title}
                </h1>

                <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                        <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={28}
                            height={28}
                            className="rounded-full"
                        />
                        <span className="text-sm text-[#111]">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Image
                            src="/assets/Marketing/Blog/calendar.svg"
                            alt="date"
                            width={14}
                            height={14}
                        />
                        <span className="text-sm text-[#6A6A6A]">{post.publishedAt}</span>
                    </div>
                </div>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mt-8">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-10 mt-10">
                    <aside className="md:w-64 shrink-0">
                        <div className="sticky top-24 flex flex-col gap-6">
                            <div className="bg-black rounded-2xl p-5">
                                <p className="text-white font-semibold leading-snug">
                                    Download and try Cluely for free today
                                </p>
                                <button
                                    type="button"
                                    className="w-full bg-white text-black text-sm font-medium rounded-lg py-2.5 mt-4"
                                >
                                    Get Started
                                </button>
                            </div>

                            <TableOfContents sections={post.content} />
                        </div>
                    </aside>

                    <div className="flex-1 max-w-2xl">
                        {post.content.map((section, index) => (
                            <div key={section.id} id={section.id} className="scroll-mt-24 mb-8">
                                {index > 0 && (
                                    <h2 className="font-helvetica text-xl font-bolder text-[#111] mb-3">
                                        {section.heading}
                                    </h2>
                                )}
                                <p className="text-[15px] leading-relaxed text-[#313131]">
                                    {section.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="font-helvetica text-[50px] font-bolder leading-[1.1] text-[#111]">
                        Recent Blogs
                    </h2>
                    <p className="text-[18px] font-normal text-[#313131] mt-3 max-w-142.5">
                        Learn about the todaygoals.com products and features most loved by our customers
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {recent.map((p) => (
                            <BlogCard key={p.slug} post={p} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogView_page;