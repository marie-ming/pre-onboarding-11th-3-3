import { useIssue } from 'context/IssueContext';
import IssueTitle from 'components/IssueTitle';
import styled from 'styled-components';

const IssueDetailPage = () => {
  const { anIssue } = useIssue();

  return (
    <ContainerStyle>
      <HeaderStyle>
        <img src={anIssue.avatar_url} alt="avatar" />
        <IssueTitle {...anIssue} />
      </HeaderStyle>
      <BodyStyle>{anIssue.body}</BodyStyle>
    </ContainerStyle>
  );
};

export default IssueDetailPage;

const ContainerStyle = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
`;
const HeaderStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: 60px;
    height: 60px;
    margin: 0.2rem 0.8rem;
  }
`;
const BodyStyle = styled.div`
  width: 100%;
  padding: 1rem;
`;
