import Search from "./Search";
import UserCart from "./UserCart/UserCart";

const UsersList = () => {
  return (
    <div className="flex justify-center w-1/2 flex-wrap content-start">
      <div className="flex items-baseline mb-6 mt-4">
        <h1 className="font-bold text-xl ml-6">لیست کاربران</h1>
        <Search />
      </div>
      <div className="bg-slate-100 w-11/12 rounded-lg mb-6">
        <UserCart />
      </div>
    </div>
  );
};

export default UsersList;
