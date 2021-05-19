import { useContext } from "react";
import { Marker, Popup } from "react-map-gl";
import { Context } from "../../../globalState";
import { setMarkerToNull } from "../../../globalState/actions";
import MapMarker from "../marker/mapmaker";
import EditMarkForm from "./form/EditMarkForm";

function AddEditMarkMarker({ pushToServer }) {
  const {
    state: {
      addEditMarkerLocation: { location },
    },
    dispatch,
  } = useContext(Context);

  return (
    <>
      <Marker
        latitude={location.coordinates[0]}
        longitude={location.coordinates[1]}
        offsetLeft={-12}
        offsetTop={-24}
      >
        <MapMarker tagType="LOCATION" />
      </Marker>
      <Popup
        latitude={location.coordinates[0]}
        longitude={location.coordinates[1]}
        closeButton={true}
        closeOnClick={false}
        onClose={() => dispatch(setMarkerToNull())}
        anchor="top"
        className="marker__top"
      >
        <EditMarkForm pushToServer={pushToServer} />
      </Popup>
    </>
  );
}

export default AddEditMarkMarker;
