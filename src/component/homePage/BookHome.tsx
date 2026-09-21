import { BookType } from "@/BookType";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";

const BookHomePage = async (): Promise<BookType[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");
  return res.json();
};
const BookHome = async () => {
  const BookData = await BookHomePage();

  return (

    <div className="mb-15">
      <h1 className="text-4xl text-center py-10"> Book </h1>
      <div className=" grid grid-cols-3 gap-7 max-w-300 mx-auto">
        {BookData.map((item: BookType) => {
          return (
            <div className=" " key={item.bookId}>
              <Link href={`BookList/${item.bookId}`}>
                <div className="  bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition hover:shadow-xl">
                  {/* Image Container */}
                  <div className="p-5 pb-0">
                    <div className="bg-gray-100 rounded-xl w-full h-56 flex items-center justify-center relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt="Why Do You Hate Money?"
                        fill
                        className="object-contain p-6"
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Tags / Badges */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="badge badge-sm bg-emerald-50 text-emerald-600 border-0 px-3 py-2 font-medium">
                        {item.tags[0]}
                      </span>
                      <span className="badge badge-sm bg-emerald-50 text-emerald-600 border-0 px-3 py-2 font-medium">
                        {item.tags[1]}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-extrabold text-gray-900 leading-tight mb-1">
                      {item.bookName}
                    </h2>

                    {/* Author */}
                    <p className="text-gray-500 text-sm mb-5">
                      By :{" "}
                      <span className="font-medium text-gray-700">
                        {item.author}
                      </span>
                    </p>

                    {/* Footer Section */}
                    <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-sm">
                      <span className="text-gray-600 font-medium">
                        {item.category}
                      </span>

                      <div className="flex items-center gap-2 text-gray-800 font-semibold">
                        <div className="flex items-center gap-1">
                          <span>{item.rating}</span>
                          <CiStar className="h-5 w-5 text-amber-400 fill-amber-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookHome;
