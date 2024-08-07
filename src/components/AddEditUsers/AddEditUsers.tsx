import { useState } from "react";
import { User } from "../../types/User";

interface AddEditUsersProps {
  onAddUser: (newUser: User) => void;
}

const AddEditUsers: React.FC<AddEditUsersProps> = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [relate, setRelate] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleAddUser = () => {
    if (!name || !lastName || !phone || !relate || !email) {
      setError("لطفا همه فیلدها را پر کنید.");
      return;
    }

    const newUser: User = {
      id: Date.now(),
      name,
      lastName,
      phone: Number(phone),
      relate,
      email
    };

    onAddUser(newUser);

    // Clear form
    setName("");
    setLastName("");
    setPhone("");
    setRelate("");
    setEmail("");
    setError("");
  };

  return (
    <div className="flex justify-center w-1/2 flex-wrap content-start">
      <h1 className="font-bold text-xl mb-4 mt-4">اضافه / ویرایش کاربران</h1>
      <div className="bg-slate-100 w-11/12 rounded-lg mb-6 py-3">
        <div className="mx-4">
          <label htmlFor="name">نام:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-10 border mt-1 rounded px-4 mb-4 bg-gray-50"
          />
        </div>
        <div className="mx-4">
          <label htmlFor="lastName">نام خانوادگی:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full h-10 border mt-1 rounded px-4 mb-4 bg-gray-50"
          />
        </div>
        <div className="mx-4">
          <label htmlFor="phone">شماره موبایل:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full h-10 border mt-1 rounded px-4 mb-4 bg-gray-50"
          />
        </div>
        <div className="mx-4">
          <label htmlFor="relate">نسبت:</label>
          <input
            type="text"
            value={relate}
            onChange={(e) => setRelate(e.target.value)}
            className="w-full h-10 border mt-1 rounded px-4 mb-4 bg-gray-50"
          />
        </div>
        <div className="mx-4">
          <label htmlFor="email">ایمیل:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 border mt-1 rounded px-4 bg-gray-50"
          />
        </div>
        {error && (
          <div className="mx-4 mb-4 text-red-500">
            {error}
          </div>
        )}
        <button
          onClick={handleAddUser}
          className="bg-green-400 px-6 py-3 rounded-lg mt-6 mr-5 mb-2 hover:bg-green-500"
        >
          اضافه کردن
        </button>
      </div>
    </div>
  );
};

export default AddEditUsers;
