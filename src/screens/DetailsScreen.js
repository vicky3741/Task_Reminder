import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

/*
 * EXPERIMENT 4: Project Info / Grade Report Screen.
 * Redesigned with a high-end "Dashboard" look.
 */

const DetailsScreen = ({ navigation }) => {
  const experiments = [
    { num: 4, tag: 'NAVIGATION', desc: "Advanced stack navigation with 3 custom screens." },
    { num: 5, tag: 'STYLING', desc: "Premium Dark-Slate UI based on modern CSS standards." },
    { num: 6, tag: 'TESTING', desc: "Unit coverage using Jest & RTL (Mocked Nav included)." },
    { num: 7, tag: 'STATE', desc: "Global store management via Redux Toolkit slices." },
    { num: 8, tag: 'LAYOUT', desc: "Responsive 3-column mesh system for Web & Mobile." },
    { num: 9, tag: 'PERFORMANCE', desc: "FlatList virtualization for ultra-smooth scrolling." },
    { num: 10, tag: 'CORE', desc: "Production-ready boilerplate & keyboard-aware views." }
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <Text style={styles.header}>Grade Report</Text>
      <Text style={styles.subtitle}>Verification of all technical experiments</Text>
      
      {experiments.map((exp) => (
        <View key={exp.num} style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.expBadge}>
              <Text style={styles.expNum}>E{exp.num}</Text>
            </View>
            <Text style={styles.tag}>{exp.tag}</Text>
          </View>
          <Text style={styles.desc}>{exp.desc}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>CLOSE REPORT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  scroll: {
    padding: 25,
    paddingTop: 50,
  },
  header: {
    fontSize: 42,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  expBadge: {
    backgroundColor: '#3B82F6',
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expNum: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 14,
  },
  tag: {
    color: '#3B82F6',
    fontWeight: '900',
    fontSize: 12,
    letterSpacing: 2,
  },
  desc: {
    fontSize: 15,
    color: '#CBD5E1',
    lineHeight: 24,
  },
  backBtn: {
    marginTop: 20,
    backgroundColor: '#334155',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 100,
  },
  backText: {
    color: '#F8FAFC',
    fontWeight: '900',
    letterSpacing: 1,
  }
});

export default DetailsScreen;
