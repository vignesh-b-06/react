function Buttons() {
  return (
    <div className="flex gap-2">
      <button className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-700">
        Hover
      </button>

      <button className="bg-green-500 text-white px-4 py-2 focus:ring-2">
        Focus
      </button>

      <button className="bg-red-500 text-white px-4 py-2 active:bg-red-800">
        Active
      </button>
    </div>
  );
}

export default Buttons;