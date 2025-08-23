import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { login } from "@/services/auth";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    try {
      const { token, user } = await login(email, password);
      if (token && user) {
        setUser(user);
        navigate("/");
      }
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
      console.error("Login error:", err);
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
        <h2 className="text-2xl font-bold mb-4 text-center text-green-900">Login</h2>
        {error && <div className="text-red-600 text-center">{error}</div>}
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
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
        <div className="text-center text-sm mt-2">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-green-700 hover:underline cursor-pointer"
          >
            Register
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
