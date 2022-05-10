import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import MyPageTab from "../../components/mypage/tab";
import Nav from "../../components/nav";
import { media } from "../../styles/theme";

const MyPage: NextPage = (props) => {
  return (
    <>
      <Nav isLoggedIn={props}/>
      <Container>
        <Box>
          <MyPageTab/>
          <Content>
            <MTop>
              <MImage>
                <Img>
                  <Image 
                    src='/images/background/4ugq4vz121x44362cq87.png' 
                    alt=''
                    width={1000}
                    height={1200}
                  />
                </Img>
              </MImage>
              <MTTitle>
                <MTTitleText>크리스탈 님</MTTitleText>
                <MTGrade>VIP<MTGradeSub>(회원등급)</MTGradeSub></MTGrade>
                <MTGradeText>VVIP까지 198,000원 남았습니다.</MTGradeText>
              </MTTitle>
            </MTop>
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
  ${media.xltablet}{
    padding: 20px;
    width: calc(100% - 40px);
  }
  ${media.tablet}{
    padding: 0;
  }
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
  ${media.tablet}{
    padding: 0;
    margin-top: -1px;
  }
  ${media.mobile}{
    min-width: 0px;
  }
`;
const MTop = styled.div`
  display: none;
  ${media.tablet}{
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    background-color: ${props => props.theme.color.dark};
  }
  ${media.mobile}{
    width: 100vw;
    padding: 0;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;
  }
`;
const MImage = styled.div`
  ${media.tablet}{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
  }
`
const Img = styled.div`
  ${media.tablet}{
    width: 100%;
  }
`
const MTTitle = styled.div`
  ${media.tablet}{
    width: calc(100% - 270px);
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: white;
  }
  ${media.mobile}{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 0 0 0;
  }
`
const MTTitleText = styled.p`
  ${media.tablet}{
    color: white;
    font-size: 4rem;
    margin-bottom: 10px;
  }
`
const MTGrade = styled.p`
  ${media.tablet}{
    color: white;
    font-size: 3rem;
    margin-bottom: 20px;
  }
`
const MTGradeSub = styled.span`
  ${media.tablet}{
    color: ${props => props.theme.color.gray};
    font-size: 1.35rem;
    margin-left: 4px;
  }
  ${media.mobile}{
    display: none;
  }
`
const MTGradeText = styled.p`
  ${media.tablet}{
    color: white;
    font-size: 2rem;
  }
  ${media.mobile}{
    display: none;
  }
`
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
  ${media.tablet}{
    margin-top: -2px;
    padding-top: 0;
    background-color: ${props => props.theme.color.dark};
    width: 100%;
  }
`;
const TopLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 42px;
  ${media.tablet}{
    display: none;
  }
`;
const TopBox = styled.div`
  padding-left: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
  border-left: 1px solid ${props => props.theme.color.darkGray};
  ${media.tablet}{
    width: 100%;
    border-left: none;
    gap: 12px;
  }
  ${media.tablet}{
    align-items: center;
    padding: 0;
  }
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
    font-size: 2rem;
    line-height: 2rem;
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
    font-size: 2rem;
    line-height: 2rem;
  }
`;
export default MyPage;