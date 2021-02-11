import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (
  <div className="home-container" >
    <div className="home-card">
      <h1 className="home-title">
        Desafio do Capítulo 3, <br />
        Bootcamp DevSuperior
      </h1>
      <div className="home-text">
        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/><br/>
        Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br/><br/>
        Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <a href="mailto:antforfigma@gmail.com">antforfigma@gmail.com</a>
        <br/><br/>
        
        <Link to="/search">
          <button>Começar</button>
        </Link>
        
      </div>
    </div>
  </div>
);

export default Home;

