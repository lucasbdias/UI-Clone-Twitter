import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
          <EditButton outlined>Editar Perfil</EditButton>
          <h1>Lucas Braz Dias</h1>
          <h2>@lucasbdias</h2>

          <p>
            <a href="#">Lorem ipsum</a> dolor sit amet consectetur adipisicing elit. Ipsam quidem explicabo accusamus corporis fugit atque exercitationem, fuga architecto provident, ea iusto eius tenetur distinctio quaerat dolore nemo debitis. Sequi, quod?
          </p>

          <ul>
            <li>
              <LocationIcon />
              São Paulo, Brasil
            </li>

            <li>
              <CakeIcon />
              Nascido(a) em 21 de junho 2001
            </li>
          </ul>

          <Followage>
            <span>
              Seguindo <strong>24</strong>
            </span>
            <span>
              <strong>69 </strong> Seguidores
            </span>
          </Followage>          
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;