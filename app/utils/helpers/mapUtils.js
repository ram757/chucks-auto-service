const MapUtils = {
  getMapLocationLink: (link, useCoord) => {
    if (useCoord) {
      // latitude/longitude
      return `https://maps.google.com/?ll=${link}`;
    }
    return `https://maps.google.com/?q=${link}`;
  },
};

export default MapUtils;
