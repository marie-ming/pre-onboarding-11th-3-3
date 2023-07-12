import { useParams } from 'react-router-dom';

const IssueDetailPage = () => {
  const { id } = useParams();
  return <div>이슈디테일{id}</div>;
};

export default IssueDetailPage;
