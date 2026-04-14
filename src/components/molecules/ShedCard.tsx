/**
 * ShedCard Component - FarmWatch Pro
 * Detailed view of shed telemetry and caretaker info
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../constants/theme';

interface ShedCardProps {
  name: string;
  status: 'online' | 'offline';
  water: number;
  temp: number;
  lastCaretaker: string;
}

export const ShedCard = ({ name, status, water, temp, lastCaretaker }: ShedCardProps) => {
  const isOnline = status === 'online';

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Ionicons 
          name={isOnline ? "radio-button-on" : "radio-button-off"} 
          size={16} 
          color={isOnline ? theme.colors.success : theme.colors.critical} 
        />
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Water</Text>
          <Text style={[styles.statValue, { color: water < 20 ? theme.colors.high : theme.colors.secondary }]}>
            {water}%
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.stat}>
          <Text style={styles.statLabel}>Temp</Text>
          <Text style={styles.statValue}>{temp}°C</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Ionicons name="person-outline" size={14} color={theme.colors.textMuted} />
        <Text style={styles.footerText}>Last entry: {lastCaretaker}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.xl,
    marginBottom: theme.spacing.md,
    ...theme.shadows.hard as any,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  title: {
    ...theme.typography.h3 as any,
    color: theme.colors.textPrimary,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    ...theme.typography.caption as any,
    color: theme.colors.textSecondary,
    marginBottom: 4,
  },
  statValue: {
    ...theme.typography.h2 as any,
    color: theme.colors.textPrimary,
  },
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: theme.colors.card,
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    ...theme.typography.caption as any,
    color: theme.colors.textMuted,
    marginLeft: 6,
  },
});
