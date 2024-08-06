const AddEditUsers = () => {
  return (
    <div className="flex justify-center w-1/2 flex-wrap">
      <h1 className="font-bold text-xl mb-4 mt-4">اضافه / ویرایش کاربران</h1>
      <div className="bg-slate-100 w-11/12 rounded-lg mb-6 py-3">
        <div className="mx-4">
          <label htmlFor="#">نام:</label>
          <input
            type="text"
            className="w-full h-10 border mt-1 rounded px-4 mb-4 bg-gray-50"
          />
        </div>
        <div className="mx-4">
          <label htmlFor="#">نام خانوادگی:</label>
          <input
            type="text"
            className="w-full h-10 border mt-1 rounded px-4 mb-4 bg-gray-50"
          />
        </div>
        <div className="mx-4">
          <label htmlFor="#">شماره موبایل:</label>
          <input
            type="text"
            className="w-full h-10 border mt-1 rounded px-4 mb-4 bg-gray-50"
          />
        </div>
        <div className="mx-4">
          <label htmlFor="#">نسبت:</label>
          <input
            type="text"
            className="w-full h-10 border mt-1 rounded px-4 mb-4 bg-gray-50"
          />
        </div>
        <div className="mx-4">
          <label htmlFor="#">ایمیل:</label>
          <input
            type="text"
            className="w-full h-10 border mt-1 rounded px-4 bg-gray-50"
          />
        </div>
        <button className="bg-green-400 px-6 py-3 rounded-lg mt-6 mr-5 mb-2 hover:bg-green-500">اضافه کردن</button>
      </div>
    </div>
  );
};

export default AddEditUsers;
