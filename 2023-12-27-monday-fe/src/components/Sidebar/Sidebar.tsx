import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-blue-200 p-5">
      {/* Các thành phần của Sidebar ở đây */}
      Sidebar đây nè
    </aside>
  );
};

export default React.memo(Sidebar);
