const BookCard = ({ book }) => {
  const handleOpenBook = () => {
    const formats = book.formats;
    if (formats['text/html']) {
      window.open(formats['text/html'], '_blank');
    } else if (formats['application/pdf']) {
      window.open(formats['application/pdf'], '_blank');
    } else if (formats['text/plain']) {
      window.open(formats['text/plain'], '_blank');
    } else {
      alert('No readable format available');
    }
  };

  return (
    <div
      className="w-[114px] cursor-pointer"
      onClick={handleOpenBook}
    >
      <img
        src={book.formats['image/jpeg']}
        alt={book.title}
        className="w-full h-[162px] object-cover rounded-[8px] shadow-[0_2px_5px_0_rgba(211,209,238,0.5)]"
      />
      <h3 className="text-[12px] font-semibold mt-2 leading-tight truncate">
        {book.title}
      </h3>
      <p className="text-[10px] text-gray-500 truncate">
        {book.authors?.[0]?.name}
      </p>
    </div>
  );
};

export default BookCard;
