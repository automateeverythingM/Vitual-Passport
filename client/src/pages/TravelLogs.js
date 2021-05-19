import { useEffect } from "react";
import ReactNotification from "react-notifications-component";
import useFetch from "use-http";
import Map from "../components/Map";
import SideMenu from "../components/Sidemenu";
import pushTips from "../components/Tips/pushTip";

function TravelLogs() {
  const { get, error } = useFetch("http://localhost:3001/tips");

  useEffect(() => {
    get("").then((fetchTips) => {
      pushTips(fetchTips);
    });
  }, [get]);

  return (
    <div className="grid grid-cols-12">
      <ReactNotification className="w-2/5" />
      <div className="col-span-3">
        <SideMenu />
      </div>
      <div className="col-span-9">
        <Map />
      </div>
    </div>
  );
}

export default TravelLogs;
