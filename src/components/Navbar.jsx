import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
   height: 50px;
       
`
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
`
const Left = styled.div`
   flex: 1;
`
const Language = styled.div`
   cursor: pointer;
`
const SearchContainer = styled.div`

`
const Center = styled.div`
   flex: 1;
`
const Right = styled.div`
   flex: 1;
  
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left><Language>EN</Language></Left>
        <SearchContainer>
          icons
          inout
        </SearchContainer>
        <Center>center</Center>
        <Right>right</Right>
      </Wrapper>       
    </Container>
  )
}

export default Navbar
