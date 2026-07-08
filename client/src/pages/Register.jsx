import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { useAuth } from "../context/AuthContext";

import toast from "react-hot-toast";

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

    try {
      await registerUser(form);

      toast.success(
        "Account created successfully"
      );

      navigate(
        "/dashboard"
      );
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        px-5
        bg-gradient-to-br
        from-[#CCFBF1]
        via-[#EEF2FF]
        to-[#F3E8FF]
      "
    >
      {/* background decoration */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="
          absolute
          top-20
          left-20
          w-72
          h-72
          bg-[#14B8A6]/25
          rounded-full
          blur-3xl
        "
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="
          absolute
          bottom-10
          right-20
          w-96
          h-96
          bg-[#A855F7]/25
          rounded-full
          blur-3xl
        "
      />

      {/* Register Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          relative
          z-10
          w-full
          max-w-md
          bg-white/45
          backdrop-blur-2xl
          border
          border-white/70
          rounded-[2rem]
          shadow-2xl
          p-10
        "
      >
        <h1
          className="
            text-4xl
            font-black
            text-center
            bg-gradient-to-r
            from-[#14B8A6]
            via-[#6366F1]
            to-[#A855F7]
            bg-clip-text
            text-transparent
          "
        >
          Create Account
        </h1>

        <p
          className="
            text-center
            text-slate-600
            mt-3
          "
        >
          Start your secure AuthFlow journey
        </p>

        <form
          onSubmit={handleSubmit}
          className="
            mt-10
            space-y-6
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
            mt-8
            text-sm
            text-slate-600
          "
        >
          Already have an account?

          <Link
            to="/login"
            className="
              ml-2
              font-bold
              bg-gradient-to-r
              from-[#14B8A6]
              to-[#6366F1]
              bg-clip-text
              text-transparent
            "
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Register;