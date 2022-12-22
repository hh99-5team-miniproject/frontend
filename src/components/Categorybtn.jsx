import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Categorybtn = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <Menu>
        <Detailmenu onClick={() => navigate("/category/집중하고 싶을 때")}>
          {"집중하고\n싶을 때"}
        </Detailmenu>
        <Detailmenu onClick={() => navigate("/category/잠 깨고 싶을 때")}>
          {"잠 깨고\n싶을 때"}
        </Detailmenu>
        <Detailmenu onClick={() => navigate("/category/에러가 뜰 때")}>
          {"에러가 뜰 때"}
        </Detailmenu>
        <Detailmenu onClick={() => navigate("/category/TIL or WIL 작성할 때")}>
          {"TIL/WIL\n작성할 때"}
        </Detailmenu>
        <Detailmenu
          onClick={() => navigate("/category/팀원과 트러블이 있을 때")}
        >
          {"팀원과 트러블\n있을 때"}
        </Detailmenu>
      </Menu>
    </Div>
  );
};

const Div = styled.div`
  list-style-type: none;
  padding: 0px 20px 0px 40px;
  margin: 0px;
  min-height: 700px;
  overflow: auto;
  position: fixed;
  left: 9%;
  bottom: 2%;
`;
const Menu = styled.div`
  margin-right: 50px;
`;
const Detailmenu = styled.div`
  width: 125px;
  height: 125px;
  box-sizing: border-box;
  border: 4px solid white;
  border-radius: 35px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 17px;
  text-align: center;
  white-space: pre-line;

  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: none;
    background-color: blueviolet;
  }
`;

export default Categorybtn;
