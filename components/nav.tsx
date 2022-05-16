import styled from "styled-components";
import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link";
import { GridOutline, PersonOutline, SearchOutline } from 'react-ionicons';
import Image from "next/image";

export default function Nav(){
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowOption(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const [showOption, setShowOption] = useState(false);
  const handleToogleOption = () => setShowOption((prev) => !prev);
  const searchRef = useRef(null);
  useOutsideAlerter(searchRef);
  return(
    <NavBox>
      <Container>
        <Left>
          <GridOutline
            color={'white'}
            height="30px"
            width="30px"
            onClick={()=>{console.log(event);}}
          />
        </Left>
        <Center>
          <Title>Storichain</Title>
        </Center>
        <Right>
          {showOption ? 
            <SearchInput
              type="text"
              placeholder="제목, 사람, 장르"
              ref={searchRef}
              
            /> : 
            <SearchOutline
              color={'white'}
              height="30px"
              width="30px"
              onClick={()=>{setShowOption(true)}}
            />
          } 
          <PersonOutline
            color={'white'}
            height="30px"
            width="30px"
            onClick={()=>{console.log(event);}}
          />
        </Right>
      </Container>
      <MainTag>
          <MainTagContent>전체</MainTagContent>
          <MainTagContent>추천</MainTagContent>
          <MainTagContentSelect>새로운스토리</MainTagContentSelect>
          <MainTagContent>단일스토리</MainTagContent>
          <MainTagContent>시리즈</MainTagContent>
          <MainTagContent>평점순</MainTagContent>
          <MainTagContent>껴든톡</MainTagContent>
          <MainTagContent>급성장</MainTagContent>
          <MainTagContent>로맨스</MainTagContent>
          <MainTagContent>드라마</MainTagContent>
          <MainTagContent>판타지</MainTagContent>
          <MainTagContent>리메이크</MainTagContent>
          <MainTagContent>정주행</MainTagContent>
        </MainTag>
    </NavBox>
  ) 
}
const NavBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.color.dark};
`
const Container = styled.div`
  max-width: 1400px;
  width: calc(100% - 40px);
  padding: 20px 20px 12px 20px;
  display: flex;
  align-items: center;
`
const Left = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`
const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'GmarketSansMedium';
  color: white;
`
const Title = styled.div`
  font-size: 3.2rem;
  letter-spacing: -0.7px;
`
const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  svg {
    cursor: pointer;
  }
`
const SearchInput= styled.input`
  padding: 5px 13px 5px 11px;
  font-family: 'NEXON Lv1 Gothic OTF';
  min-width: 300px;
  font-size: 1.3rem;
  background-color: ${props => props.theme.color.navColor};
  color: white;
  border: 1px solid white;
  border-radius: 8px;
  ::placeholder{
    color: white;
  }
`
const MainTag = styled.div`
  max-width: 1400px;
  width: 100%;
  padding: 4px 20px 0px 12px;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.color.dark};
`
const MainTagContent = styled.p`
  padding: 6px 11px 20px 11px;
  color: white;
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.6rem;
  cursor: pointer;
  transition: all .15s ease-in-out;
  :hover{
    color: ${props => props.theme.color.coral};
  }
`
const MainTagContentSelect = styled.p`
  padding: 6px 11px;
  color: ${props => props.theme.color.coral};
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.6rem;
  border-bottom: 4px solid ${props => props.theme.color.coral};
`