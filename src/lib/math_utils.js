export const interpolateColor = (fraction) => {
    fraction = Math.max(0, Math.min(fraction, 1)); // Ensure the fraction is between 0 and 1
    const shade = Math.floor(255 * (1 - fraction)); // Calculate grayscale value
    const hexShade = shade.toString(16).padStart(2, "0"); // Convert to hex
    return `#${hexShade}${hexShade}${hexShade}`; // Return hex color code
  };

  export const interpolateGreyColor = (fraction) => {
    fraction = Math.max(0, Math.min(fraction, 1)); // Ensure the fraction is between 0 and 1
    
    const startShade = 0;   // Start from black (#000000)
    const endShade = 30;   
    
    // Interpolate between start and end shade based on fraction
    const shade = Math.floor(startShade + fraction * (endShade - startShade));
    
    // Convert to hex and pad with zeros if necessary
    const hexShade = shade.toString(16).padStart(2, "0");
    
    return `#${hexShade}${hexShade}${hexShade}`; // Return hex color code
  };
  