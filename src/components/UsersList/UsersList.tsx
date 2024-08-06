import { useState } from "react";
import Search from "./Search";
import UserCart from "./UserCart/UserCart";
import { CartData } from "../../data/CartData";

const UsersList = () => {
  const [finalSearchValue, setFinalSearchValue] = useState("ali");

  const handleSearch = (value: string) => {
    setFinalSearchValue(value);
  };

  const filteredData = CartData.filter(
    (item) =>
      item.name.toLowerCase().includes(finalSearchValue.toLowerCase()) ||
      item.lastName.toLowerCase().includes(finalSearchValue.toLowerCase())
  );

  return (
    <div className="flex justify-center w-1/2 flex-wrap content-start overflow-y-auto h-96">
      <div className="flex items-baseline mb-6 mt-4">
        <h1 className="font-bold text-xl ml-6">لیست کاربران</h1>
        <Search onSearch={handleSearch} />
      </div>
      <div className="bg-slate-100 w-11/12 rounded-lg mb-6 flex flex-wrap">
        {filteredData.length > 0 ? (
          filteredData.map((cart) => (
            <UserCart
              key={cart.id}
              name={cart.name}
              lastName={cart.lastName}
              phone={cart.phone}
              relate={cart.relate}
              email={cart.email}
            />
          ))
        ) : (
          <div className="w-full text-center py-4">
            <p className="text-red-500">مخاطب مورد نظر شما یافت نشد.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersList;
