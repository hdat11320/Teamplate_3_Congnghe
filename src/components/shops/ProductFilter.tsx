'use client';

export default function ProductFilter() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Filter by price</h2>
      <input type="range" min="0" max="100" className="w-full mb-4" />
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full">Filter</button>
    </div>
  );
}
