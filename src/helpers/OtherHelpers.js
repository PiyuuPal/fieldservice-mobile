/* eslint-disable */
import Toast from 'react-native-simple-toast';

function debounce(func, timeout = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export const handleShowToastMessage = (val) => {
  setTimeout(() => {
    Toast.showWithGravity(val, Toast.LONG, Toast.BOTTOM);
  }, 100);
};

export const ShowToastMessage = debounce((val) => handleShowToastMessage(val));
