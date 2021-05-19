import { useContext } from "react";
import { Marker, Popup } from "react-map-gl";
import { Context } from "../../../globalState";
import MapMarker from "../marker/mapmaker";
import Card from "./card";
import { hidePopupState, showPopupState } from "./../../../globalState/actions";

function LogMarkerCard({ marker }) {
  const {
    state: { showPopup },
    dispatch,
  } = useContext(Context);

  return (
    <>
      <Marker
        latitude={marker.location.coordinates[0]}
        longitude={marker.location.coordinates[1]}
        offsetLeft={-12}
        offsetTop={-24}
      >
        <MapMarker
          onClick={() => dispatch(showPopupState(marker._id))}
          size={{
            width: "24",
            height: "24",
          }}
          className="cursor-pointer"
        />
      </Marker>
      {showPopup[marker._id] && (
        <Popup
          latitude={marker.location.coordinates[0]}
          longitude={marker.location.coordinates[1]}
          closeButton={true}
          closeOnClick={false}
          onClose={() => dispatch(hidePopupState(marker._id))}
          anchor="top"
          className="marker__top"
        >
          <Card marker={marker} />
        </Popup>
      )}
    </>
  );
}

export default LogMarkerCard;
