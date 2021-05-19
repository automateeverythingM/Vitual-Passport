import Login from "../components/loginRegisterForm/login";
import AnimatedLogo from "../components/animatedLogo";
function LandingPage() {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center justify-center">
      <div></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatedLogo />
      </div>
      <h1 className="text-6xl mb-5">Virtual Passport</h1>
      <Login />
    </div>
  );
}

export default LandingPage;
