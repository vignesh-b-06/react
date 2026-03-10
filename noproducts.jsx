function App() {

  const products = [];

  return (
    <div>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product, index) => (
          <p key={index}>{product}</p>
        ))
      )}

    </div>
  );
}

export default App;