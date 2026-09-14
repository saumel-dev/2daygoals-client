import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedBlogCard = ({ post }) => {
    return (
        <div className="relative w-full aspect-video md:aspect-21/9 rounded-2xl overflow-hidden">
            <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
            />

            {/* Dark gradient for text legibility over the photo */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={24}
                            height={24}
                            className="rounded-full"
                        />
                        <span className="text-[12px] font-normal text-white">
                            {post.author.name}
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Image
                            src="/assets/Marketing/Blog/calendar.svg"
                            alt="date"
                            width={14}
                            height={14}
                            className="invert"
                        />
                        <span className="text-[12px] font-normal text-white">
                            {post.publishedAt}
                        </span>
                    </div>
                </div>

                <div>
                    <h2 className="font-helvetica text-[32px] md:text-[60px] font-bolder leading-[1.1] text-white max-w-3xl">
                        {post.title}
                    </h2>

                    <Link href={`/blog/${post.slug}`} className="inline-block mt-6">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/70 px-4 py-2">
                            <span className="text-xs font-bold text-white">Read More</span>
                            <FaArrowRight className="h-2.5 w-2.5 text-white" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlogCard;