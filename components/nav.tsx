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
    <>
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
    </>
  ) 
}

const Container = styled.div`
  width: calc(100% - 40px);
  padding: 20px 20px 12px 20px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.color.dark};
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

