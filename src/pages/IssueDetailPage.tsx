import { useIssue } from 'context/IssueContext';
import IssueTitle from 'components/IssueTitle';

const IssueDetailPage = () => {
  const { anIssue } = useIssue();

  return (
    <div>
      이슈디테일
      <img src={anIssue.avatar_url} alt="avatar" width={50} height={50} />
      <IssueTitle {...anIssue} />
      <div>{anIssue.body}</div>
    </div>
  );
};

export default IssueDetailPage;
