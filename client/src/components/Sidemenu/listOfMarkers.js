import React, { useContext } from "react";
import {
  focusMark,
  focusMarkAndEdit,
  setMarkers,
} from "../../globalState/actions";
import { Context } from "./../../globalState/index";
import { RiDeleteBack2Fill, RiEditCircleFill } from "react-icons/ri";
import { useCustomFetch } from "../hooks/useCustomFetch";
function ListOfMarkers() {
  const { get, del, cache } = useCustomFetch("http://localhost:3001/api/logs");
  const {
    state: { markers },
    dispatch,
  } = useContext(Context);

  const deleteWithId = async (id) => {
    console.log(id);
    await del(id).then(async () => {
      cache.clear();
      const logs = await get("");
      dispatch(setMarkers(logs));
    });
  };

  const editPost = (marker) => {
    dispatch(focusMarkAndEdit(marker));
  };

  return (
    <div className="neo_shadow mt-4 p-4 text-xs">
      <h3 className="border-b-2 text-base border-blue-300 pb-2">
        List of your logs
      </h3>
      <ul className="overflow-y-auto px-1">
        {markers.map((marker, index) => (
          <li key={marker._id} className="flex my-4">
            <div
              className="marker_list inline-block w-full"
              onClick={() => {
                dispatch(
                  focusMark({
                    location: marker.location.coordinates,
                    id: marker._id,
                  })
                );
              }}
            >
              {marker.title}
            </div>
            <button
              onClick={() => editPost(marker)}
              className="btn text-green-700 border-b-4 hover:border-green-700"
            >
              <RiEditCircleFill />
            </button>
            <button
              onClick={() => deleteWithId(marker._id)}
              className="btn text-red-700 border-b-4 hover:border-red-700"
            >
              <RiDeleteBack2Fill />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfMarkers;
