import { useState } from "react";
import AddEditUsers from "../components/AddEditUsers/AddEditUsers";
import UsersList from "../components/UsersList/UsersList";
import Layout from "../layout/Layout";
import { CartData } from "../data/CartData";
import { User } from "../types/User";

const Contact: React.FC = () => {
  const [users, setUsers] = useState<User[]>(CartData);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

  const handleAddUser = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  const handleEditUser = (updatedUser: User) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setUserToEdit(null);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEditClick = (user: User) => {
    setUserToEdit(user);
  };

  return (
    <Layout>
      <div className="flex justify-between">
        <AddEditUsers
          onAddUser={handleAddUser}
          onEditUser={handleEditUser}
          userToEdit={userToEdit}
        />
        <UsersList
          users={users}
          onDeleteUser={handleDeleteUser}
          onEditUser={handleEditClick}
        />
      </div>
    </Layout>
  );
};

export default Contact;
