import { useState, useEffect } from 'react';

const useLoaderScreen = (): boolean => {
  const [loader, setloader] = useState(false);

  useEffect(() => {
    setTimeout(() => setloader(true), 1000);
  }, []);

  return loader;
}

export default useLoaderScreen;