import Tag from "./returnTag";

function MapMarker({ tagType, size = { width: "24", height: "24" }, ...rest }) {
  return <div {...rest}>{Tag(tagType, size)}</div>;
}

export default MapMarker;
