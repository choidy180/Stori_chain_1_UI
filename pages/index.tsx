import type { NextPage } from "next";
import styled from "styled-components";
import { media } from "../styles/theme";
import Nav from "../components/nav";
import Image from "next/image";

const Home: NextPage = (props) => {
  return (
    <>
      <Container>
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