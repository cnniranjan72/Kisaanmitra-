import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { register } from "@/services/auth";
import { useAuth } from "@/contexts/AuthContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const data = await register(username, email, password);
      if (data.token) {
        // Auto-login after registration
        const loginRes = await fetch(`${process.env.VITE_API_URL || 'http://localhost:5000/api'}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        
        if (loginRes.ok) {
          const { token, user } = await loginRes.json();
          if (token && user) {
            localStorage.setItem("token", token);
            setUser(user);
            navigate("/");
            return;
          }
        }
        
        // If auto-login fails, redirect to login
        setSuccess("Registration successful! Please log in.");
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (err: any) {
      setError(err.message || "Registration failed. Please try again.");
      console.error("Registration error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url("/assets/pic1.jpg")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-green-900">Register</h2>
        {error && <div className="text-red-600 text-center">{error}</div>}
        {success && <div className="text-green-600 text-center">{success}</div>}

        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button 
          type="submit" 
          className="w-full bg-green-700 hover:bg-green-800"
          disabled={isLoading}
        >
          {isLoading ? 'Creating account...' : 'Register'}
        </Button>

        <div className="text-center text-sm mt-2">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-700 hover:underline cursor-pointer"
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
