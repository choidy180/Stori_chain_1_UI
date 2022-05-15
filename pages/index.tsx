import type { NextPage } from "next";
import styled from "styled-components";
import { media } from "../styles/theme";
import Nav from "../components/nav";
import Image from "next/image";

const Home: NextPage = (props) => {
  return (
    <>
      <Container>
        <Nav/>
        <Tag>
          <TagContent>전체</TagContent>
          <TagContent>추천</TagContent>
          <TagContentSelect>새로운스토리</TagContentSelect>
          <TagContent>단일스토리</TagContent>
          <TagContent>시리즈</TagContent>
          <TagContent>평점순</TagContent>
          <TagContent>껴든톡</TagContent>
          <TagContent>급성장</TagContent>
          <TagContent>로맨스</TagContent>
          <TagContent>드라마</TagContent>
          <TagContent>판타지</TagContent>
          <TagContent>리메이크</TagContent>
          <TagContent>정주행</TagContent>
        </Tag>
        <ContentBox>
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map((_, i) => (
          <ContentLayOut key={i}>
            <Content>
              <Image 
                src='/images/8a0b876907e14030aad6eb00716a05b6_20220504165423.jpg' 
                alt=''
                layout="fill"
                objectFit="cover"
              />
            </Content>
            <ContentTitle>스토리체인 {_}부</ContentTitle>
            <ContentMaker>Storichains</ContentMaker>
        </ContentLayOut>
        ))}
        </ContentBox>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Tag = styled.div`
  width: auto;
  min-width: calc(100% - 40px);
  padding: 12px 20px 0px 12px;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.color.dark};
`
const TagContent = styled.div`
  padding: 6px 11px 20px 11px;
  color: white;
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.6rem;
`
const TagContentSelect = styled.div`
  padding: 6px 11px;
  color: ${props => props.theme.color.coral};
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.6rem;
  border-bottom: 4px solid ${props => props.theme.color.coral};
`
const ContentBox = styled.div`
  width: calc(100% - 40px);
  padding: 20px 20px 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`
const ContentLayOut = styled.div`
  width: 175px;
  display: flex;
  flex-direction: column;
  :hover{
    color: ${props => props.theme.color.coral}
  }
`
const Content = styled.div`
  position: relative;
  width: 100%;
  height: 235px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  img{
    transition: all .15s ease-in-out;
  }
  cursor: pointer;  
  :hover{
    img {
      transform: scale(1.05);
    }
  }
` 
const ContentTitle = styled.p`
  padding-top: 11px;
  font-family: 'GmarketSansMedium';
  font-size: 1.62rem;
  transition: all .15s ease-in-out;
`
const ContentMaker = styled.p`
  margin-top: 2px;
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.4rem;
  transition: all .15s ease-in-out;
`

export default Home;