import React from "react";

function Information() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <div className="w-[1300px] h-[1px] bg-gega-black text-center"></div>
      <div className="w-[1300px] flex flex-row justify-between items-start mt-10">
        <div className="font-Cairo">
          <p className="text-3xl">Kariyera</p>
          <p className="text-2xl">1998 - Davam edir</p>
        </div>
        <div className="flex flex-col max-w-[700px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            nesciunt deserunt modi sed doloremque inventore, explicabo quod est
            ducimus mollitia incidunt ipsum ratione accusantium veniam natus
            animi sunt blanditiis, suscipit impedit. Ex aperiam id similique
            iste eius iure ipsa voluptatem sed architecto quas! Dignissimos
            omnis sit reprehenderit nulla placeat esse!
          </p>
          <div>
            <div></div>
            <div className="w-[400px] h-auto">
                <img src="/sergi.jpg" alt="" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
