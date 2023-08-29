"use client";

import {
  Tldraw,
  Canvas,
  ContextMenu,
  TldrawEditor,
  TldrawUi,
  createTLStore,
  useEditor,
} from "@tldraw/tldraw";
import { throttle } from "@tldraw/utils";
import { useEffect, useLayoutEffect, useState } from "react";
import "@tldraw/tldraw/editor.css";
import "@tldraw/tldraw/ui.css";

const PERSISTENCE_KEY = "example-3";

export default function TldrawPage() {
  const [store] = useState(() => createTLStore());
  const [loadingState, setLoadingState] = useState<
    | { status: "loading" }
    | { status: "ready" }
    | { status: "error"; error: string }
  >({
    status: "loading",
  });

  // Inside a React component
  useEffect(() => {
    fetch("/localStorageShape.json")
      .then((response) => response.json())
      .then((data) => {
        // Do something with your data

        console.log(data);
        store.loadSnapshot(data);
        setLoadingState({ status: "ready" });
      });
  }, [store]);

  return <Tldraw store={store} />;
}

// ---

// Use below snippet and comment the active useEffect above. Now draw everything you want on the tldraw canvas. Once done, refresh, and the console.log in below snippet will log the correct .json structure to the console. Copy that and paste it into the local json we're loading (now called localStorageShape.json).

// Then comment below snippet again and move it away, and bring back the useEffect. That useEffect fetches your JSON, loads it into the store, and renders it on the canvas.

// This only seems to work with the more recent (and i think unstable) 2.0.0-canary.f2e95988e03c release, as the 1.x.x version errors out on createTLStore(), which is needed to set the store.

// ---

// useLayoutEffect(() => {
//   setLoadingState({ status: "loading" });

//   // Get persisted data from local storage
//   const persistedSnapshot = localStorage.getItem(PERSISTENCE_KEY);

//   if (persistedSnapshot) {
//     console.log("persistedSnapshot", persistedSnapshot);
//     try {
//       const snapshot = JSON.parse(persistedSnapshot);
//       console.log("JSON.parse(persistedSnapshot) as snapshot", snapshot);
//       store.loadSnapshot(snapshot);
//       setLoadingState({ status: "ready" });
//     } catch (error: any) {
//       setLoadingState({ status: "error", error: error.message }); // Something went wrong
//     }
//   } else {
//     setLoadingState({ status: "ready" }); // Nothing persisted, continue with the empty store
//   }

//   // Each time the store changes, run the (debounced) persist function
//   const cleanupFn = store.listen(
//     throttle(() => {
//       const snapshot = store.getSnapshot();
//       localStorage.setItem(PERSISTENCE_KEY, JSON.stringify(snapshot));
//     }, 500)
//   );

//   return () => {
//     cleanupFn();
//   };
// }, [store]);

// ---

// Old code from other attempts

// ---

// Tried the parseTldrawJsonFile function, wasnt even 100% sure it would do the job since no description but also the types on the api docs are not the same as the actual types. Not a lot of info on how I can get all the required props of config/userId/instanceId. Gave up on this approach.
// const parsedArguments = {
//   config: {
//     shapes: undefined,
//     tools: undefined,
//     allowUnknownShapes: undefined,
//     storeSchema: undefined,
//     TLShape: undefined,
//     createStore: undefined,
//   },
//   json: data,
//   userId: "ry2gxV5Pp5IusrgPBcc0bQ",
//   instanceId: "ry2gxV5Pp5IusrgPBcc0bQ",
// };
// const parsedJSON = parseTldrawJsonFile(parsedArguments);
// console.log("parsedJSON", parsedJSON);
