
export default function Recipes() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Featured Recipes
        </h2>

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Recipe 1 */}
          <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-lg p-5 transition">
            <img
              src="https://source.unsplash.com/400x300/?food"
              alt="Recipe 1"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">Recipe One</h3>
            <p className="text-gray-600 text-sm mt-2">
              A quick and tasty dish to try at home.
            </p>
          </div>

          {/* Recipe 2 */}
          <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-lg p-5 transition">
            <img
              src="https://source.unsplash.com/400x300/?cuisine"
              alt="Recipe 2"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">Recipe Two</h3>
            <p className="text-gray-600 text-sm mt-2">
              A perfect recipe for a family dinner.
            </p>
          </div>

          {/* Recipe 3 */}
          <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-lg p-5 transition">
            <img
              src="https://source.unsplash.com/400x300/?kitchen"
              alt="Recipe 3"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">Recipe Three</h3>
            <p className="text-gray-600 text-sm mt-2">
              A healthy and easy-to-make recipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
