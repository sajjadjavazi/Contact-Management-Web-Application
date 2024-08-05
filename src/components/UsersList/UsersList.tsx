import UserCart from "./UserCart/UserCart";

const UsersList = () => {
  return (
    <div className="flex justify-center w-1/2 flex-wrap content-start">
      <h1 className="font-bold text-xl mb-4 mt-4">لیست کاربران</h1>
      <div className="bg-slate-100 w-11/12 rounded-lg mb-6">
      <UserCart />
      </div>
    </div>
  );
};

export default UsersList;
