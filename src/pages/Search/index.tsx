import { useState } from 'react';
import { makeRequest } from 'core/utils/request';
import './styles.scss';
import { UserGitHub } from 'core/type/UserGitHub';
import UserDetails from './components/UserDetails';

type FormState = {
  name: string;
}


const Search = () => {

  const [user, setUser] = useState<UserGitHub>();
  const [formData, setFormData] = useState<FormState>({ name: '' });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data => ({ ...data, [name]: value }));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    makeRequest({ url: formData.name })
      .then(resp => setUser(resp.data));
  }

  return (
    <>
      <div className="search-container" >
        <div className="search-card">
          <div className="search-title"><b>Encontre um perfil GitHub</b></div>
          <form onSubmit={handleSubmit}>
            <input
              value={formData.name}
              type="text"
              name="name"
              placeholder="Usuário Github"
              onChange={handleOnChange}
            />
            <br />
            <button>Encontrar</button>
          </form>
        </div>
      </div>
      <UserDetails></UserDetails>
    </>
  );
}

export default Search;

