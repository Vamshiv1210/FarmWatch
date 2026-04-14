/**
 * TopBar Component - FarmWatch Pro
 * Premium Header with Notifications and Settings
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../constants/theme';

export const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>🌿 FarmWatch Pro</Text>
      
      <View style={styles.iconGroup}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={24} color={theme.colors.textPrimary} />
          {/* Unread Badge */}
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="settings-outline" size={24} color={theme.colors.textPrimary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.surface,
  },
  appName: {
    ...theme.typography.h3 as any,
    color: theme.colors.textPrimary,
    fontWeight: '700',
  },
  iconGroup: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: theme.spacing.md,
    padding: theme.spacing.xs,
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: theme.colors.critical,
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: theme.colors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
});
