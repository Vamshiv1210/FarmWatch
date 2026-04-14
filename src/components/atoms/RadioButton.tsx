import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { theme } from '../../constants/theme';

interface RadioButtonProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
}

export const RadioButton = ({ label, selected, onSelect }: RadioButtonProps) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onSelect}
      activeOpacity={0.7}
    >
      <View style={[styles.outer, selected && styles.outerSelected]}>
        {selected && <View style={styles.inner} />}
      </View>
      <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.lg,
    paddingVertical: theme.spacing.xs,
  },
  outer: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.textMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.sm,
  },
  outerSelected: {
    borderColor: theme.colors.secondary,
  },
  inner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.secondary,
  },
  label: {
    ...theme.typography.body as any,
    color: theme.colors.textSecondary,
  },
  labelSelected: {
    color: theme.colors.textPrimary,
    fontWeight: '600',
  },
});
