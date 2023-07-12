import { useParams } from 'react-router-dom';
import { useIssue } from 'context/IssueContext';
import IssueTitle from 'components/IssueTitle';

const IssueDetailPage = () => {
  const { id } = useParams();
  const { list } = useIssue();

  const issueDetail = list.filter((item: any) => item.number === Number(id));

  return (
    <div>
      이슈디테일
      <img
        src={issueDetail[0].avatar_url}
        alt="avatar"
        width={50}
        height={50}
      />
      <IssueTitle {...issueDetail[0]} />
      <div>{issueDetail[0].body}</div>
    </div>
  );
};

export default IssueDetailPage;
