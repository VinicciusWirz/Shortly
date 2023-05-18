import { styled } from "styled-components";
import { AiFillTrophy } from "react-icons/ai";

export default function RankPage() {
  return (
    <RanksStyle>
      <Container>
        <Title>
          <AiFillTrophy color="#FFD233" size={56} />
          Ranking
        </Title>
        <Frame>
          <RankItem order={0}>
            1. Fulaninha - 32 links - 1.703.584 visualizações
          </RankItem>
          <RankItem order={1}>
            2. Ciclano - 20 links - 1.113.347 visualizações
          </RankItem>
          <RankItem order={2}>
            3. Beltrana - 18 links - 852.961 visualizações
          </RankItem>
          <RankItem order={3}>
            4. Joaozin - 14 links - 492.173 visualizações
          </RankItem>
          <RankItem order={4}>
            5. DEFINITIVAMENTE_NAO_E_UM_BOT - 12345252 links - 37.707
            visualizações
          </RankItem>
        </Frame>
        <Signup>
          <div>Crie sua conta para usar nosso serviço!</div>
        </Signup>
      </Container>
    </RanksStyle>
  );
}
const RanksStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 82%;
`;
const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 57px;
`;
const Frame = styled.ul`
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
  gap: 13px;
  padding: 19px 40px 30px;
  display: flex;
  flex-direction: column;
`;
const RankItem = styled.li`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #000000;
  flex: none;
  order: ${(props) => props.order};
  flex-grow: 0;
`;
const Signup = styled.div`
  margin-top: 82px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
  display: flex;
  justify-content: center;
  div {
    cursor: pointer;
  }
`;
