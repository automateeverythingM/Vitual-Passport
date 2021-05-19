import {
  FOCUS_MARK,
  SET_ADD_EDIT_MARKER_LOCATION,
  SET_CONTAINER_REF,
  SET_MAP_VIEW_PORT,
  SET_MARKERS,
  SHOW_POPUP_STATE,
  HIDE_POPUP_STATE,
  FOCUS_MARK_AND_EDIT,
  SET_MARKER_TO_NULL,
  SET_FORM_REF,
  SET_LOADING,
  TOGGLE_TIPS,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_MAP_VIEW_PORT:
      return {
        ...state,
        map: {
          ...state.map,
          ...action.payload,
        },
      };

    case SET_MARKERS:
      return {
        ...state,
        markers: [...action.payload],
      };

    case SET_ADD_EDIT_MARKER_LOCATION:
      return {
        ...state,
        addEditMarkerLocation: {
          type: "add",
          location: {
            coordinates: [...action.payload],
          },
        },
      };

    case SET_MARKER_TO_NULL:
      return {
        ...state,
        addEditMarkerLocation: null,
      };

    case SET_CONTAINER_REF:
      return {
        ...state,
        containerRef: action.payload,
      };

    case FOCUS_MARK:
      console.log(action.payload.id);
      return {
        ...state,
        map: {
          ...state.map,
          latitude: action.payload.location[0],
          longitude: action.payload.location[1],
        },
        showPopup: {
          ...state.showPopup,
          [action.payload.id]: true,
        },
      };

    case FOCUS_MARK_AND_EDIT:
      return {
        ...state,
        map: {
          ...state.map,
          latitude: action.payload.location.coordinates[0],
          longitude: action.payload.location.coordinates[1],
        },
        addEditMarkerLocation: { type: "edit", ...action.payload },
      };

    case SHOW_POPUP_STATE:
      return {
        ...state,
        showPopup: {
          ...state.showPopup,
          [action.payload]: true,
        },
      };

    case HIDE_POPUP_STATE:
      return {
        ...state,
        showPopup: {
          ...state.showPopup,
          [action.payload]: false,
        },
      };

    case SET_FORM_REF:
      return {
        ...state,
        formRef: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case TOGGLE_TIPS:
      return {
        ...state,
        showTips: !state.showTips,
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default reducer;
