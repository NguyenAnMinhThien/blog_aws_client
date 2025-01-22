import "./post.css";
import { Link } from "react-router-dom";
// the argument post is used in this function is passed through the Posts , explicitely it is {p}
export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {/*  why we use both post.photo and an img tag ?*/}
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
            {/*//c is an anonymous object, implicitly, it is an element in the post array.*/}
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {/*  create an object directly inside the HTML tag*/}
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
