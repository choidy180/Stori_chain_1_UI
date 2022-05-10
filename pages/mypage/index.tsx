import type { NextPage } from "next";
import styled from "styled-components";
import MyPageTab from "../../components/mypage/tab";
import Nav from "../../components/nav";
import { media } from "../../styles/theme";

const MyPage: NextPage = (props) => {
  console.log(props);
  return (
    <>
      <Nav isLoggedIn={props}/>
      <Container>
        <Box>
          <MyPageTab/>
          <Content>
            <Top>
              <TopLeft>
                <TopHead>회원등급</TopHead>
                <TopText>VVIP</TopText>
              </TopLeft>
              <TopBox>
                <TopHead>포인트</TopHead>
                <TopNumber>4,500</TopNumber>
              </TopBox>
              <TopBox>
                <TopHead>쿠폰</TopHead>
                <TopNumber>1,004</TopNumber>
              </TopBox>
              <TopBox>
                <TopHead>후기작성</TopHead>
                <TopNumber>4</TopNumber>
              </TopBox>
            </Top>
          </Content>
        </Box>
      </Container>
    </>
  )
};

const Container = styled.div`
  padding: 50px 40px 0 40px;
  width: 100% - 60px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  max-width: 1500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Content = styled.div`
  padding-top: 20px;
  width: 100%;
  min-width: 500px;
  min-height: 1000px;
`;
const Top = styled.div`
  width: calc(100% - 60px);
  padding: 31px 30px;
  background-color: ${props => props.theme.color.darkGray2};
  color: white;
  display: flex;
  ${media.xltablet}{
    padding: 20px;
    width: calc(100% - 40px);
  }
`;
const TopLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 42px;
`;
const TopBox = styled.div`
  padding-left: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
  border-left: 1px solid ${props => props.theme.color.darkGray};
`
const TopHead = styled.p`
  font-family: 'NEXON Lv2 Gothic';
  color: ${props => props.theme.color.gray};
  font-size: 1.6rem;
`;
const TopText = styled.p`
  font-family: 'GmarketSansMedium';
  color: white;
  font-size: 3.6rem;
  line-height: 3.4rem;
  ${media.xltablet}{
    font-size: 2.7rem;
    line-height: 2.8rem;
  }
`;
const TopNumber = styled.span`
  font-family: 'GmarketSansMedium';
  color: white;
  font-size: 3.6rem;
  cursor: pointer;
  transition: all .1s ease-in-out;
  :hover{
    color: ${props => props.theme.color.lightGreen};
  }
  ${media.xltablet}{
    font-size: 2.7rem;
    line-height: 2.8rem;
  }
`;
export default MyPage;