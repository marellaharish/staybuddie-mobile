const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',                // Primary text color
    background: '#fff',             // Background color (white for light mode)
    tint: tintColorLight,           // Tint color for icons and highlights
    icon: '#687076',                // Default icon color
    tabIconDefault: '#687076',      // Tab icon (default)
    tabIconSelected: tintColorLight, // Tab icon (selected)

    // Additional colors
    primary: '#0a7ea4',             // Primary color (used for buttons, highlights)
    secondary: '#bbb',           // Secondary color (alternative buttons or highlights)
    success: '#4caf50',              // Green, used for success messages
    warning: '#ff9800',              // Orange, used for warnings
    error: '#f44336',                // Red, used for errors
    info: '#2196f3',                 // Blue, used for informational messages
    border: '#e0e0e0',               // Light gray border color
    disabled: '#bdbdbd',             // Disabled state color
    shadow: 'rgba(0, 0, 0, 0.1)',    // Light shadow color
    link: '#1e88e5',                 // Link color (blue)
    gray: '#7c8ca6',                 // General gray color for less emphasis
  },
  dark: {
    text: '#ECEDEE',                // Primary text color (light gray for dark mode)
    background: '#151718',          // Background color (dark)
    tint: tintColorDark,            // Tint color for icons and highlights
    icon: '#9BA1A6',                // Default icon color (light gray)
    tabIconDefault: '#9BA1A6',      // Tab icon (default)
    tabIconSelected: tintColorDark, // Tab icon (selected)

    // Additional colors
    primary: '#0a7ea4',             // Primary color (same as light)
    secondary: '#00bcd4',           // Secondary color (same as light)
    success: '#4caf50',              // Green for success
    warning: '#ff9800',              // Orange for warnings
    error: '#f44336',                // Red for errors
    info: '#2196f3',                 // Blue for info
    border: '#333333',               // Darker border color
    disabled: '#666666',             // Disabled state color (gray)
    shadow: 'rgba(0, 0, 0, 0.5)',    // Dark shadow color
    link: '#1e88e5',                 // Link color (blue)
    gray: '#707070',                 // General gray for dark mode
  },
};
