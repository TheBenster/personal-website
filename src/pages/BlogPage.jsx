import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ title, date, excerpt, slug, image }) => {
  return (
    <div className="blog-post">
      {image && (
        <div className="blog-post-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="blog-post-content">
        <h2 className="blog-post-title">{title}</h2>
        <p className="blog-post-date">{date}</p>
        <p className="blog-post-excerpt">{excerpt}</p>
        <Link to={`/blog/${slug}`} className="blog-post-link">
          Read more
        </Link>
      </div>
    </div>
  );
};

const BlogPage = () => {
  // Sample blog posts data - in a real app, you would fetch this from an API
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      date: "April 15, 2025",
      excerpt:
        "Learn how to set up your first React application and understand the core concepts.",
      slug: "getting-started-with-react",
      image: "/src/assets/blog/react-post.jpg",
    },
    {
      id: 2,
      title: "UX Design Principles",
      date: "March 28, 2025",
      excerpt:
        "Exploring the fundamental principles of effective user experience design.",
      slug: "ux-design-principles",
      image: "/src/assets/blog/ux-design.jpg",
    },
    {
      id: 3,
      title: "Building Responsive Websites",
      date: "March 10, 2025",
      excerpt:
        "Tips and techniques for creating websites that work beautifully on all devices.",
      slug: "building-responsive-websites",
      image: "/src/assets/blog/responsive-design.jpg",
    },
  ];

  return (
    <section className="blog-page">
      <div className="blog-container">
        <h1 className="blog-header">Latest Posts</h1>
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <BlogPost
              key={post.id}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
