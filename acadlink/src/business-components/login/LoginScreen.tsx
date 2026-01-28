import SignUpForm from "./SignUpForm";
import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

    
      
      {/* Left Section - Logo */}
      <div className="hidden md:flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <Image
            width={700}
            height={700}
            src="/acadlink-big.png"
            alt="AcadLink"
          />
    
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex items-center justify-center px-6">
        <SignUpForm />
      </div>

    </div>
  );
}
