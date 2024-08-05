import AddEditUsers from "./components/AddEditUsers/AddEditUsers";
import UsersList from "./components/UsersList/UsersList";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <div className="flex justify-between">
        <AddEditUsers />
        <UsersList />
      </div>
    </Layout>
  );
}

export default App;
