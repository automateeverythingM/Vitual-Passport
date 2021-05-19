import { useState } from "react";
import { ImSpinner4 } from "react-icons/im";
function LoadingNotification({ loading }) {
  const [mount, setMount] = useState(true);

  return mount ? (
    <div
      className={`inline-flex border-4 items-center bg-pink-500 shadow-md text-white px-3 py-1 m-2 rounded-lg ${
        loading ? "fade-in" : "fade-out"
      }`}
      onTransitionEnd={() => {
        if (!loading) {
          setMount(false);
        }
      }}
    >
      <ImSpinner4 className="animate-spin inline-block" />
      <span className="ml-1">loading...</span>
    </div>
  ) : null;
}

export default LoadingNotification;
