import { Wrapper } from './Header.styles';
import logo from '../../assets/logo_schroders.svg';

const Header = (): JSX.Element => (
  <Wrapper>
    <div>
      <img src={logo} alt="Logo Schroders" />
      <h1>Schroders</h1>
      <h2>Daniel Cherino&rsquo;s assignment</h2>
    </div>
  </Wrapper>
);

export default Header;
