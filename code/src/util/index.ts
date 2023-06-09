export const getClientType = () => {
  let isWX = false;
  let isPC = false;
  let isH5 = false;
  const ua = window.navigator.userAgent;
  if (/(micromessenger)/i.test(ua)) {
    isWX = true;
  } else {
    const H5clientRegular =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    if (H5clientRegular.test(ua)) {
      isH5 = true;
    } else {
      isPC = true;
    }
  }
  return { isWX, isPC, isH5 };
};

