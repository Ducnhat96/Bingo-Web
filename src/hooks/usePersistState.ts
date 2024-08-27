import { useState, useEffect } from 'react';
import browserStorage from 'store';

type StorageKey = string;

// This hook receives two parameters:
// storageKey: This is the name of our storage that gets used when we retrieve/save our persistent data.
// initialState: This is our default value, but only if the store doesn't exist, otherwise it gets overwritten by the store.
export default function usePersistentState<T>(storageKey: StorageKey, initialState: T): [T, (newState: T) => void] {

  // Initiate the internal state with the generic type T.
  const [state, setInternalState] = useState<T>(initialState);

  // Only on our initial load, retrieve the data from the store and set the state to that data.
  useEffect(() => {
    // Retrieve the data from the store.
    const storageInBrowser = browserStorage.get(storageKey) as T | null;
    console.log(storageInBrowser, 'storageInBrowser')
    // If the store exists, overwrite the state with the store's data.
    // Otherwise, if the store doesn't exist, then "initialState" remains our default value.
    if (storageInBrowser !== null) {
      setInternalState(storageInBrowser);
    }
  }, [storageKey]);

  // Create a replacement method that will set the state like normal, but that also saves the new state into the store.
  const setState = (newState: T) => {
    browserStorage.set(storageKey, newState);
    setInternalState(newState);
  };

  return [state, setState];
}
