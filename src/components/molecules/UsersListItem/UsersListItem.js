import React, { useContext } from 'react';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import Average from 'components/atoms/Average/Average';
import { Wrapper, Container, Name, Attendance } from './UsersListItem.styles';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <Average average={average}>{average}</Average>
      <Container>
        <Name>{name}</Name>
        <Attendance>attendance: {attendance}</Attendance>
      </Container>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

export default UsersListItem;
