import React from 'react';
import HeaderGradient from "../assets/HeaderGradient.png";
import Header from '../components/Header';
import Footer from '../components/Footer';
const bookCovers = [
  '/src/assets/books/book1.png',
  '/src/assets/books/book2.jpg',
  '/src/assets/books/book3.jpg',
  '/src/assets/books/book4.jpg',
  '/src/assets/books/book5.jpg',
  '/src/assets/books/book6.jpg',
  '/src/assets/books/book7.jpg',
  '/src/assets/books/book8.jpg',
  '/src/assets/books/book9.png',
  '/src/assets/books/book10.jpg',
  '/src/assets/books/book11.jpg',
  '/src/assets/books/book12.jpg',
  '/src/assets/books/book13.jpg',
  '/src/assets/books/book14.jpg',
  '/src/assets/books/book15.jpg',
  '/src/assets/books/book16.jpg',
  '/src/assets/books/book17.png',
  '/src/assets/books/book18.jpg',
  '/src/assets/books/book19.jpg',
  '/src/assets/books/book20.jpg',
  '/src/assets/books/book21.jpg',
  '/src/assets/books/book22.png',
  '/src/assets/books/book23.jpg',
  '/src/assets/books/book24.jpg',
  '/src/assets/books/book25.png',
  '/src/assets/books/book26.jpg',
  '/src/assets/books/book27.jpg',
  '/src/assets/books/book28.jpg',
];

const Bookshelf = () => {
  return (
    <section
    style={{
        backgroundImage: `url(${HeaderGradient})`,
        backgroundPosition: "top center",
				 backgroundSize: "100% 600px",
        
      }}
      className={`bg-[#fbfbfb] dark:bg-[#131313] flex-1 flex flex-col items-center justify-center text-gray-900 dark:text-white bg-[center_top] lg:bg-[left_top] bg-no-repeat bg-cover`}
    >
      <div>
        <Header />
      </div>

    <div className="min-h-screen mb-6  text-black  dark:text-white mt-20 md:mt-32 px-4 md:px-8  xl:px-36 2xl:px-64 transition-colors ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Bookshelf</h1>
       <p className="text-customgray50 mb-12 text-lg">
  Books and pieces of wisdom I’ve enjoyed reading.
</p>



        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {bookCovers.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded shadow-lg hover:scale-105 transition-transform "
            >
              <img
                src={src}
                alt={`Book ${index + 1}`}
                className="w-[170px] h-[263px] md:w-full lg:w-[215px] md:h-full lg:h-[333px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </section>
  );
};

export default Bookshelf;
