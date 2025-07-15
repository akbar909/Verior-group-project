import React from 'react';

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
    <div className="min-h-screen bg-black text-white px-4 py-12 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Bookshelf</h1>
        <p className="text-gray-400 mb-12 text-lg">
          Books and pieces of wisdom I’ve enjoyed reading.
        </p>

        {/* ✅ 4 columns max */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {bookCovers.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Book ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
