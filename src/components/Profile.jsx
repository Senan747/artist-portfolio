import React from "react";

function Profile() {
  return (
    <div className="w-full flex items-center justify-center flex-wrap pt-28">
      <div className="bg-gega-green flex flex-row items-center max-md:flex-col max-md:gap-3 justify-between p-10 max-md:p-5 m-20">
        <div className="bg-gega-white rounded-[30px] p-10">
          <div className="pb-5 flex flex-row items-center">
            <img
              src="/artist.jpg"
              alt=""
              className="rounded-50 w-[50px] h-[50px] mr-3 max-md:w-[30px] max-md:h-[30px]"
            />
            <p className="font-semibold text-lg max-md:hidden">Rəssam</p>
            <p className="font-semibold hidden text-base max-md:block">
              İntiqam Ağayev
            </p>
          </div>
          <div className="w-[300px] max-md:w-[200px]">
            <img src="/profile.webp" alt="" className="w-full h-auto" />
          </div>
        </div>
        <div className="ml-10">
          <h1 className="font-Pacifico text-5xl text-gega-white pb-10 max-md:hidden">
            İntiqam Ağayev
          </h1>
          <p className="text-gega-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
            esse? Totam quam quia architecto, libero nam omnis, doloribus
            assumenda nemo delectus sequi alias quaerat accusamus unde nulla?
            Atque expedita ea officiis delectus quis aliquid cupiditate
            laudantium dolorum voluptate corporis modi nulla necessitatibus
            adipisci beatae nam, quidem sunt obcaecati facilis maiores. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quis maxime
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
