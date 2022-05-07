import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingBag, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/router";
import Link from "next/link";

export default function Nav(){
  const router = useRouter(); 
  return(
    <NavContainer>
      <NavBoxLeft>
        <Link href={"/"}>
          <LogoText>29CM</LogoText>
        </Link>
      </NavBoxLeft>
      <NavBoxRight>
        <Link href={"/mypage"}>
          <NavText>
            <FontAwesomeIcon icon={faUser}/>
            <span>MY PAGE</span>
          </NavText>
        </Link>
        <Link href={"/mypage/heart"}>
            <NavText>
              <FontAwesomeIcon icon={faHeart}/>
              <span>MY HEART</span>
            </NavText>
        </Link>
        <Link href={"/order/cart"}>
          <NavText>
            <FontAwesomeIcon icon={faShoppingBag}/>
            <span>SHOPPING BAG</span>
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
    </NavContainer>
 ) 
}

const NavContainer = styled.div`
  width: calc(100vw - 40px);
  padding: 20px 20px 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const NavBoxLeft = styled.div`
  font-family: 'GmarketSansMedium';
  width: 100%;
  display: flex;
  justify-content: flex-start;
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
`;
const LogoText = styled.p`
  font-size: 24px;
  cursor: pointer;
`
const NavText = styled.a`
  font-size: 13px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all ease-in-out 0.1s;
  letter-spacing: -0.5px;
  :hover{
    color: #356356;
  }
`;