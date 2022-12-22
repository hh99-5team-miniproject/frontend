import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __postLike } from "../redux/modules/postSlice";

const Heart = ({ onClick }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const checkPostLike = useSelector(
    (state) => state.post.checkPostLike // 하나가 바뀌어도 다 바뀐다.
  );

  const likeCount = useSelector(
    (state) => state.post.likeCount // 하나가 바뀌어도 다 바뀐다.
  );

  const onClickloginHeartHandler = () => {
    dispatch(__postLike(id));
  };

  const onClickNonloginHeartHandler = () => {
    alert("로그인 시 이용가능합니다.");
  };

  return (
    <div>
      {localStorage.getItem("id") !== null ? (
        <Button onClick={onClickloginHeartHandler}>
          <div>{checkPostLike === true ? "🤍" : "❤️"}</div>
          <div>{likeCount}</div>
        </Button>
      ) : (
        <Button onClick={onClickNonloginHeartHandler}>
          <div>{checkPostLike === true ? "🤍" : "❤️"}</div>
          <div>{likeCount}</div>
        </Button>
      )}
    </div>
  );
};

const Button = styled.div`
  display: flex;
  color: white;
  font-size: 30px;
`;

export default Heart;
