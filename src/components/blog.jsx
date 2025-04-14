import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "How to Build a Strong Brand Identity",
    excerpt: "Discover key strategies to shape a lasting and memorable brand.",
    image: "/src/assets/image-9-890x664.jpg",
    date: "April 8, 2025",
  },
  {
    id: 2,
    title: "The Future of Digital Marketing",
    excerpt: "Explore how AI and personalization are changing the game.",
    image: "/src/assets/image-10-890x664.jpg",
    date: "April 3, 2025",
  },
  {
    id: 3,
    title: "UX Design Trends in 2025",
    excerpt: "Learn what design patterns are dominating user experience today.",
    image: "/src/assets/image-12-890x664.jpg",
    date: "March 28, 2025",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-sm text-center text-gray-500 uppercase mb-4">Our Blog</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className=" rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
