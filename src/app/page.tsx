import BlogCard from '@/components/BlogCard';
import { GetStaticProps } from 'next';
import { StaticImageData } from 'next/image';


type Blog = {
  id: number
  heading: string;
  imageUrl: StaticImageData | string,
  description: string;
};

export default function Home() {
  const blogs: Blog[] = [
    {
      description: '',
      heading: '',
      id: 1,
      imageUrl: '',
    },

  ]
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Latest Blogs</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} description={blog.description} heading={blog.heading} imageUrl={blog.imageUrl} />
        ))}
      </div>
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const blogs: Blog[] = [
//     {
//       description: '',
//       heading: '',
//       id: 1,
//       imageUrl: '',
//     },

//   ]
//   return { props: { blogs } };
// };
