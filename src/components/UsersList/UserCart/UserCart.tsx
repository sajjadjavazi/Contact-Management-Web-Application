const UserCart = () => {
  return (
    <div className="bg-slate-300 w-5/12 m-4 rounded-xl py-5 px-8">
      <div>نام:</div>
      <div>شماره تماس:</div>
      <div>نسبت:</div>
      <div>ایمیل:</div>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-tr-md rounded-br-md">ویرایش</button>
        <button className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded-tl-md rounded-bl-md">حذف</button>
      </div>
    </div>
  );
};

export default UserCart;
