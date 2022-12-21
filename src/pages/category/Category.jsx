import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./category.css";
import { __getCategoryPost } from "../../redux/modules/postSlice";

const Category = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  const { categoryPosts, isLoading, error } = useSelector(
    (state) => state.post
  );

  // 호출시 사용!!!
  useEffect(() => {
    dispatch(__getCategoryPost(id));
  }, [id, dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  console.log(categoryPosts);

  const thumbnail = categoryPosts.map((post) => {
    return `https://img.youtube.com/vi/${post.youtubeUrl.split("/")[4]}/0.jpg`;
  });

  console.log(thumbnail);

  return (
    <div className="categoryMain">
      <div className="menu">
        <div onClick={() => navigate("/category/집중하고 싶을 때")}>
          {"집중하고\n싶을 때"}
        </div>
        <div onClick={() => navigate("/category/잠 깨우고 싶을 때")}>
          {"잠 깨우고\n싶을 때"}
        </div>
        <div onClick={() => navigate("/category/에러가 뜰 때")}>
          {"에러가뜰 때"}
        </div>
        <div onClick={() => navigate("/category/TIL or WIL 작성할 때")}>
          {"TIL/WIL\n작성할 때"}
        </div>
        <div onClick={() => navigate("/category/팀원과 트러블 있을 때")}>
          {"팀원과 트러블\n있을 때"}
        </div>
      </div>
      <div className="best">
        <h2>{id}</h2>
        <div className="bestCards">
          {categoryPosts.map((post, i) => {
            return (
              <div
                className="bestCard"
                key={post.postId}
                onClick={() => {
                  navigate(`/detail/${post.postId}`);
                }}
              >
                <img className="bestCardImage" src={thumbnail[i]}></img>
                <div className="bestCardInfo">
                  <div>{post.title}</div>
                  <div className="bestCardInfoLikeCount">
                    ❤️ {post.likeCount}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
