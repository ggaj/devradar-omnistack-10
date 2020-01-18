import React, {useState,useEffect} from 'react';
import { Form, Input } from '@rocketseat/unform';

import Dev from "../../components/Dev";
import api from "../../services/api";

import { Container } from './styles';

export default function Main() {
  const [initialData, setInitialData] = useState({})
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await api.get('/devs')
    setUsers(response.data)
  }


  useEffect(() => {
    getUsers();

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        setInitialData({latitude, longitude})
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  },[])

  const handleSubmit = async data =>{
    const response = await api.post('/devs', data)

    setUsers([...users, response.data])

    setInitialData({
      // github_username: '',
      // techs: ''
      // latitude: initialData.latitude,
      // longitude: initialData.longitude
    })
  }

  return (
    <Container>
      <aside>
        <strong>Cadastrar</strong>
        <Form onSubmit={handleSubmit} initialData={initialData}>
          <Input name="github_username" label="Usuário do Github" required/>
          <Input name="techs" label="Tecnologias" required/>

          <div className="input-group">
            <div className="input">
              <Input name="latitude" label="Latitude" required/>
            </div>
            <div className="input">
              <Input name="longitude" label="Longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </Form>
      </aside>

      <main>
        <ul>
          {users.map(user => (
            <Dev user={user} key={user._id}/>
          ))}
        </ul>
      </main>
    </Container>
  );
}
