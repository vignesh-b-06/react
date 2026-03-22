function Button({ text }) {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      {text}
    </button>
  );
}

function App() {
  return (
    <div>
      <Button text="Save" />
      <Button text="Delete" />
    </div>
  );
}

export default App;