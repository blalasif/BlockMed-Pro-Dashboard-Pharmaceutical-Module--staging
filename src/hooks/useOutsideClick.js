import { useEffect } from 'react';

const useOutsideClick = (ref, callback, exceptionRef) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref?.current &&
        !ref.current.contains(event.target) &&
        (!exceptionRef?.current || !exceptionRef?.current?.contains(event.target))
      ) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, exceptionRef]);
};

export default useOutsideClick;
