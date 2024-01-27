
export const Input = ({ label, type, name, value, onChange }) => (
    <div className="mb-2">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-800">
        {label}
      </label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md 
                   focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>
  );