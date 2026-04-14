import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { theme } from '../../constants/theme';

export const OTPScreen = ({ navigation, route }: any) => {
  const [otp, setOtp] = React.useState('');
  const { flow } = route.params || { flow: 'login' };

  const handleVerify = () => {
    // TODO: Verify OTP with Firebase
    // For prototype: Bypass
    console.log('Verifying OTP for flow:', flow);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.title}>Verification</Text>
          <Text style={styles.subtitle}>Enter the 6-digit code sent to your phone</Text>
        </View>

        <View style={styles.otpContainer}>
          <TextInput
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={6}
            value={otp}
            onChangeText={setOtp}
            placeholder="000000"
            placeholderTextColor={theme.colors.textMuted}
            autoFocus
          />
        </View>
        
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleVerify}>
          <Text style={styles.buttonText}>Verify & Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resendButton}>
          <Text style={styles.resendText}>Didn't receive the code? <Text style={{ color: theme.colors.secondary }}>Resend</Text></Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: theme.spacing.xl,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: theme.spacing.xl,
  },
  backText: {
    ...theme.typography.body as any,
    color: theme.colors.secondary,
    fontWeight: '600',
  },
  header: {
    marginBottom: theme.spacing.xxl,
  },
  title: {
    ...theme.typography.h1 as any,
    color: theme.colors.textPrimary,
  },
  subtitle: {
    ...theme.typography.body as any,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  otpContainer: {
    marginBottom: theme.spacing.xxl,
  },
  otpInput: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    color: theme.colors.secondary,
    fontSize: 32,
    textAlign: 'center',
    letterSpacing: 8,
    fontWeight: '700',
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
  },
  buttonText: {
    ...theme.typography.button as any,
    color: theme.colors.white,
  },
  resendButton: {
    marginTop: theme.spacing.xl,
    alignItems: 'center',
  },
  resendText: {
    ...theme.typography.body as any,
    color: theme.colors.textSecondary,
  },
});
