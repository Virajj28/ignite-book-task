import CategoryCard from '../components/CategoryCard';
import Pattern from '../assets/Pattern.svg';
import Fiction from '../assets/Fiction.svg';
import Drama from '../assets/Drama.svg';
import Humour from '../assets/Humour.svg';
import Politics from '../assets/Politics.svg';
import Philosophy from '../assets/Philosophy.svg';
import History from '../assets/History.svg';
import Adventure from '../assets/Adventure.svg';

const categories = [
  { label: 'Fiction', icon: Fiction, path: 'fiction' },
  { label: 'Drama', icon: Drama, path: 'drama' },
  { label: 'Humor', icon: Humour, path: 'humor' },
  { label: 'Politics', icon: Politics, path: 'politics' },
  { label: 'Philosophy', icon: Philosophy, path: 'philosophy' },
  { label: 'History', icon: History, path: 'history' },
  { label: 'Adventure', icon: Adventure, path: 'adventure' },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 bg-gray-100 flex justify-center items-center px-4">
      <div className="max-w-4xl w-full">
        <div className='w-screen' style={{ backgroundImage: `url(${Pattern})` }}>
          <h1
            className="text-3xl font-bold text-indigo-600 p-4 bg-cover bg-center"
          >
            Gutenberg Project
          </h1>
          <p
            className="text-gray-600 bg-cover p-4 bg-center"
          >
            A social cataloging website that allows you to freely search its database of books, annotations, and reviews.
          </p>
        </div>

        <div className=" my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.path} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
