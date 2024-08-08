type Cart = {
  name: string;
  lastName: string;
  phone: number;
  relate: string;
  email: string;
  id: number;
  deleteAction: () => void;
  editAction: () => void;
};

const UserCart = ({ name, lastName, phone, relate, email, id, deleteAction, editAction }: Cart) => {
  return (
    <div className="bg-slate-300 w-5/12 m-4 rounded-xl py-5 px-8" key={id}>
      <div className="mb-1">نام: {name} {lastName}</div>
      <div className="mb-1">شماره تماس: {phone}</div>
      <div className="mb-1">نسبت: {relate}</div>
      <div>ایمیل: {email}</div>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-tr-md rounded-br-md" onClick={editAction}>ویرایش</button>
        <button className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded-tl-md rounded-bl-md" onClick={deleteAction}>حذف</button>
      </div>
    </div>
  );
};

export default UserCart;
