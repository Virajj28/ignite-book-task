import { useNavigate } from 'react-router-dom';
import NextIcon from '../assets/Next.svg';

const CategoryCard = ({ label, icon, path }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/category/${path.toLowerCase()}`)}
      className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 cursor-pointer 
      transition-transform transform hover:scale-105 active:scale-95"
    >
      <div className="flex items-center gap-4">
        <img src={icon} alt={label} className="w-8 h-8" />
        <span className="text-lg font-medium text-gray-700">{label}</span>
      </div>
      <img src={NextIcon} alt="Next" className="w-6 h-6" />
    </div>
  );
};

export default CategoryCard;
