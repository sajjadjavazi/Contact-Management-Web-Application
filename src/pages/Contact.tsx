import { useState } from "react";
import AddEditUsers from "../components/AddEditUsers/AddEditUsers";
import UsersList from "../components/UsersList/UsersList";
import Layout from "../layout/Layout";
import { CartData } from "../data/CartData";
import { User } from "../types/User";

const Contact: React.FC = () => {
    const [users, setUsers] = useState<User[]>(CartData);

    const handleAddUser = (newUser: User) => {
        setUsers([...users, newUser]);
    };

    const handleDeleteUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <Layout>
            <div className="flex justify-between">
                <AddEditUsers onAddUser={handleAddUser} />
                <UsersList users={users} onDeleteUser={handleDeleteUser} />
            </div>
        </Layout>
    );
};

export default Contact;
