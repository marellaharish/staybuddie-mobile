import { Ionicons } from '@expo/vector-icons'
import { Colors } from 'constants/Colors'
import Checkbox from 'expo-checkbox'
import { useState } from 'react'
import { ImageBackground, Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import Button from 'src/components/common/Button'
import Input from 'src/components/common/Input'
import { FontSizes, Metrics } from 'src/constants'
import { useNavigationFlow } from 'src/navigation/NavigationContext'
import { navigate } from 'src/navigation/navigationService'
const AdminLoginScreen = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { goToAuth } = useNavigationFlow();

    const handleLogin = () => {
        if (!phone.trim() || !password.trim()) {
            setError('Please enter phone and password');
            return;
        }

        setError('');
        goToMain();
    };
    return (
        <>
            <SafeAreaView style={[styles.container,]}>
                <StatusBar />

                <ImageBackground
                    source={{ uri: 'https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?ga=GA1.1.678449526.1710473925&semt=ais_hybrid&w=740' }}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                >

                    <View style={[styles.content]}>

                        <Text style={[styles.title]}>Welcome</Text>
                        <Text style={[styles.title]}>back! Admin</Text>
                        <Text style={[styles.subtitle]}>Sign in to access your package history and get real-time updates on all your data</Text>
                        <View style={styles.inputContainer}>
                            <Input
                                placeholder="Enter your phone number"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                leftElement={<Ionicons name="mail" size={20} color="#555" />}
                            // error="Invalid email address"
                            />
                        </View>
                        <Input
                            placeholder="Enter your password"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            leftElement={<Ionicons name="key" size={20} color="#555" />}
                            rightElement={<Ionicons name="eye-off" size={20} color="#555" />}
                            isPassword={true}
                        // error="Invalid email address"
                        />
                        {/* Remember Me & Forgot Password */}
                        <View style={styles.optionsRow}>
                            <View style={styles.checkboxContainer}>
                                <Checkbox
                                    value={rememberMe}
                                    onValueChange={setRememberMe}
                                    color={rememberMe ? '#007AFF' : undefined}
                                />
                                <Text style={styles.checkboxLabel}>Remember me</Text>
                            </View>

                            <Pressable onPress={goToAuth}>
                                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                            </Pressable>
                        </View>


                        <Button
                            title="Login"
                            variant="primary"
                            loading={false}
                        />

                        <View style={styles.footer}>
                            <Text style={styles.footerText}>
                                Don’t have an account?
                                <Text style={styles.signUpLink} onPress={() => navigate('Signup')}> Sign up</Text>
                            </Text>
                        </View>
                        <Text style={styles.privacyText}>
                            By continuing, you agree to our
                            <Text style={styles.privacyLink} onPress={() => console.log('Open Privacy Policy')}> Privacy Policy</Text>.
                        </Text>
                    </View>


                </ImageBackground>

            </SafeAreaView>
        </>
    )
}
export default AdminLoginScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#fff',
        padding: Metrics.paddingLarge,
    },
    content: {
        top: scale(180),
    },
    backgroundImage: {
        width: '100%',
        height: 250,
        marginBottom: 10,

    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
    },
    title: {
        fontSize: FontSizes.xxxLarge,
        fontWeight: "800"
    },
    subtitle: {
        fontSize: FontSizes.small,
        color: Colors.light.secondary,
        marginTop: Metrics.paddingMedium
    },
    inputContainer: {
        marginTop: Metrics.paddingLarge
    },
    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxLabel: {
        marginLeft: 8,
        color: '#444',
        fontSize: FontSizes.medium,
    },
    forgotPassword: {
        color: '#007AFF',
        fontWeight: '500',
    },
    footer: {
        marginTop: scale(20),
        alignItems: 'center',
        justifyContent: 'center',
    },

    footerText: {
        fontSize: FontSizes.small,
        color: '#444',
    },

    signUpLink: {
        color: '#007AFF',
        fontWeight: '600',
    },
    privacyText: {
        top: scale(140),
        fontSize: FontSizes.small,
        color: '#444',
        textAlign: 'center',

    },
    privacyLink: {
        color: '#007AFF',
        fontWeight: '600',
        textDecorationLine: 'underline',

    },

});
