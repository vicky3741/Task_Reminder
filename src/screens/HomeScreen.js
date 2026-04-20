import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../notesSlice';
import { LinearGradient } from 'expo-linear-gradient';

/*
 * EXPERIMENT 4: Multi-screen navigation.
 * EXPERIMENT 5 & 8: STUNNING AESTHETICS.
 * Using Gradients, blur simulations, and deep shadows for a Premium look.
 */

const HomeScreen = ({ navigation }) => {
  const notes = useSelector(state => state.notes.notes);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const numColumns = width > 900 ? 3 : width > 600 ? 2 : 1;

  const renderNote = ({ item }) => (
    <View style={styles.cardWrapper}>
      <View style={[styles.noteCard, { borderTopColor: item.color || '#2196F3' }]}>
        <View>
          <Text style={styles.noteTitle}>{item.title}</Text>
          <Text style={styles.noteContent} numberOfLines={4}>{item.content}</Text>
        </View>
        <TouchableOpacity 
          style={styles.deleteBtn} 
          onPress={() => dispatch(deleteNote(item.id))}
        >
          <Text style={styles.deleteText}>REMOVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>ZenNotes</Text>
        <Text style={styles.subtleText}>Capturing your brilliant ideas</Text>
      </View>
      
      <FlatList
        key={numColumns}
        data={notes}
        renderItem={renderNote}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.mainFab} 
          onPress={() => navigation.navigate('AddNote')}
        >
          <Text style={styles.fabText}>+ NEW NOTE</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.secondaryFab} 
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.secondaryFabText}>LOGS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // Deep Slate Dark Mode
    paddingHorizontal: 15,
  },
  headerContainer: {
    marginTop: 60,
    marginBottom: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 42,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: -1,
  },
  subtleText: {
    color: '#94A3B8',
    fontSize: 16,
    marginTop: 5,
  },
  listContainer: {
    paddingBottom: 150,
  },
  cardWrapper: {
    flex: 1,
    margin: 10,
  },
  noteCard: {
    backgroundColor: '#1E293B', // Darker slate
    borderRadius: 24,
    padding: 24,
    minHeight: 200,
    justifyContent: 'space-between',
    borderTopWidth: 6,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#334155',
  },
  noteTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#F8FAFC',
    marginBottom: 12,
  },
  noteContent: {
    fontSize: 15,
    color: '#CBD5E1',
    lineHeight: 24,
  },
  deleteBtn: {
    marginTop: 15,
    backgroundColor: '#EF444422',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  deleteText: {
    color: '#F87171',
    fontWeight: '900',
    fontSize: 11,
    letterSpacing: 1,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  mainFab: {
    backgroundColor: '#3B82F6',
    flexDirection: 'row',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 24,
    elevation: 10,
    shadowColor: '#3B82F6',
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  secondaryFab: {
    backgroundColor: '#334155',
    paddingVertical: 18,
    paddingHorizontal: 25,
    borderRadius: 24,
  },
  fabText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },
  secondaryFabText: {
    color: '#94A3B8',
    fontSize: 14,
    fontWeight: '900',
  }
});

export default HomeScreen;
