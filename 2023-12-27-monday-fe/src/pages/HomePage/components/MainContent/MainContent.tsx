import React from "react";

// RecentlyVisited component
const RecentlyVisited: React.FC = () => {
    return (
      <div className="bg-purple-200 p-4 shadow rounded-lg mb-4">
        {/* Danh sách các bảng đã truy cập gần đây */}
        Danh sách các bảng đã truy cập gần đây
      </div>
    );
  };
  
  // UpdateFeed component
  const UpdateFeed: React.FC = () => {
    return (
      <div className="bg-yellow-200 p-4 shadow rounded-lg mb-4">
        {/* Feed cập nhật hoặc inbox thông báo */}
        Feed cập nhật hoặc inbox thông báo
      </div>
    );
  };
  
  // CompleteProfileCard component
  const CompleteProfileCard: React.FC = () => {
    return (
      <div className="bg-pink-200 p-4 shadow rounded-lg mb-4">
        {/* Khuyến khích hoàn thiện hồ sơ */}
        Khuyến khích hoàn thiện hồ sơ
      </div>
    );
  };
  
  // TemplateGallery component
  const TemplateGallery: React.FC = () => {
    return (
      <div className="bg-orange-200 p-4 shadow rounded-lg mb-4">
        {/* Hiển thị các template */}
        Hiển thị các template
      </div>
    );
  };

const MainContent: React.FC = () => {
  return (
    <main className="flex-grow p-4 bg-red-200">
      <RecentlyVisited />
      <UpdateFeed />
      <CompleteProfileCard />
      <TemplateGallery />
    </main>
  );
};

export default React.memo(MainContent);
