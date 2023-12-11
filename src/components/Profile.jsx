import React from "react";

function Profile() {
  return (
    <div className="w-full flex items-center justify-center my-10 pt-28">
      <div className="w-[1200px] bg-gega-green flex flex-row justify-between p-20">
        <div className="bg-gega-white rounded-[30px] p-10">
          <div className="pb-5 flex flex-row items-center">
            <img
              src="/artist.jpg"
              alt=""
              className="rounded-50 w-[50px] h-[50px] mr-3"
            />
            <p className="font-semibold text-lg">Rəssam</p>
          </div>
          <div className="w-[400px] ">
            <img src="/profile.webp" alt="" className="w-full h-full" />
          </div>{" "}
        </div>
        <div className="ml-10">
          <h1 className="font-Pacifico text-7xl text-gega-white pb-10">
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
            voluptates eaque totam officia maiores repellendus autem. Quis autem
            explicabo vero quisquam deleniti dignissimos quia neque eum
            praesentium laboriosam, adipisci, illum harum! Velit a
            necessitatibus atque doloremque, maxime ipsum tempore aliquam
            placeat repellendus quae dolorem suscipit eos autem odit quisquam?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            maiores cumque officiis recusandae sed, neque doloribus odit
            deserunt quam sit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
