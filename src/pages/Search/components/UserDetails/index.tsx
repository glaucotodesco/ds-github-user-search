import React from 'react';
import './styles.scss';

const UserDetails = () => {
  return (
    <div className="user-details-container">
      <div className="col col-1">
        <img src="img.png" alt="Avatar" className="user-avatar" />
        <br />
        <button>Ver Perfil</button>
      </div>
      <div className="col col-2">
        <div className="user-statistic-card">
          <div className="user-statistic">Repositórios: 10</div>
          <div className="user-statistic">Seguidores: 100</div>
          <div className="user-statistic">Seguindo: 323</div>
        </div>
        <div className="user-information-card">
              <div className="user-informations-title">Informações</div>
              <div className="user-information-row">
                <b>Empresa:&nbsp;</b> @ZupIT
              </div>
              <div className="user-information-row">
                <b>Website/Blog:&nbsp;</b>https://thewashington.dev
              </div>
              <div className="user-information-row">
                <b>Localidade:&nbsp;</b>Sorocaba
              </div>
              <div className="user-information-row">
                <b>Membro desde:&nbsp;</b>19/10/2013
              </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;


