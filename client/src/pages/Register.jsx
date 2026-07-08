import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import toast from "react-hot-toast";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Register() {
  const { registerUser } = useAuth();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      "Register button clicked",
      form
    );

    try {
      await registerUser(form);

      toast.success(
        "Account created successfully"
      );

      navigate(
        "/dashboard"
      );
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-slate-50
        px-4
      "
    >
      <Card
        className="
          w-full
          max-w-md
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            text-center
          "
        >
          Create Account
        </h1>

        <p
          className="
            text-center
            text-slate-500
            mt-2
          "
        >
          Start using AuthFlow today
        </p>

        <form
          onSubmit={handleSubmit}
          className="
            mt-8
            space-y-5
          "
        >
          <Input
            label="Full Name"
            name="name"
            placeholder="Enter name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            label="Email"
            name="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="******"
            value={form.password}
            onChange={handleChange}
          />

          <Button type="submit">
            Register
          </Button>
        </form>

        <p
          className="
            text-center
            mt-6
            text-sm
          "
        >
          Already have an account?

          <Link
            className="
              text-blue-600
              font-medium
              ml-1
            "
            to="/login"
          >
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default Register;