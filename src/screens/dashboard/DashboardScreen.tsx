import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { theme } from '../../constants/theme';
import { TopBar } from '../../components/organisms/TopBar';
import { AlertBanner } from '../../components/molecules/AlertBanner';
import { ShedCard } from '../../components/molecules/ShedCard';
import { CameraGrid } from '../../components/molecules/CameraGrid';

export const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.surface} />
      <View style={styles.container}>
        <TopBar />
        
        <ScrollView 
          stickyHeaderIndices={[1]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <AlertBanner />
          
          <View style={styles.sectionHeader}>
            <View style={styles.divider} />
          </View>

          <View style={styles.content}>
            <ShedCard 
              name="Shed 1 - Layers" 
              status="online" 
              water={72} 
              temp={29} 
              lastCaretaker="Rajesh Kumar (10:15 AM)" 
            />
            
            <ShedCard 
              name="Shed 2 - Broilers" 
              status="online" 
              water={18} 
              temp={31} 
              lastCaretaker="Suresh P. (08:45 AM)" 
            />

            <CameraGrid />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  content: {
    paddingHorizontal: theme.spacing.lg,
  },
  sectionHeader: {
    height: 1,
    backgroundColor: theme.colors.card,
    marginVertical: theme.spacing.sm,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.card,
  },
});
