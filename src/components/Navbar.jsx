import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between pt-8">
      <div className="font-mono">Johnatan Specter</div>
      <div className="space-x-8 font-sans text-gray-400">
        <a>Articles</a>
        <a>Chats</a>
        <a>Awards</a>
        <a>About</a>
      </div>
      <div className="bg-[#FFFF00] text-black p-2">
        <button>Get in touch</button>
      </div>
    </div>
  );
};

export default Navbar;
