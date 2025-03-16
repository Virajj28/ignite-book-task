import CategoryCard from '../components/CategoryCard';
import Fiction from '../assets/Fiction.svg';
import Drama from '../assets/Drama.svg';
import Humour from '../assets/Humour.svg';
import Politics from '../assets/Politics.svg';
import Philosophy from '../assets/Philosophy.svg';
import History from '../assets/History.svg';
import Adventure from '../assets/Adventure.svg';
import Header from '../components/Header';

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
    <div className="flex flex-col items-center justify-center">
      <div className="md:mt-30 w-screen">
        <Header />
      </div>
      <div className="w-full px-4 md:px-80">
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
