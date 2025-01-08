export const interpolateColor = (fraction) => {
  fraction = Math.max(0, Math.min(fraction, 1)); // Ensure the fraction is between 0 and 1
  const shade = Math.floor(255 * (1 - fraction)); // Calculate grayscale value
  const hexShade = shade.toString(16).padStart(2, "0"); // Convert to hex
  return `#${hexShade}${hexShade}${hexShade}`; // Return hex color code
};

export const interpolateGreyColor = (fraction) => {
  fraction = Math.max(0, Math.min(fraction, 1)); // Ensure the fraction is between 0 and 1

  const startShade = 0; // Start from black (#000000)
  const endShade_blue = 49;
  const endShade_green = 23;
  const endShade_red = 9;

  // Interpolate between start and end shade based on fraction
  const shade_blue = Math.floor(startShade + fraction * (endShade_blue - startShade));
  const shade_green = Math.floor(startShade + fraction * (endShade_green - startShade));
  const shade_red = Math.floor(startShade + fraction * (endShade_red - startShade));


  // Convert to hex and pad with zeros if necessary
  // const hexShade = shade.toString(16).padStart(2, "0");
  const hexShade_blue = shade_blue.toString(16).padStart(2, "0");
  const hexShade_green = shade_green.toString(16).padStart(2, "0");
  const hexShade_red = shade_red.toString(16).padStart(2, "0");

  return `#${hexShade_red}${hexShade_green}${hexShade_blue}`; // Return hex color code

  // return `#${hexShade}${hexShade}${hexShade}`; // Return hex color code
};
