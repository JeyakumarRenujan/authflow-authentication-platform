import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <h1 className="text-3xl">
            Home
          </h1>
        }
      />

      <Route
        path="/login"
        element={
          <h1>
            Login
          </h1>
        }
      />

      <Route
        path="/register"
        element={
          <h1>
            Register
          </h1>
        }
      />
    </Routes>
  );
}

export default App;