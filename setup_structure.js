const fs = require('fs');
const path = require('path');

console.log("Creating project structure...");

const directories = [
    'assets/fonts',
    'assets/images',
    'assets/icons',
    'src/api/endpoints',
    'src/components/common',
    'src/components/specific',
    'src/constants',
    'src/contexts',
    'src/hooks',
    'src/navigation',
    'src/screens/auth',
    'src/screens/main',
    'src/services',
    'src/store/slices',
    'src/types',
    'src/utils',
];

const files = [
    'src/api/api.ts',
    'src/components/common/Button.tsx',
    'src/components/common/Input.tsx',
    'src/constants/colors.ts',
    'src/constants/dimensions.ts',
    'src/constants/strings.ts',
    'src/contexts/AuthContext.tsx',
    'src/contexts/ThemeContext.tsx',
    'src/hooks/useAuth.ts',
    'src/hooks/useDebounce.ts',
    'src/navigation/AppNavigator.tsx',
    'src/navigation/AuthNavigator.tsx',
    'src/navigation/types.ts',
    'src/screens/auth/LoginScreen.tsx',
    'src/screens/auth/SignupScreen.tsx',
    'src/screens/main/HomeScreen.tsx',
    'src/screens/main/ProfileScreen.tsx',
    'src/screens/main/SettingsScreen.tsx',
    'src/services/authService.ts',
    'src/store/slices/authSlice.ts',
    'src/store/store.ts',
    'src/types/index.ts',
    'src/utils/helpers.ts',
    'src/utils/validators.ts',
    '.env',
];

directories.forEach(dir => {
    fs.mkdirSync(dir, { recursive: true }, (err) => {
        if (err) throw err;
    });
});

files.forEach(file => {
    fs.writeFileSync(file, '', (err) => {
        if (err) throw err;
    });
});

console.log("Structure setup complete!");