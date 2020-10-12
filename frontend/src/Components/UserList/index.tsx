import React from "react";

import {
   Container, 
   User,
   Avatar,
   Role,
  } from "./styles";

interface  UserProps {
  nickname: string;
  isBot ?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot': ''}/>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 2</Role>
      <UserRow nickname="Takuya" />
      <UserRow nickname="Rythm" isBot/>
      
      <Role>Offline - 2</Role>
      <UserRow nickname="Gabriel Jesus" />
      <UserRow nickname="Batimã" />
      <UserRow nickname="Jorge" />
      <UserRow nickname="Jorge" />
      <UserRow nickname="Jorge" />
      <UserRow nickname="Jorge" />
    </Container>
  );
};

export default UserList;
