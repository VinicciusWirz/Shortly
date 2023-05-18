import { styled } from "styled-components";
import { AiFillTrophy } from "react-icons/ai";
import { useContext, useState } from "react";
import SessionContext from "../contexts/SessionContext";
import apiUsers from "../services/apiUsers";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function RankPage() {
  const { token } = useContext(SessionContext);
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useState(() => {
    fetchRank();
  }, []);

  async function fetchRank() {
    setLoading(true);
    try {
      const { data } = await apiUsers.ranks();
      setRanking(data);
      setLoading(false);
    } catch (error) {
      alert(`${error.response.status}: ${error.response.data}`);
      setLoading(false);
    }
  }

  return (
    <RanksStyle>
      <Container>
        <Title>
          <AiFillTrophy color="#FFD233" size={56} />
          Ranking
        </Title>
        <Frame>
          {loading && (
            <ListLoading>
              <ThreeDots />
            </ListLoading>
          )}
          {ranking.map((user, index) => (
            <RankItem order={index} key={index}>
              {index + 1}. {user.name} - {user.linksCount} links -{" "}
              {user.visitCount} visualizações
            </RankItem>
          ))}
        </Frame>
        {!token && (
          <Signup>
            <div onClick={() => navigate("/signup")}>
              Crie sua conta para usar nosso serviço!
            </div>
          </Signup>
        )}
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
const ListLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
