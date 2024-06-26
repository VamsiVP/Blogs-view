const Bloglist = (props) => {
  const blogs = props.blogs;

  //   console.log(props, blogs);

  return (
    <div className="blog-list">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Directed by {blog.author} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Bloglist;
