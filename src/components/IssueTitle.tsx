import { IssueType } from 'interface/type';

const IssueTitle = (item: IssueType) => {
  const { number, title, userName, updated_at, comments } = item;
  return (
    <>
      <div>
        {number} {title} {comments}
      </div>
      <div>
        작성자 : {userName}, 작성일 : {updated_at}
      </div>
    </>
  );
};

export default IssueTitle;
