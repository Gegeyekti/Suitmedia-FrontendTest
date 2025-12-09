"use client"

const Tabel = ({ value, onChange }) => {
  return (
    <div className="w-full flex items-center justify-between text-sm text-gray-600 p-4">

      <div className="text-gray-700 font-bold mx-auto">
        Showing <span className="font-medium">1</span> to{" "}
        <span className="font-medium">10</span> of{" "}
        <span className="font-medium">100</span>
      </div>

      <div className="flex items-center gap-6 mx-auto">
        <div className="flex items-center gap-2 font-bold">
          <span>Show per page:</span>
          <select 
            className="border rounded-full px-3 py-1 focus:outline-none"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="flex items-center gap-2 font-bold ">
          <span>Sort by:</span>
          <select 
            className="border rounded-full px-3 py-1 focus:outline-none"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="-published_at">Newest</option>
            <option value="published_at">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Tabel
