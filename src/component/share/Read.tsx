import { BookType } from '@/BookType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiBookOpen, BiCalendar } from 'react-icons/bi';
import { FaUserSecret } from 'react-icons/fa';

const Read = ({ readBook }: { readBook :BookType}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-md border mb-10 border-gray-100 rounded-3xl p-6 ">
      {/* Left Side: Soft Image Box Container */}
      <figure className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center relative w-full lg:w-64 h-64 shrink-0">
        <Image
          src={readBook.image}
          alt="The Catcher in the Rye"
          fill
          className="object-contain p-4"
        />
      </figure>

      {/* Right Side: Content */}
      <div className="card-body p-0 lg:pl-8 flex flex-col justify-between  mt-4 lg:mt-0">
        <div>
          {/* Title & Author */}
          <h2 className="card-title text-2xl font-extrabold text-gray-900 mb-1">
            {readBook.bookName}
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            By :{" "}
            <span className="font-medium text-gray-700">{readBook.author}</span>
          </p>

          {/* Tags & Year Row */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
            <span className="font-semibold text-gray-900">Tag</span>
            <div className="">
              {readBook.tags.map((item, index) => (
                <span
                  key={index}
                  className="badge badge-sm bg-emerald-50 text-emerald-600 border-0 px-3 py-3 font-medium"
                >
                  {" "}
                  {item}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <BiCalendar className="w-4 h-4" />
              <span>Year of Publishing:{readBook.yearOfPublishing}</span>
            </div>
          </div>

          {/* Publisher & Pages Row */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <FaUserSecret className="w-4 h-4" />
              <span>
                Publisher:{" "}
                <strong className="text-gray-800">{readBook.publisher}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BiBookOpen className="w-4 h-4" />
              <span>
                Page{" "}
                <strong className="text-gray-800">{readBook.totalPages}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Footer Divider & Actions */}
        <div className="border-t border-gray-100 pt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Category Badge */}
            <span className="badge bg-blue-50 text-blue-600 border-0 px-4 py-3 font-medium text-sm">
              Category: {readBook.category}
            </span>
            {/* Rating Badge */}
            <span className="badge bg-amber-50 text-amber-600 border-0 px-4 py-3 font-medium text-sm flex items-center gap-1">
              Rating:{readBook.rating}
            </span>
          </div>

          {/* View Details Button */}
          <Link
            href={`BookList/${readBook.bookId}`}
            className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-0 px-6 rounded-full font-semibold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Read;
