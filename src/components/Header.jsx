import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400 p-2">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight dark:text-gray-400 text-slate-900 p-2">{title}</p>
    </div>
  );
};

export default Header;