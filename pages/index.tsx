import styled from "styled-components";

import Head from "next/head";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>DCS - Parked</title>
      </Head>

      <Main>
        <Title>
          <P>🅿️</P>arked at DCS
        </Title>

        <Description>
          Yes, my domain is parked at my own cloud service, deal with it.
        </Description>
        <Description>
          This probably means I'm working on something that will be hosted here
        </Description>
      </Main>

      <Footer>
        <FooterText>
          Dustin Cloud Services -{" "}
          <Website href="https://dstn.to">dstn.to</Website> -{" "}
          <Twitter href="https://twitter.com/dustinrouillard">
            @dustinrouillard
          </Twitter>
        </FooterText>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const P = styled.span`
  margin-right: 5px;
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
  margin: 0;
  margin-top: 20px;
`;

const FooterText = styled.p``;

const Twitter = styled.a`
  text-decoration: none;
  color: #025683;
`;

const Website = styled.a`
  text-decoration: none;
  color: #025683;
`;
