import { ORGANIZATION, REPOSITORY } from 'apis/instance';

const Header = () => {
  return (
    <div>
      {ORGANIZATION}/{REPOSITORY}
    </div>
  );
};

export default Header;
