import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const BlogCard = ({ post }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
            <div className="relative w-full aspect-video">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={24}
                            height={24}
                            className="rounded-full"
                        />
                        <span className="text-[12px] font-normal text-[#111]">
                            {post.author.name}
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Image
                            src="/assets/Marketing/Blog/calendar.svg"
                            alt="date"
                            width={20}
                            height={20}
                        />
                        <span className="text-[12px] font-normal text-[#6A6A6A]">
                            {post.publishedAt}
                        </span>
                    </div>
                </div>

                <h3 className="font-bold text-lg text-[#111] mt-4 leading-snug">
                    {post.title}
                </h3>

                <p className="text-[14px] leading-relaxed text-[#313131] mt-2 line-clamp-3">
                    {post.excerpt}
                </p>

                <Link href={`/blog/${post.slug}`} className="inline-block mt-4">
                    <span className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2.5">
                        <span className="text-[10px] font-bold text-white">Read More</span>
                        <FaArrowRight className="h-2.5 w-2.5 text-white" />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;