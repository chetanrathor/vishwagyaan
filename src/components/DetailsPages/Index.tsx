import { MutualFundImag } from "@/assets";
import { StaticImageData } from "next/image";
import React from "react";
import Image from 'next/image'
interface BlogDetailsProps {
    imageUrl: string | StaticImageData;
    title: string;
    author: string;
    date: string;
    content: string;
}

const BlogDetail: React.FC<BlogDetailsProps> = ({
    imageUrl,
    title,
    author,
    date,
    content,
}) => {
    return (
        <div className="min-h-screen bg-gray-100 mt-10">
            {/* Blog Image */}
            <div className="relative w-full">
                <Image
                    src={imageUrl}
                    alt={title}
                    className="w-full h-[400px] object-cover md:h-[500px] lg:h-[600px]"
                />
            </div>

            {/* Blog Details */}
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
                <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
                <div className="flex items-center justify-between mt-2 text-gray-500">
                    <p className="text-sm">
                        By <span className="font-medium">{author}</span>
                    </p>
                    <p className="text-sm">{date}</p>
                </div>
                <hr className="my-4 border-gray-300" />
                <div className="text-gray-700 text-lg leading-relaxed">{content}</div>
            </div>
        </div>
    );
};

export default BlogDetail



