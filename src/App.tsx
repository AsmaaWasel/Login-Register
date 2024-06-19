import React from "react";
import LoginForm from "./ui/LoginForm";
import RegisterForm from "./ui/RegisterForm";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="space-y-6">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
};

export default App;
