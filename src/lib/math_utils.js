export const interpolateColor = (fraction) => {
    fraction = Math.max(0, Math.min(fraction, 1)); // Ensure the fraction is between 0 and 1
    const shade = Math.floor(255 * (1 - fraction)); // Calculate grayscale value
    const hexShade = shade.toString(16).padStart(2, "0"); // Convert to hex
    return `#${hexShade}${hexShade}${hexShade}`; // Return hex color code
  };