#!/bin/bash

# --- Create Directories ---
echo "Creating directory structure..."
mkdir -p src/api/endpoints
mkdir -p src/components/common
mkdir -p src/components/specific
mkdir -p src/constants
mkdir -p src/contexts
mkdir -p src/hooks
mkdir -p src/navigation
mkdir -p src/screens/auth
mkdir -p src/screens/main
mkdir -p src/services
mkdir -p src/store/slices
mkdir -p src/types
mkdir -p src/utils
mkdir -p assets/fonts
mkdir -p assets/images
mkdir -p assets/icons

# --- Create Files ---
echo "Creating empty files..."
touch src/api/api.ts
touch src/components/common/Button.tsx
touch src/components/common/Input.tsx
touch src/constants/colors.ts
touch src/constants/dimensions.ts
touch src/constants/strings.ts
touch src/contexts/AuthContext.tsx
touch src/contexts/ThemeContext.tsx
touch src/hooks/useAuth.ts
touch src/hooks/useDebounce.ts
touch src/navigation/AppNavigator.tsx
touch src/navigation/AuthNavigator.tsx
touch src/navigation/types.ts
touch src/screens/auth/LoginScreen.tsx
touch src/screens/auth/SignupScreen.tsx
touch src/screens/main/HomeScreen.tsx
touch src/screens/main/ProfileScreen.tsx
touch src/screens/main/SettingsScreen.tsx
touch src/services/authService.ts
touch src/store/slices/authSlice.ts
touch src/store/store.ts
touch src/types/index.ts
touch src/utils/helpers.ts
touch src/utils/validators.ts
touch .env

# We assume App.tsx and other root files are already created by create-expo-app
echo "Structure setup complete!"