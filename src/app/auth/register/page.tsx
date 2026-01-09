import { RegisterForm } from "./components/form";

const RegisterPage: React.FC = () => {
  return (
    <div className="flex center-container">
      <div className="w-[500px] mt-20">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
