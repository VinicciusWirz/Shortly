import { BrowserRouter, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./components/Header";
import RankPage from "./pages/RankPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import UserLinksPage from "./pages/UserLinksPage";

function App() {
  const logged = true;
  return (
    <PageContainer>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={logged ? <UserLinksPage /> : <RankPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/my-links" element={<UserLinksPage />} />
          <Route path="/ranking" element={<RankPage />} />
        </Routes>
      </BrowserRouter>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  width: 86vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  background: #ffff;
`;

export default App;
