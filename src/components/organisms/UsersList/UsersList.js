import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add user:</StyledTitle>
        <FormField
          label="Name"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          label="Attendance"
          id="attendance"
          name="attendance"
          value={formValues.attendance}
          onChange={handleInputChange}
        />
        <FormField
          label="Average"
          id="average"
          name="average"
          value={formValues.average}
          onChange={handleInputChange}
        />
        <Button type="submit">Add</Button>
      </Wrapper>
      <Wrapper>
        <StyledTitle>Users list:</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem
              deleteUser={deleteUser}
              key={userData.name}
              userData={userData}
            />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
