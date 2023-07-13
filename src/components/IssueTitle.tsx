import { IssueType } from 'interface/type';
import styled from 'styled-components';

const IssueTitle = (item: IssueType) => {
  const { number, title, userName, updated_at, comments } = item;
  return (
    <ContainerStyle>
      <TitleStyle>
        <span className="title">
          #{number} {title}
        </span>
        <span className="comments">코멘트 : {comments}</span>
      </TitleStyle>
      <NameDateStyle>
        작성자 : {userName}, 작성일 : {updated_at.split('T')[0]}
      </NameDateStyle>
    </ContainerStyle>
  );
};

export default IssueTitle;

const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.8rem 1rem 0.8rem;
  border-bottom: 1px solid black;
`;

const TitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .title {
    font-size: 1.1rem;
  }
  .comments {
    font-size: 0.9rem;
  }
`;

const NameDateStyle = styled.div`
  font-size: 0.8rem;
  color: gray;
  margin-top: 0.8rem;
`;
