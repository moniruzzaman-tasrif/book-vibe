import React from 'react';
import Banar from "../../assets/pngwing 1.png"
import Image from 'next/image';

const BanarArea = () => {
  return (
    <div className="card card-side justify-evenly items-center shadow-sm max-w-300 mx-auto mt-4 py-20 px-6 bg-[#F3F3F3]">
      <div className="card-body">
        <h2 className="card-title text-5xl font-bold leading-20 ">
          Books to freshen up <br /> your bookshelf
        </h2>

        <div className="card-actions mt-10">
          <button className="btn bg-[#23BE0A] text-white p-5">
            View The List
          </button>
        </div>
      </div>
      <figure>
        <Image src={Banar} alt="Movie" width={700} height={500} className=" rounded-2xl w-[300]" />
      </figure>
    </div>
  );
};

export default BanarArea;
