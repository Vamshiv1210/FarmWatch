/**
 * AlertBanner Component - FarmWatch Pro
 * Horizontal scrollable alerts with color-coded severity
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../../constants/theme';

const MOCK_ALERTS = [
  { id: '1', type: 'Critical', message: 'Shed 2: Water Level < 10%', color: theme.colors.critical },
  { id: '2', type: 'High', message: 'Shed 1: High Temp (32°C)', color: theme.colors.high },
  { id: '3', type: 'Warning', message: 'Shed 1: No Caretaker Logged', color: theme.colors.medium },
];

export const AlertBanner = () => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {MOCK_ALERTS.map((alert) => (
        <TouchableOpacity 
          key={alert.id} 
          style={[styles.alertCard, { borderLeftColor: alert.color }]}
          activeOpacity={0.8}
        >
          <View style={styles.typeBadge}>
             <Text style={[styles.typeText, { color: alert.color }]}>{alert.type}</Text>
          </View>
          <Text style={styles.alertText}>{alert.message}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.md,
    paddingLeft: theme.spacing.lg,
  },
  alertCard: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    marginRight: theme.spacing.md,
    borderLeftWidth: 4,
    width: 260,
    ...theme.shadows.soft as any,
  },
  typeBadge: {
    marginBottom: 4,
  },
  typeText: {
    ...theme.typography.caption as any,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  alertText: {
    ...theme.typography.body as any,
    color: theme.colors.textPrimary,
  },
});
