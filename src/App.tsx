import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { RootNavigator } from './navigation/RootNavigator';
import { theme } from './constants/theme';
import { useAuthStore } from './store/useAuthStore';

const App = () => {
  const isLoading = useAuthStore((state) => state.isLoading);
  const setLoading = useAuthStore((state) => state.setLoading);

  React.useEffect(() => {
    // Mocking an initial auth check (e.g. checking token in storage)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.secondary} />
      </View>
    );
  }

  return <RootNavigator />;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
