import { useEffect, useState } from "react";
import "./Home.css";
import Post from "./Post/Post";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoMdAdd } from "react-icons/io";
import { cloneDeep } from "lodash";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home({ setAddpostClickedTrue, setAddpostClickedFalse }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setAddpostClickedFalse();
    axios
      .get("http://localhost:1500/posts/")
      .then((res) => {
        setPosts(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    const postsClone = cloneDeep(posts);
    const postIndex = postsClone.findIndex((post) => post._id === id);
    postsClone.splice(postIndex, 1);
    setPosts(postsClone);

    axios
      .delete(`http://localhost:1500/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error.response.data));
  };

  return (
    <>
      <Header />
      <div className="container-fluid my-3 ">
        <div className="container ">
          <div className=" row row-cols-1  row-cols-sm-1 row-cols-lg-2 row-cols-xxl-2 ">
            {posts.length
              ? posts.map((post, index) => (
                  <Post
                    key={index}
                    id={post._id}
                    title={post.title}
                    image={post.imgUrl}
                    description={post.description}
                    handleDelete={() => handleDelete(post._id)}
                    postUserId={post.userId}
                  />
                ))
              : null}
          </div>
          <button
            className="add-button "
            onClick={() => {
              setAddpostClickedTrue();
              if (sessionStorage.getItem("token")) navigate("/formEdit");
              else navigate("/login");
            }}
          >
            <IoMdAdd />
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
