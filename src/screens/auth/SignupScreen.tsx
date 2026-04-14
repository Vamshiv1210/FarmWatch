import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../../constants/theme';
import { Input } from '../../components/atoms/Input';
import { RadioButton } from '../../components/atoms/RadioButton';

export const SignupScreen = ({ navigation }: any) => {
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    gender: 'male',
    type: 'business',
  });

  const handleContinue = () => {
    // TODO: Store temp data and navigate to OTP
    navigation.navigate('OTP', { flow: 'signup' });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join FarmWatch Pro specialized monitoring</Text>
        </View>

        <View style={styles.form}>
          <Input 
            label="Full Name" 
            placeholder="John Doe" 
            value={form.name}
            onChangeText={(val) => setForm({...form, name: val})}
          />
          <Input 
            label="Phone Number" 
            placeholder="+91 98765 43210" 
            keyboardType="phone-pad"
            value={form.phone}
            onChangeText={(val) => setForm({...form, phone: val})}
          />
          <Input 
            label="Email Address" 
            placeholder="john@example.com" 
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={(val) => setForm({...form, email: val})}
          />
          
          <View style={styles.row}>
            <View style={{ flex: 1, marginRight: 16 }}>
              <Input 
                label="Age" 
                placeholder="25" 
                keyboardType="numeric"
                value={form.age}
                onChangeText={(val) => setForm({...form, age: val})}
              />
            </View>
            <View style={{ flex: 2 }}>
              <Text style={styles.label}>Gender</Text>
              <View style={styles.radioGroup}>
                <RadioButton 
                  label="Male" 
                  selected={form.gender === 'male'} 
                  onSelect={() => setForm({...form, gender: 'male'})} 
                />
                <RadioButton 
                  label="Female" 
                  selected={form.gender === 'female'} 
                  onSelect={() => setForm({...form, gender: 'female'})} 
                />
              </View>
            </View>
          </View>

          <Text style={styles.label}>Account Purpose</Text>
          <View style={styles.radioGroup}>
            <RadioButton 
              label="Business / Farm" 
              selected={form.type === 'business'} 
              onSelect={() => setForm({...form, type: 'business'})} 
            />
            <RadioButton 
              label="Home / Domestic" 
              selected={form.type === 'home'} 
              onSelect={() => setForm({...form, type: 'home'})} 
            />
          </View>

          <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.8}
            onPress={handleContinue}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => navigation.navigate('Login')}
            style={styles.loginLink}
          >
            <Text style={styles.loginLinkText}>
              Already have an account? <Text style={{ color: theme.colors.secondary }}>Log In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: theme.spacing.lg,
    paddingTop: 60,
  },
  header: {
    marginBottom: theme.spacing.xl,
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
  form: {
    marginTop: theme.spacing.lg,
  },
  label: {
    ...theme.typography.caption as any,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  radioGroup: {
    flexDirection: 'row',
    marginBottom: theme.spacing.lg,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    marginTop: theme.spacing.lg,
  },
  buttonText: {
    ...theme.typography.button as any,
    color: theme.colors.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  loginLink: {
    marginTop: theme.spacing.xl,
    alignItems: 'center',
  },
  loginLinkText: {
    ...theme.typography.body as any,
    color: theme.colors.textSecondary,
  },
});
