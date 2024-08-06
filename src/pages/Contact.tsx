import AddEditUsers from "../components/AddEditUsers/AddEditUsers";
import UsersList from "../components/UsersList/UsersList";
import Layout from "../layout/Layout";

const Contact = () => {
    return (
        <Layout>
            <div className="flex justify-between">
                <AddEditUsers />
                <UsersList />
            </div>
        </Layout>
    );
}

export default Contact;
