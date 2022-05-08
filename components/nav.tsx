import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingBag, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/router";
import Link from "next/link";
import { media } from "../styles/theme";

export default function Nav(){
  const router = useRouter(); 
  console.log(media);
  return(
    <NavContainer>
      <NavBox>
        <NavBoxLeft>
          <Link href={"/"}>
            <LogoText>29CM</LogoText>
          </Link>
        </NavBoxLeft>
        <NavBoxRight>
          <Link href={"/mypage"}>
            <NavText>
              <FontAwesomeIcon icon={faUser}/>
              <span>MYPAGE</span>
            </NavText>
          </Link>
          <Link href={"/mypage/heart"}>
            <NavText>
              <FontAwesomeIcon icon={faHeart}/>
              <span>HEART</span>
            </NavText>
          </Link>
          <Link href={"/order/cart"}>
            <NavText>
              <FontAwesomeIcon icon={faShoppingBag}/>
              <span>SHOPPING</span>
            </NavText>
          </Link>
          {router.pathname === '/login' 
            ? ""
            : 
            <Link href={"/login"}>
              <NavText>
                <FontAwesomeIcon icon={faRightToBracket}/>
                <span>LOGIN</span>
              </NavText>
            </Link>
          }
        </NavBoxRight>
      </NavBox>
      <NavTab>
        <NavItem>
          <NavTabItems>MEN</NavTabItems>
          <NavTabItems>WOMEN</NavTabItems>
          <NavTabItems>HOME</NavTabItems>
          <NavTabItems>TECH</NavTabItems>
          <NavTabItems>BEAUTY</NavTabItems>
          <NavTabItems>LEISURE</NavTabItems>
          <NavTabItems>CURTURE</NavTabItems>
        </NavItem>
        <NavSubTab>
          <NavTabSubItems>Event</NavTabSubItems>
          <NavTabSubItems>Brand</NavTabSubItems>
          <NavTabSubItems>Lookbook</NavTabSubItems>
        </NavSubTab>
      </NavTab>
    </NavContainer>
 ) 
}

const NavContainer = styled.div`
  width: calc(100vw - 76px);
  padding: 34px 38px 10px 38px;
  display: flex;
  flex-direction: column;
`;

const NavBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const NavBoxLeft = styled.div`
  font-family: 'GmarketSansMedium';
  width: 100%;
  display: flex;
  justify-content: flex-start;
  ${media.tablet}{
    width: auto;
  }
`;
const NavBoxRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  span{
    margin-top: 1px;
    margin-left: 3px;
  }
  ${media.tablet}{
    gap: 1rem;
  }
`;
const LogoText = styled.p`
  font-size: 24px;
  cursor: pointer;
`
const NavText = styled.a`
  font-size: 11px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all ease-in-out 0.1s;
  letter-spacing: -0.5px;
  :hover{
    color: ${props => props.theme.color.green}
  }
  ${media.tablet}{
    svg{
      display: none;
    }
  }
`;

const NavTab = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  ${media.tablet}{
    flex-direction: column;
    padding-top: 0px;
    gap: 10px;
  }
`
const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  padding-top: 20px;
  ${media.tablet}{
    flex-wrap: wrap;
    gap: 12px;
  }
`
const NavTabItems = styled.span`
  font-family: 'GmarketSansBold';
  font-size: 1rem;
  ${media.tablet}{
    font-size: 0.85rem;
  }
`
const NavSubTab = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  padding-left: 16px;
  padding-top: 20px;
  ${media.tablet}{
    padding-left: 0px;
    padding-top: 0px;
  }

`
const NavTabSubItems = styled.span`
  font-family: 'GmarketSansMedium';
  font-size: 1rem;
`