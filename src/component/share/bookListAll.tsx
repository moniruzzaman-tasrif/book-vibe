import React from 'react';

const BookListAll = () => {
  return (
    <div className="max-w-300 mx-auto  mb-5">
      <div className=" flex flex-col items-center">

      <h1 className="text-3xl font-bold p-7 w-full bg-[#F8F8F8] my-5 text-center rounded-2xl">
        {" "}
        Books{" "}
      </h1>

      <select
        defaultValue="Pick a font"
        className="select select-ghost border-none outline-none w-40 text-white bg-green-500  "
        >
        <option disabled={true}>Sort</option>
        <option>Rating</option>
        <option>Number of pages</option>
        <option>Publisher year</option>
      </select>
    </div>
        </div>
  );
};

export default BookListAll;
