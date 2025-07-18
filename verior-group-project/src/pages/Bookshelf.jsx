import book1 from '../assets/books/book1.png';
import book10 from '../assets/books/book10.jpg';
import book11 from '../assets/books/book11.jpg';
import book12 from '../assets/books/book12.jpg';
import book13 from '../assets/books/book13.jpg';
import book14 from '../assets/books/book14.jpg';
import book15 from '../assets/books/book15.jpg';
import book16 from '../assets/books/book16.jpg';
import book17 from '../assets/books/book17.png';
import book18 from '../assets/books/book18.jpg';
import book19 from '../assets/books/book19.jpg';
import book2 from '../assets/books/book2.jpg';
import book20 from '../assets/books/book20.jpg';
import book21 from '../assets/books/book21.jpg';
import book22 from '../assets/books/book22.png';
import book23 from '../assets/books/book23.jpg';
import book24 from '../assets/books/book24.jpg';
import book25 from '../assets/books/book25.png';
import book26 from '../assets/books/book26.jpg';
import book27 from '../assets/books/book27.jpg';
import book28 from '../assets/books/book28.jpg';
import book3 from '../assets/books/book3.jpg';
import book4 from '../assets/books/book4.jpg';
import book5 from '../assets/books/book5.jpg';
import book6 from '../assets/books/book6.jpg';
import book7 from '../assets/books/book7.jpg';
import book8 from '../assets/books/book8.jpg';
import book9 from '../assets/books/book9.png';
import HeaderGradient from "../assets/HeaderGradient.png";
import Footer from '../components/Footer';
import Header from '../components/Header';

const bookCovers = [
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
  book10,
  book11,
  book12,
  book13,
  book14,
  book15,
  book16,
  book17,
  book18,
  book19,
  book20,
  book21,
  book22,
  book23,
  book24,
  book25,
  book26,
  book27,
  book28,
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
