import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const BasicBoard = () => {
  // useState 함수의 리턴값으로 배열이 옴. 두번째는 setState
  const [contents, setContents] = useState([]);

  // 아래를 통해서만 바꿔줄 수 있음
  // setContents([]);

  const getPost = async () => {
    let boardList = await axios.get("http://localhost:3060/post");
    setContents(boardList.data);
    console.log("boardList", boardList);
  };

  useEffect(() => {
    getPost();
  }, []);

  // console.log(contents);
  return (
    <Container>
      <TitleContainer>
        <Category>구분</Category>
        <TextTitle>글제목</TextTitle>
        <IconContainer>작성일</IconContainer>
        <IconContainer>좋아요</IconContainer>
      </TitleContainer>
      <ContentsContainer>
        {contents
          ? contents.map((item, index) => (
              // react는 무조건 전체를 가지는 하나의 부모가 꼭 있어야 함
              // key props를 주어야
              <div key={index + item.date}>
                <CategoryContent>{item.category}</CategoryContent>
                <TitleContent>
                  {item.title}
                  <span>[{item.comment_count}]</span>
                </TitleContent>
                <IconContent>{item.date}</IconContent>
                <IconContent>{item.like}</IconContent>
              </div>
            ))
          : "내용이 없습니다."}
      </ContentsContainer>
    </Container>
  );
};

export default BasicBoard;

const Container = styled.div`
  width: 100%;
  font-size: 13px;
  color: #1e1e1e;
`;

const TitleContainer = styled.div`
  border-bottom: 1px solid #1e1e1e;
  height: 44px;
  display: flex; // 기본 row (가로로 쌓임)
  align-items: center;
  text-align: center;
`;

const Category = styled.div`
  width: 150px;
`;
const TextTitle = styled.div`
  width: 100%;
`;
const IconContainer = styled.div`
  width: 150px;
`;
const CategoryContent = styled.div`
  width: 150px;
  padding-left: 30px;
`;
const TitleContent = styled.div`
  width: 100%;
  span {
    font-size: 13px;
    color: #ff4343;
    margin-left: 5px;
  }
`;
const IconContent = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
`;

const ContentsContainer = styled.div`
  div {
    display: flex;
  }
`;
