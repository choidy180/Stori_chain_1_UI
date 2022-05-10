import { NextPage } from "next";
import Nav from "../../components/nav";
import styled from "styled-components";

const MyPageUpdate: NextPage = (props) => {
  return (
    <>
      <Nav isLoggedIn={props}/>
      <Container>
        
      </Container>
    </>
  )
};

const Container = styled.div`
  padding: 20px;
  width: calc(100% - 40px);
  height: auto;
`
export default MyPageUpdate;