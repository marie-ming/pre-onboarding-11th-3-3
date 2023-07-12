import { useEffect } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import { GetIssues } from 'apis/issues';
import { useIssue } from 'context/IssueContext';
import Header from 'components/Header';

export async function loader() {
  const issues = await GetIssues();
  return { issues };
}

function App() {
  const { issues }: any = useLoaderData();
  const { saveIssues } = useIssue();

  console.log(issues);

  useEffect(() => {
    saveIssues(issues);
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
