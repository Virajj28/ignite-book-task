import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Back from '../assets/Back.svg';
import BookCard from '../components/BookCard';
import SearchBox from '../components/SearchBox';
import Loader from '../components/Loader';
import useDebounce from '../hooks/useDebounce';

const CategoryPage = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loader, setLoader] = useState(false);

  const fetchBooks = async (topic, search) => {
    try {
      setLoader(true);
      const { data } = await axios.get('/api/books/', {
        params: { topic, search }
      });
      setBooks(data.results);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoader(false);
    }
  };

  useDebounce(() => {
    fetchBooks(category, searchTerm);
  }, 500, [category, searchTerm]);

  const searchHandler = (search) => {
    setSearchTerm(search);
  };

  const clearHandler = () => {
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen p-4">
      <div className="flex items-center mb-4">
        <img src={Back} className="w-6 h-6 cursor-pointer" onClick={() => window.history.back()} />
        <h2 className="text-2xl font-bold text-indigo-500 capitalize px-3">{category}</h2>
      </div>

      <SearchBox searchText={searchTerm} handleChange={searchHandler} handleClear={clearHandler} />

      {loader ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-3 bg-gray-50 mt-4 md:grid-cols-6 gap-4">
          {books.length > 0 ? (
            books.map((book) => <BookCard key={book.id} book={book} />)
          ) : (
            'No books found!'
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
