import { store } from "react-notifications-component";

export const pushNotifications = ({
  title = "",
  message = "",
  content = null,
  type = "info",
  position = "top-left",
  duration = 3000,
  ...rest
}) =>
  store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: position,
    animationIn: ["fade-in"],
    animationOut: ["fade-out"],
    dismiss: {
      duration: duration,
      onScreen: false,
      pauseOnHover: true,
      showIcon: true,
    },
    content: content,
    slidingExit: {
      duration: 3000,
      delay: 0,
      timingFunction: "ease",
    },
    ...rest,
  });

export const sideNotification = (title, message) => {
  store.addNotification({
    title: title,
    insert: "right",
    type: "success",
    container: "top-right  ",
    dismiss: {
      duration: 3000,
      onScreen: true,
      pauseOnHover: true,
    },
    message,
  });
};

export const removeNotification = (id) => {
  store.removeNotification(id);
};
