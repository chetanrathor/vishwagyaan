
"use client"
import { useEffect, useState } from "react";
import BlogRowSkeleton from "./BlogRowSkeleton";
import BlogRow from "./BlogRow";

const Blogs: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<
    { id: number; image: string; title: string; description: string }[]
  >([]);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setBlogs([
        {
          id: 1,
          image: "https://via.placeholder.com/300x200",
          title: "Dynamic Blog Title 1 kndsam dkjasndk jsbdkasd kjbkjasbd akjbkjasbddblj  kdjhaskdj khdjasd klhdjashd lhlkdnas lkhlkand lkhaldka lkhldkhad lkahdlj",
          description: "This is a short description of the blog post.",
        },
        {
          id: 1,
          image: "https://via.placeholder.com/300x200",
          title: "Dynamic Blog Title 1 kndsam dkjasndk jsbdkasd kjbkjasbd akjbkjasbddblj  kdjhaskdj khdjasd klhdjashd lhlkdnas lkhlkand lkhaldka lkhldkhad lkahdlj",
          description: "This is a short description of the blog post.",
        },
        {
          id: 1,
          image: "https://via.placeholder.com/300x200",
          title: "Dynamic Blog Title 1 kndsam dkjasndk jsbdkasd kjbkjasbd akjbkjasbddblj  kdjhaskdj khdjasd klhdjashd lhlkdnas lkhlkand lkhaldka lkhldkhad lkahdlj",
          description: "This is a short description of the blog post.",
        },
        {
          id: 1,
          image: "https://via.placeholder.com/300x200",
          title: "Dynamic Blog Title 1 kndsam dkjasndk jsbdkasd kjbkjasbd akjbkjasbddblj  kdjhaskdj khdjasd klhdjashd lhlkdnas lkhlkand lkhaldka lkhldkhad lkahdlj",
          description: "This is a short description of the blog post.",
        },
        {
          id: 1,
          image: "https://via.placeholder.com/300x200",
          title: "Dynamic Blog Title 1 kndsam dkjasndk jsbdkasd kjbkjasbd akjbkjasbddblj  kdjhaskdj khdjasd klhdjashd lhlkdnas lkhlkand lkhaldka lkhldkhad lkahdlj",
          description: "This is a short description of the blog post.",
        },
        {
          id: 1,
          image: "https://via.placeholder.com/300x200",
          title: "Dynamic Blog Title 1 kndsam dkjasndk jsbdkasd kjbkjasbd akjbkjasbddblj  kdjhaskdj khdjasd klhdjashd lhlkdnas lkhlkand lkhaldka lkhldkhad lkahdlj",
          description: "This is a short description of the blog post.",
        },
        {
          id: 1,
          image: "https://via.placeholder.com/300x200",
          title: "Dynamic Blog Title 1 kndsam dkjasndk jsbdkasd kjbkjasbd akjbkjasbddblj  kdjhaskdj khdjasd klhdjashd lhlkdnas lkhlkand lkhaldka lkhldkhad lkahdlj",
          description: "This is a short description of the blog post.",
        },
        {
          id: 1,
          image: "https://via.placeholder.com/300x200",
          title: "Dynamic Blog Title 1 kndsam dkjasndk jsbdkasd kjbkjasbd akjbkjasbddblj  kdjhaskdj khdjasd klhdjashd lhlkdnas lkhlkand lkhaldka lkhldkhad lkahdlj",
          description: "This is a short description of the blog post.",
        },
        {
          id: 1,
          image: "https://via.placeholder.com/300x200",
          title: "Dynamic Blog Title 1 kndsam dkjasndk jsbdkasd kjbkjasbd akjbkjasbddblj  kdjhaskdj khdjasd klhdjashd lhlkdnas lkhlkand lkhaldka lkhldkhad lkahdlj",
          description: "This is a short description of the blog post.",
        },
        {
          id: 1,
          image: "https://via.placeholder.com/300x200",
          title: "Dynamic Blog Title 1 kndsam dkjasndk jsbdkasd kjbkjasbd akjbkjasbddblj  kdjhaskdj khdjasd klhdjashd lhlkdnas lkhlkand lkhaldka lkhldkhad lkahdlj",
          description: "This is a short description of the blog post.",
        },
        {
          id: 1,
          image: "https://via.placeholder.com/300x200",
          title: "Dynamic Blog Title 1 kndsam dkjasndk jsbdkasd kjbkjasbd akjbkjasbddblj  kdjhaskdj khdjasd klhdjashd lhlkdnas lkhlkand lkhaldka lkhldkhad lkahdlj",
          description: "This is a short description of the blog post.",
        },
        {
          id: 1,
          image: "https://via.placeholder.com/300x200",
          title: "Dynamic Blog Title 1 kndsam dkjasndk jsbdkasd kjbkjasbd akjbkjasbddblj  kdjhaskdj khdjasd klhdjashd lhlkdnas lkhlkand lkhaldka lkhldkhad lkahdlj",
          description: "This is a short description of the blog post.",
        },
        {
          id: 2,
          image: "https://via.placeholder.com/300x200",
          title: "Dynamic Blog Title 2",
          description: "Another description with more details.",
        },
        // Add more blogs here
      ]);
      setLoading(false);
    }, 2000); // 2-second loading time
  }, []);

  return (
    <div className="container mx-auto p-4">
      {loading
        ? Array.from({ length: 3 }).map((_, idx) => <BlogRowSkeleton key={idx} />)
        : blogs.map((blog) => (
            <BlogRow
              key={blog.id}
              image={blog.image}
              title={blog.title}
              description={blog.description}
            />
          ))}
    </div>
  );
};

export default Blogs;
