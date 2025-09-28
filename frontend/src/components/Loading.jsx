const Loading = () => {
  return (
    <>
      {Array(10)
        .fill(0)
        .map((_, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center bg-gray-200 animate-pulse p-3 rounded-lg mb-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="h-5 bg-gray-300 rounded w-48"></div>
            </div>
          </li>
        ))}
    </>
  );
};

export default Loading;
