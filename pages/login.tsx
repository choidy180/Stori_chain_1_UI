import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import { media } from "../styles/theme";

const Login: NextPage = () => {
  return (
    <Container>
      <Title>로그인</Title>
      <InputContainer>
        <Input
          type="text"
          placeholder="아이디(이메일)"
        />
        <Input
          type="password"
          placeholder="비밀번호"
        />
        <InputButton>로그인하기</InputButton>
      </InputContainer>
      <SnsText>SNS 계정으로 로그인하기</SnsText>
      <SnsContainer>
        <Image 
          src='/images/logo/google-brand-black-google-logo-vector-number-symbol-text-trademark-transparent-png-144049.png' 
          alt=''
          width={40}
          height={40}
          style={{cursor:"pointer"}}
        />
        <Image 
          src='/images/logo/free-icon-github-logo-25231.png' 
          alt=''
          width={40}
          height={40}
          style={{cursor:"pointer"}}
        />
        <Image 
          src='/images/logo/facebook.png' 
          alt=''
          width={40}
          height={40}
          style={{cursor:"pointer"}}
        />
        <Image 
          src='/images/logo/apple.png' 
          alt=''
          width={40}
          height={40}
          style={{cursor:"pointer"}}
        />
      </SnsContainer>
      <JoinText>아직 29CM 회원이 아니신가요?</JoinText>
      <JoinButton>회원가입</JoinButton>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.mobile}{
    justify-content: flex-start;
    min-height: 0;
  }
`;
const Title = styled.h2`
  font-size: 4rem;
  font-family: 'GmarketSansMedium';
  ${media.mobile}{
    margin-top: 22px;
  }
`;
const InputContainer = styled.form`
  margin-top: 24px;
  padding-top: 30px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 4px solid ${props => props.theme.color.darkGray};
  ${media.mobile}{
    width: calc(100% - 30px);
  }
`;
const Input = styled.input`
  width: calc(100% - 30px);
  padding: 14px 14px 14px 14px;
  font-size: 1.4rem;
  border: 1px solid ${props => props.theme.color.darkGray2};
  font-family: 'GmarketSansMedium';
  transition: all .1s ease-in-out;
  border-radius: 4px;
  :focus{
    border: 1px solid ${props => props.theme.color.darkGreen};
  }
`
const InputButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 17px 0 17px 0;
  background-color: ${props => props.theme.color.darkGray2};
  color: white;
  font-size: 1.4rem;
  font-family: 'GmarketSansMedium';
  border-radius: 4px;
  transition: all .1s ease-in-out;
  :hover{
    background-color: ${props => props.theme.color.darkGray};
  }
`
const SnsText = styled.p`
  font-size: 1.4rem;
  font-family: 'GmarketSansMedium';
  margin-top: 32px;
  letter-spacing: -.4px;
`
const SnsContainer = styled.div`
  padding-top: 40px;
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
  gap: 30px;
`
const JoinText = styled.p`
  font-size: 1.5rem;
  font-family: 'NEXON Lv2 Gothic';
  margin-top: 72px;
  letter-spacing: -.4px;
  ${media.mobile}{
    font-size: 1.7rem;
    margin-top: 40px;
  }
`
const JoinButton = styled.button`
  margin-top: 12px;
  width: 400px;
  padding: 14px 0 14px 0;
  color: ${props => props.theme.color.darkGray2};
  font-size: 1.6rem;
  font-family: 'GmarketSansMedium';
  border: 1px solid ${props => props.theme.color.darkGray2};
  border-radius: 40px;
  transition: all .2s ease-in-out;
  :hover{
    color: ${props => props.theme.color.pink};
  }
  ${media.mobile}{
    width: calc(100% - 30px);
  }
`

export default Login;