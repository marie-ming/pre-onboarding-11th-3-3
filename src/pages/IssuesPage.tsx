import { Link } from 'react-router-dom';
import { useIssue } from 'context/IssueContext';
import IssueTitle from 'components/IssueTitle';

const IssuesPage = () => {
  const { list } = useIssue();

  return (
    <div>
      {list.map((item: any) => (
        <Link to={`${item.number}`} key={item.number}>
          <IssueTitle {...item} />
        </Link>
      ))}
    </div>
  );
};

export default IssuesPage;
