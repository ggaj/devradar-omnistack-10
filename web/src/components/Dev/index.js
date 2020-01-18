import React from 'react';

import { Container } from './styles';

export default function Dev({user}) {
  return (
    <Container>
      <header>
        <img src={user.avatar_url} alt={user.name}/>
        <div className="user-info">
          <strong>{user.name}</strong>
          <span>{user.techs.join(', ')}</span>
        </div>
      </header>
      <p>{user.bio || ''}</p>
      <a href={`https://github.com/${user.github_username}`}>Acessar perfil no Github</a>
    </Container>
  );
}
