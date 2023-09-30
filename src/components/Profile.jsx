import React from "react";

function Profile() {
  return (
    <div className="max-w-[1200px] flex flex-row justify-around my-10">
      <div className="w-[400px]">
        <img src="/profile.webp" alt="" className="w-full h-full" />
      </div>
      <div>
        <h1 className="font-Pacifico text-7xl">İntiqam ağayev</h1>
      </div>
    </div>
  );
}

export default Profile;
