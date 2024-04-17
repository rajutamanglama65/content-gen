export const idb =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

export const insertDataInIndexedDb = () => {
  if (!idb) {
    console.log("This browser doesn't support IndexedDB")
    return;
  }

  const request = idb.open("cache-idx-db", 1);

  request.onerror = (event) => {
    console.log("Error opening database");
    console.log("err event: ", event);
  }


  request.onupgradeneeded = (event) => {
    console.log("onUpgradeNeeded event: ", event);
    const db = request.result

    if (!db.objectStoreNames.contains("responseData")) {
      db.createObjectStore("responseData", { keyPath: "id" });
    }
  }

  request.onsuccess = () => {
    console.log("Successfully opened the DB.");
  }
}



