import { Outlet, useLoaderData } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import { GetIssues } from 'apis/issues';

export async function loader() {
  const issues = await GetIssues();
  return { issues };
}

function App() {
  const { issues }: any = useLoaderData();
  console.log(issues);

  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
