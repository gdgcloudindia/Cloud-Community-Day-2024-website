/* eslint-disable no-console */

import { register } from "register-service-worker";
import FDK from "@/config/firebase";

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "production") {
  // eslint-disable-next-line no-undef
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered(registration) {
      console.log("Service worker has been registered.");
      try {
        if (FDK.notificationSupported && Notification)
          FDK.messaging.useServiceWorker(registration);
      } catch (e) {
        alert(e);
      }
      setInterval(() => {
        registration.update();
      }, 1000 * 60 * 60); // hourly checks
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated(registration) {
      console.log("New content is available; please refresh.");
      document.dispatchEvent(
        new CustomEvent("swUpdated", { detail: registration })
      );
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}
