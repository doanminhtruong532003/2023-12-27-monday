import React from "react";
import { NavLink } from "react-router-dom";

const ErrorTemplate: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Lỗi 404</h1>
        <p className="text-gray-600">Trang bạn đang tìm kiếm không tồn tại.</p>
        <NavLink
          to="/"
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Quay lại Trang Chính
        </NavLink>
      </div>
    </div>
  );
};

export default React.memo(ErrorTemplate);
