const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col sm:flex-row items-center sm:items-start p-4 gap-4">
      {/* Image */}
      <img
        className="w-[100px] h-[100px] object-cover rounded-full border-4 border-yellow-400"
        src={image}
        alt={name}
      />

      {/* Content */}
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg font-semibold uppercase text-gray-800">
          {name}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{recipe}</p>
      </div>

      {/* Price */}
      <p className="text-yellow-500 font-bold text-lg">${price}</p>
    </div>
  );
};

export default MenuItem;
