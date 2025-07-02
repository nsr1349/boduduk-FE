import React from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return <div>AdminLayout{children}</div>;
};

export default AdminLayout;
