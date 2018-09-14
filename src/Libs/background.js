const body = document.querySelector("body");

const prefix = "https://source.unsplash.com/";
const largeScreenDimensions = "1500x1500";
const smallScreenDimensions = "800x800";
const smallScreenSize = 800;

const weatherMap = new Map()
  .set("sun", "T7K4aEPoGGk")
  .set("clear", "ln5drpv_ImI")
  .set("snow", "SH4GNXNj1RA")
  .set("rain", "pv2ZlDfstXc")
  .set("wind", "7e_gFC2Ce04")
  .set("overcast", "qjSyQqqzKMg")
  .set("cloud", "LZfpD7ckSOE")
  .set("fog", "-pCHz5XiMb0")
  .set("mist", "-pCHz5XiMb0")
  .set("drizzle", "rWwj4zcOcIs");

const weatherKeys = Array.from(weatherMap.keys());
//output of weatherKeys Array ["sun", "clear", "snow", "rain", "wind", "overcast", "cloud", "fog", "mist", "drizzle"]

/**
 * Calculates the recommended image dimensions based on the current
 * device's screen size.
 *
 * @returns {string} image dimensions
 */
const getDimensions = () => {
  const { width, height } = window.screen;
  return height < smallScreenSize && width < smallScreenSize
    ? smallScreenDimensions
    : largeScreenDimensions;
};

/**
 * Updates the background cover image according to given weather key.
 */
//changed weather = 'sun' to weather
export const showWeather = weather => {
  const dimensions = getDimensions();
  if (weatherMap.has(weather)) {
    const imageId = weatherMap.get(weather);
    body.style.backgroundImage = `url(${prefix}${imageId}/${dimensions})`;
  }
};

/**
 * Searches the weather conditions string for a possible matching weather
 * key.
 *
 * Returns the found key. If no match is found the default image key is
 * returned.
 *
 * @param {string} condition the weather conditions
 */
export const findWeather = condition => {
  const text = condition.toLowerCase();
  const result = weatherKeys.find(key => text.includes(key));
  return result ? result : "sun"; // default to sunny image
};
