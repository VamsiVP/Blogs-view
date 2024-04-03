import { useState } from "react";
import Bloglist from "./Bloglist";

const Homepage = () => {
  const [blogs, setBlogs] = useState([
    { title: "my new wesite", body: "lorem 10", author: "vamsi", id: 1 },
    { title: "welcome party", body: "lorem 10", author: "rajesh", id: 2 },
    { title: "web developer", body: "lorem 10", author: "ram", id: 3 },
  ]);

  return (
    <div className="home">
      <Bloglist blogs={blogs} />
    </div>
  );
};

export default Homepage;
