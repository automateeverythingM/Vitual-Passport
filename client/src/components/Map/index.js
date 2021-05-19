/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import ReactMapGL from "react-map-gl";
import { Context } from "../../globalState";
import {
  setAddEditMarkerLocation,
  setMarkers,
  setMarkerToNull,
} from "../../globalState/actions";
import LogMarkerCard from "./mapCard/LogMarkerCard";
import "./mapCard/styles/cardStyles.css";

import Geocoder from "react-map-gl-geocoder";
import "./mapCard/styles/geocoderstyles.css";
import { setMapViewPort } from "./../../globalState/actions";
import { useCustomFetch } from "../hooks/useCustomFetch";
import LoadingNotification from "./loadingNotification";
import EditMarkForm from "./mapCard/form/EditMarkForm";
import Modal from "./mapCard/modal/modal";

function Map() {
  const {
    state: { markers, addEditMarkerLocation, containerRef, map, loading },
    dispatch,
  } = useContext(Context);

  const mapRef = useRef(null);
  const { get, post, put, response, cache } = useCustomFetch(
    "http://localhost:3001/api/logs",
    {
      persist: true,
      cacheLife: 36000,
    }
  );

  const postNewTravelLog = useCallback(
    async (data) => {
      if (data.image === "") data.image = null;

      let newData = {
        ...data,
        location: {
          type: "Point",
          coordinates: [...addEditMarkerLocation.location.coordinates],
        },
      };

      dispatch(setMarkerToNull());
      await post("", newData);
      if (response.ok) {
        cache.clear();
        await getLogs();
      }
    },
    [addEditMarkerLocation]
  );

  const updateTravelLog = useCallback(
    async (updatedLog) => {
      dispatch(setMarkerToNull());
      await put(`/${addEditMarkerLocation._id}`, updatedLog);
      if (response.ok) {
        cache.clear();
        await getLogs();
      }
    },
    [addEditMarkerLocation]
  );

  const addOrEdit = useMemo(
    () =>
      addEditMarkerLocation?.type === "add"
        ? postNewTravelLog
        : updateTravelLog,
    [addEditMarkerLocation]
  );

  //
  const handleChange = useCallback((newViewport) => {
    dispatch(setMapViewPort(newViewport));
  }, []);

  const getLogs = useCallback(async () => {
    const logs = await get("");
    dispatch(setMarkers(logs));
  }, []);

  const addMark = useCallback((event) => {
    dispatch(setAddEditMarkerLocation([...event.lngLat.reverse()]));
  }, []);

  useEffect(() => {
    getLogs();
  }, []);

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.REACT_APP_MAP_ACCESS_TOKEN}
      {...map}
      onViewportChange={handleChange}
      onDblClick={addMark}
      ref={mapRef}
      transitionDuration={200}
    >
      {markers.map((marker) => (
        <React.Fragment key={marker._id}>
          <LogMarkerCard marker={marker} />
        </React.Fragment>
      ))}
      <Modal
        show={addEditMarkerLocation}
        hideModal={() => dispatch(setMarkerToNull())}
      >
        <EditMarkForm pushToServer={addOrEdit} />
      </Modal>
      <Geocoder
        mapRef={mapRef}
        containerRef={containerRef}
        onViewportChange={handleChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_ACCESS_TOKEN}
        marker={false}
        clearOnBlur
        clearAndBlurOnEsc
      />
      <LoadingNotification loading={loading} />
    </ReactMapGL>
  );
}

export default Map;
