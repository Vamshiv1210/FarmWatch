import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../../constants/theme';

export const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good Morning,</Text>
        <Text style={styles.title}>Farm Overview</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.alertBanner}>
          <Text style={styles.alertText}>⚠️ 2 Active Alerts</Text>
        </View>

        {/* Shed Cards will go here */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Shed 1 - Layers</Text>
          <View style={styles.statsRow}>
            <StatItem label="Water" value="72%" color={theme.colors.success} />
            <StatItem label="Temp" value="29°C" color={theme.colors.medium} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Shed 2 - Broilers</Text>
          <View style={styles.statsRow}>
            <StatItem label="Water" value="18%" color={theme.colors.critical} />
            <StatItem label="Temp" value="31°C" color={theme.colors.high} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const StatItem = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <View style={styles.statContainer}>
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={[styles.statValue, { color }]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    padding: theme.spacing.lg,
    paddingTop: theme.spacing.xl * 2,
    backgroundColor: theme.colors.surface,
  },
  greeting: {
    ...theme.typography.body as any,
    color: theme.colors.secondary,
  },
  title: {
    ...theme.typography.h1 as any,
    color: theme.colors.textPrimary,
  },
  scrollContent: {
    padding: theme.spacing.md,
  },
  alertBanner: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.high,
  },
  alertText: {
    ...theme.typography.h3 as any,
    color: theme.colors.textPrimary,
  },
  card: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.xl,
    marginBottom: theme.spacing.md,
    ...theme.shadows.soft as any,
  },
  cardTitle: {
    ...theme.typography.h3 as any,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statContainer: {
    alignItems: 'center',
  },
  statLabel: {
    ...theme.typography.caption as any,
    color: theme.colors.textSecondary,
    marginBottom: 4,
  },
  statValue: {
    ...theme.typography.h2 as any,
    fontWeight: '700',
  },
});
