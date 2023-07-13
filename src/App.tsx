import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import { GetIssues } from 'apis/issues';
import { useIssue } from 'context/IssueContext';
import Header from 'components/Header';

function App() {
  const { saveIssues } = useIssue();

  useEffect(() => {
    const getIssue = async () => {
      const response = await GetIssues();
      saveIssues(response);
      return response;
    };
    getIssue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
