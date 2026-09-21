import { BookType } from '@/BookType';
import Image from 'next/image';
import React from 'react';
import Button from '../share/button';
interface detaildata {
  detailsData:BookType
}

const Bookdetails = ({detailsData}:detaildata) => {
  return (
    <div className="min-h-screen bg-base-100 p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Soft Image Box Container */}
        <div className="bg-gray-100 rounded-2xl p-10 flex items-center justify-center relative h-[500px]">
          <Image
            src={detailsData.image}
            alt={detailsData.bookName}
            fill
            className="object-contain p-6"
            priority
          />
        </div>

        {/* Right Side: Book Information */}
        <div className="flex flex-col justify-start">
          {/* Title & Author */}
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">
            {detailsData.bookName}
          </h1>
          <p className="text-gray-500 text-sm mb-4">
            By :{" "}
            <span className="font-medium text-gray-700">
              {detailsData.author}
            </span>
          </p>

          <div className="divider my-1"></div>

          {/* Category */}
          <p className="text-gray-700 font-medium my-2">
            {detailsData.category}
          </p>

          <div className="divider my-1"></div>

          {/* Review / Description */}
          <p className="text-gray-600 text-sm leading-relaxed my-3">
            <span className="font-bold text-gray-900">Review : </span>
            {detailsData.review}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-3 my-4">
            <span className="text-sm font-bold text-gray-900">Tag</span>
            <div className="flex items-center gap-2">
              {detailsData.tags.map(tag => (
                <span
                  key={tag}
                  className="badge badge-sm bg-emerald-50 text-emerald-600 border-0 px-3 py-3 font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="divider my-1"></div>

          {/* Book Metadata List */}
          <div className="grid grid-cols-2 gap-y-3 text-sm my-4 text-gray-600">
            <div>Number of Pages:</div>
            <div className="font-bold text-gray-900">
              {detailsData.totalPages}
            </div>

            <div>Publisher:</div>
            <div className="font-bold text-gray-900">
              {detailsData.publisher}
            </div>

            <div>Year of Publishing:</div>
            <div className="font-bold text-gray-900">
              {detailsData.yearOfPublishing}
            </div>

            <div>Rating:</div>
            <div className="font-bold text-gray-900">{detailsData.rating}</div>
          </div>

          {/* Action Buttons */}
          <div className="">
            <Button BookData={detailsData}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdetails;
