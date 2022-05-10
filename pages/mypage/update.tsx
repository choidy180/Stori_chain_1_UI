import { NextPage } from "next";
import Nav from "../../components/nav";
import styled from "styled-components";
import { media } from "../../styles/theme";
import Image from "next/image";

const MyPageUpdate: NextPage = (props) => {
  return (
    <Container>
      <Nav isLoggedIn={props}/>
        <Box>
          <Title>개인정보 수정</Title>
          <Img>
            <Image 
              src='/images/background/4ugq4vz121x44362cq87.png' 
              alt=''
              width={1000}
              height={1200}
            />
          </Img>
          <ImgButton htmlFor="picture">
            <UploadImageButton id="picture" type="file" accept="image/*"/>
            프로필 이미지 수정
          </ImgButton>
          <ContentBox>
            <HeadBox>
              <Head>아이디</Head>
              <Head>이름</Head>
              <Head>생년월일</Head>
              <Head>연락처</Head>
            </HeadBox>
            <Content>
              <ContentInput
                type="text"
                placeholder="example@google.com"
              />
              <ContentInput
                type="text"
                placeholder="크리스탈"
              />
              <ContentInput
                type="text"
                placeholder="2000-01-01"
              />
              <LastContentInput
                type="text"
                placeholder="010-0000-0000"
              />
            </Content>
          </ContentBox>
          <Button>정보수정하기</Button>
        </Box>
    </Container>
  )
};

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: auto;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Box = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2.9rem;
  ${media.mobile}{
    font-size: 2.4rem;
  }
`;
const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 0px solid ${props => props.theme.color.darkGray2};
  margin-top: 24px;
  overflow: hidden;
  ${media.mobile}{
    width: 180px;
    height: 180px;
  }
`;
const ImgButton = styled.label`
  margin-top: 27px;
  padding: 14px 22px;
  font-size: 1.6rem;
  border: 1px solid ${props => props.theme.color.darkGray};
  cursor: pointer;
  font-family: 'NEXON Lv1 Gothic OTF';
  line-height: 1.5rem;
  border-radius: 6px;
  ${media.mobile}{
    font-size: 1.5rem;
    padding: 12px 18px;
  }
`;
const UploadImageButton = styled.input`
  display: none;
`;
const ContentBox = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-top: 1px solid rgb(200, 214, 229);
  border-bottom: 1px solid rgb(200, 214, 229);
  margin-top: 20px;
  ${media.mobile}{
    max-width: none;
  }
`;
const HeadBox = styled.div`
  width: 165px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-right: 1px solid rgb(200, 214, 229);
  ${media.mobile}{
    width: 130px;
  }
`;
const Head = styled.div`
  width: calc(100% - 50px);
  padding: 18px 30px 18px 20px;
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.7rem;
  border-top: 1px solid white;
  margin: 0;
  ${media.mobile}{
    width: calc(100% - 40px);
    padding: 13px 15px 13px 25px;
  }
`;
const Content = styled.div`
  width: calc(100% - 166px);
  display: flex;
  flex-direction: column;
  ${media.mobile}{
    width: calc(100% - 130px);
  }
`;
const ContentInput = styled.input`
  width: calc(100% - 50px);
  padding: 17px 30px 17px 20px;
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.7rem;
  border: none;
  border-bottom: 1px solid rgb(200, 214, 229);
  outline: none;
  margin: 0px;
  ${media.mobile}{
    width: 100%;
    padding: 12px 25px 12px 15px;
  }
`;
const LastContentInput = styled.input`
  width: calc(100% - 50px);
  padding: 17px 30px 17px 20px;
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.7rem;
  border: none;
  outline: none;
  margin: 0;
  ${media.mobile}{
    padding: 12px 25px 12px 15px;
  }
`;
const Button = styled.button`
  margin-top: 30px;
  min-width: 300px;
  padding: 14px 30px;
  background-color: ${props => props.theme.color.darkGray};
  font-family: 'GmarketSansMedium';
  font-size: 2rem;
  color: white;
  border-radius: 14px;
  cursor: pointer;
  transition: all .15s ease-in-out;
  :hover{
    background-color: ${props => props.theme.color.darkGray2};
  }
  ${media.mobile}{
    padding: 11px 20px 11px 10px;
    min-width: 250px;
    font-size: 1.8rem;
  }
`;
export default MyPageUpdate;