import React from "react";
import { UserGitHub } from 'core/type/UserGitHub';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';


import './styles.scss';
import ImageLoader from "../Loaders/ImageLoader";
import InfoLoader from "../Loaders/InfoLoader";

type Props = {
  user: UserGitHub;
}


const UserDetails = ({user}: Props) => {
  return (
    <div className="user-details-container">
      <div className="col col-1">
       <img src={user.avatar_url} alt="Avatar" className="user-avatar" />
              <br />
              <a href={user.html_url} target="_new">
                <button>Ver Perfil</button>
              </a>
      </div>
      <div className="col col-2">
              <div className="user-statistic-card">
                <div className="user-statistic">Repositórios: {user.public_repos}</div>
                <div className="user-statistic">Seguidores: {user.followers}</div>
                <div className="user-statistic">Seguindo: {user.following}</div>
              </div>
              <div className="user-information-card">
                <div className="user-informations-title">Informações</div>
                <div className="user-information-row">
                  <b>Empresa:&nbsp;</b> {user.company}
                </div>
                <div className="user-information-row">
                  <b>Website/Blog:&nbsp;</b> {user.blog}
                </div>
                <div className="user-information-row">
                  <b>Localidade:&nbsp;</b> {user.location}
                </div>
                <div className="user-information-row">
                  <b>Membro desde:&nbsp;</b> {dayjs(user.created_at).format('DD/MM/YYYY')}
                </div>
              </div>
      </div>
    </div>
  );
}

export default UserDetails;


