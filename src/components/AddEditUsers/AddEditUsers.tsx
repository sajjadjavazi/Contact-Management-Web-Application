import { useState, useEffect } from "react";
import { User } from "../../types/User";

interface AddEditUsersProps {
  onAddUser: (user: User) => void;
  onEditUser: (user: User) => void;
  userToEdit: User | null;
}

const AddEditUsers: React.FC<AddEditUsersProps> = ({ onAddUser, onEditUser, userToEdit }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState<number | string>("");
  const [relate, setRelate] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setLastName(userToEdit.lastName);
      setPhone(userToEdit.phone);
      setRelate(userToEdit.relate);
      setEmail(userToEdit.email);
    } else {
      setName("");
      setLastName("");
      setPhone("");
      setRelate("");
      setEmail("");
    }
  }, [userToEdit]);

  const validateForm = () => {
    const errors: string[] = [];
    if (!name) errors.push("نام الزامی است.");
    if (!lastName) errors.push("نام خانوادگی الزامی است.");
    if (!phone) errors.push("شماره موبایل الزامی است.");
    if (!relate) errors.push("نسبت الزامی است.");
    if (!email) errors.push("ایمیل الزامی است.");
    setErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const newUser: User = {
        id: userToEdit ? userToEdit.id : Date.now(),
        name,
        lastName,
        phone: Number(phone),
        relate,
        email
      };

      if (userToEdit) {
        onEditUser(newUser);
      } else {
        onAddUser(newUser);
      }
      setName("");
      setLastName("");
      setPhone("");
      setRelate("");
      setEmail("");
      setErrors([]);
    }
  };

  return (
    <div className="flex justify-center w-1/2 flex-wrap content-start">
      <h1 className="font-bold text-xl mb-4 mt-4">اضافه / ویرایش کاربران</h1>
      <div className="bg-slate-100 w-11/12 rounded-lg mb-6 py-3">
        <div className="mx-4">
          <label htmlFor="name">نام:</label>
          <input
            type="text"
            className="w-full h-10 border mt-1 rounded px-4 mb-4 bg-gray-50"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mx-4">
          <label htmlFor="lastName">نام خانوادگی:</label>
          <input
            type="text"
            className="w-full h-10 border mt-1 rounded px-4 mb-4 bg-gray-50"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mx-4">
          <label htmlFor="phone">شماره موبایل:</label>
          <input
            type="text"
            className="w-full h-10 border mt-1 rounded px-4 mb-4 bg-gray-50"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mx-4">
          <label htmlFor="relate">نسبت:</label>
          <input
            type="text"
            className="w-full h-10 border mt-1 rounded px-4 mb-4 bg-gray-50"
            value={relate}
            onChange={(e) => setRelate(e.target.value)}
          />
        </div>
        <div className="mx-4">
          <label htmlFor="email">ایمیل:</label>
          <input
            type="text"
            className="w-full h-10 border mt-1 rounded px-4 bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {errors.length > 0 && (
          <div className="mx-4 text-red-500">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <div className="flex justify-end mx-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            {userToEdit ? "ویرایش" : "اضافه کردن"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditUsers;
