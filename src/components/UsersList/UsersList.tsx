import { useState } from "react";
import Search from "./Search";
import UserCart from "./UserCart/UserCart";
import { CartData } from "../../data/CartData";

interface User {
  id: number;
  name: string;
  lastName: string;
  phone: number;
  relate: string;
  email: string;
}

const UsersList = () => {
  const [contact, setContact] = useState<User[]>(CartData);
  const [finalSearchValue, setFinalSearchValue] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);

  const handleSearch = (value: string) => {
    setFinalSearchValue(value);
    setHasSearched(true);
  };

  const filteredData = contact.filter(
    (item) =>
      item.name.toLowerCase().includes(finalSearchValue.toLowerCase()) ||
      item.lastName.toLowerCase().includes(finalSearchValue.toLowerCase())
  );

  const confirmDelete = (id: number) => {
    setUserToDelete(id);
  };

  const deleteContact = () => {
    if (userToDelete !== null) {
      setContact(contact.filter((item) => item.id !== userToDelete));
      setUserToDelete(null);
    }
  };

  return (
    <div className="flex justify-center w-1/2 flex-wrap content-start overflow-y-auto h-96">
      <div className="flex items-baseline mb-6 mt-4">
        <h1 className="font-bold text-xl ml-6">لیست کاربران</h1>
        <Search onSearch={handleSearch} />
      </div>
      <div className="bg-slate-100 w-11/12 rounded-lg mb-6 flex flex-wrap">
        {hasSearched && filteredData.length === 0 ? (
          <div className="w-full text-center py-4">
            <p className="text-red-500">مخاطب مورد نظر شما یافت نشد.</p>
          </div>
        ) : (
          filteredData.map((cart) => (
            <UserCart
              deleteAction={() => confirmDelete(cart.id)}
              key={cart.id}
              name={cart.name}
              lastName={cart.lastName}
              phone={cart.phone}
              relate={cart.relate}
              email={cart.email}
            />
          ))
        )}
      </div>

      {userToDelete !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded">
            <p>آیا مطمئن هستید که می‌خواهید این کاربر را حذف کنید؟</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setUserToDelete(null)}
                className="bg-gray-400 px-4 py-2 rounded hover:bg-gray-500"
              >
                خیر
              </button>
              <button
                onClick={deleteContact}
                className="bg-red-400 px-4 py-2 rounded mx-2 hover:bg-red-500"
              >
                بله
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersList;
