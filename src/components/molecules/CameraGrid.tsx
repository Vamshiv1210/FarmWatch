/**
 * CameraGrid Component - FarmWatch Pro
 * 2x2 Thumbnail grid with tap-to-expand functionality
 */

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { theme } from '../../constants/theme';

const { width } = Dimensions.get('window');
const GRID_SIZE = (width - theme.spacing.lg * 2 - theme.spacing.sm) / 2;

export const CameraGrid = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Live Camera Previews</Text>
      <View style={styles.grid}>
        <CameraItem name="Shed 1 Main" localIcon="🌿" />
        <CameraItem name="Water Out" localIcon="💧" />
        <CameraItem name="Main Gate" localIcon="🚧" />
        <CameraItem name="Brolier Feed" localIcon="🐣" />
      </View>
    </View>
  );
};

const CameraItem = ({ name, localIcon }: { name: string; localIcon: string }) => (
  <TouchableOpacity style={styles.item} activeOpacity={0.9}>
    <View style={styles.thumbPlaceholder}>
      <Text style={{ fontSize: 40 }}>{localIcon}</Text>
      <View style={styles.liveBadge}>
        <View style={styles.dot} />
        <Text style={styles.liveText}>LIVE</Text>
      </View>
    </View>
    <View style={styles.overlay}>
      <Text style={styles.name}>{name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.md,
  },
  label: {
    ...theme.typography.caption as any,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: GRID_SIZE,
    height: GRID_SIZE,
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.card,
    marginBottom: theme.spacing.sm,
    overflow: 'hidden',
  },
  thumbPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
  },
  name: {
    ...theme.typography.caption as any,
    color: theme.colors.white,
    fontWeight: '600',
  },
  liveBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.critical,
    marginRight: 4,
  },
  liveText: {
    color: theme.colors.white,
    fontSize: 8,
    fontWeight: 'bold',
  },
});
