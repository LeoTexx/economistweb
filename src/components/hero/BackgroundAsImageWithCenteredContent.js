import React, { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";
import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1490604001847-b712b0c2f967?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <Content>
          <Heading>
            Hi {displayName}
            <br />
            <br />
            Test App to Get Data From
            <br />
            The Economist
          </Heading>
          <PrimaryAction
            onClick={() => {
              let pageHeight = window.innerHeight;

              window.scrollBy(0, pageHeight);
            }}
          >
            Show me the NEWS!!!!
          </PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};

/* onClick = {() => {auth.signOut()}}*/
