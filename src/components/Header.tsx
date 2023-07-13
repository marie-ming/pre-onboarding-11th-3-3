import { ORGANIZATION, REPOSITORY } from 'apis/instance';
import { styled } from 'styled-components';

const Header = () => {
  return (
    <HeaderStyle>
      {ORGANIZATION} / {REPOSITORY}
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  background-color: #169aff;
  color: white;
  padding: 1.2rem;
  margin-bottom: 2rem;
`;
