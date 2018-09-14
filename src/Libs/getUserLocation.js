/**
 * Gets the GPS location of the user's browser. 
 * Throws an exception if this functionality is not supported,
 * and propagates a PositionError is the GPS request fails.
 * 
 * @returns {object} - latitude and longitude 
 */
const getUserLocation = async () => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        pos => {
          resolve({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          })
        },
        er => {
          reject(er)
        }
      )
    })
  } else {
    throw new Error('Geolocation is not supported by this browser.')
  }
}

export default getUserLocation
