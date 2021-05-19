export const SET_MAP_VIEW_PORT = "SET_MAP_VIEW_PORT";
export const SET_MARKERS = "SET_MARKERS";
export const SET_ADD_EDIT_MARKER_LOCATION = "SET_ADD_EDIT_MARKER_LOCATION";
export const SET_MARKER_TO_NULL = "SET_MARKER_TO_NULL";
export const SET_CONTAINER_REF = "SET_MAP_REF";
export const FOCUS_MARK = "FOCUS_MARK";
export const FOCUS_MARK_AND_EDIT = "FOCUS_MARK_AND_EDIT";
export const SHOW_POPUP_STATE = "SHOW_POPUP_STATE";
export const HIDE_POPUP_STATE = "HIDE_POPUP_STATE";
export const SET_FORM_REF = "SET_FORM_REF";
export const SET_LOADING = "SET_LOADING";
export const TOGGLE_TIPS = "TOGGLE_TIPS";

export const setMapViewPort = (payload) => {
  return { type: SET_MAP_VIEW_PORT, payload };
};
export const setMarkers = (payload) => {
  return { type: SET_MARKERS, payload };
};

export const setAddEditMarkerLocation = (payload) => {
  return { type: SET_ADD_EDIT_MARKER_LOCATION, payload };
};
export const setMarkerToNull = () => {
  return { type: SET_MARKER_TO_NULL };
};

export const setContainerRef = (payload) => {
  return { type: SET_CONTAINER_REF, payload };
};

export const focusMark = (payload) => {
  return { type: FOCUS_MARK, payload };
};
export const focusMarkAndEdit = (payload) => {
  return { type: FOCUS_MARK_AND_EDIT, payload };
};

export const showPopupState = (payload) => {
  return { type: SHOW_POPUP_STATE, payload };
};

export const hidePopupState = (payload) => {
  return { type: HIDE_POPUP_STATE, payload };
};

export const setFormRef = (payload) => {
  return { type: SET_FORM_REF, payload };
};

export const setLoading = (payload) => {
  return { type: SET_LOADING, payload };
};
export const toggleTips = () => {
  return { type: TOGGLE_TIPS };
};
