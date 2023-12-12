import React from "react";

function Information() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <div className="w-[90%] h-[1px] bg-gega-black text-center"></div>
      <div className="w-[90%] flex flex-row justify-between items-start mt-10 gap-5">
        <div className="font-Cairo">
          <p className="text-3xl max-md:text-xl">Kariyera</p>
          <p className="text-2xl max-md:text-lg">1998 - Davam edir</p>
        </div>
        <div className="flex flex-col w-[70%]">
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
            <div className="w-[60%] h-auto">
              <img src="/sergi.jpg" alt="" className="w-full" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
