import { Link } from 'react-router-dom';
import { useIssue } from 'context/IssueContext';

const IssuesPage = () => {
  const { list } = useIssue();

  return (
    <div>
      {list.map((item: any) => (
        <Link to={`${item.number}`} key={item.number}>
          <div>
            {item.number} {item.title} {item.comments}
          </div>
          <div>
            작성자 : {item.userName}, 작성일 : {item.updated_at}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default IssuesPage;
