import Pattern from '../assets/Pattern.svg';

const Header = () => {
    return(
        <div  className="flex flex-col items-center" style={{ backgroundImage: `url(${Pattern})` }}>
            <div>   
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
        </div>
    )
}

export default Header;