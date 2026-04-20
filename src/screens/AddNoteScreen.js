import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNote } from '../notesSlice';

/*
 * EXPERIMENT 4: Add New Note screen.
 * Redesigned with a modern, glass-morphism inspired form.
 */

const AddNoteScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedColor, setSelectedColor] = useState('#3B82F6');
  
  const dispatch = useDispatch();

  const colors = [
    { name: 'Blue', code: '#3B82F6' },
    { name: 'Purple', code: '#A855F7' },
    { name: 'Emerald', code: '#10B981' },
    { name: 'Amber', code: '#F59E0B' },
    { name: 'Rose', code: '#F43F5E' },
  ];

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      dispatch(addNote({ title, content, color: selectedColor }));
      navigation.goBack();
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.mainTitle}>Create New Note</Text>
        
        <View style={styles.inputCard}>
          <Text style={styles.label}>NICKNAME FOR NOTE</Text>
          <TextInput
            style={styles.input}
            placeholder="Type a title..."
            placeholderTextColor="#64748B"
            value={title}
            onChangeText={setTitle}
          />

          <Text style={[styles.label, { marginTop: 25 }]}>YOUR THOUGHTS</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Start writing..."
            placeholderTextColor="#64748B"
            value={content}
            onChangeText={setContent}
            multiline
            numberOfLines={8}
            textAlignVertical="top"
          />
        </View>

        <Text style={styles.label}>ACCENT COLOR</Text>
        <View style={styles.colorRow}>
          {colors.map(color => (
            <TouchableOpacity
              key={color.code}
              style={[
                styles.colorCircle, 
                { backgroundColor: color.code },
                selectedColor === color.code && styles.selectedCircle
              ]}
              onPress={() => setSelectedColor(color.code)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveText}>FINALIZE NOTE</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>GO BACK</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  scroll: {
    padding: 25,
    paddingTop: 40,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#F8FAFC',
    marginBottom: 30,
    letterSpacing: -1,
  },
  inputCard: {
    backgroundColor: '#1E293B',
    borderRadius: 24,
    padding: 25,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#334155',
  },
  label: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
    color: '#94A3B8',
    marginBottom: 12,
  },
  input: {
    fontSize: 18,
    color: '#F8FAFC',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  textArea: {
    height: 180,
    borderBottomWidth: 0,
    fontSize: 16,
    lineHeight: 24,
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  colorCircle: {
    width: 50,
    height: 50,
    borderRadius: 18,
    borderWidth: 0,
  },
  selectedCircle: {
    borderWidth: 4,
    borderColor: '#F8FAFC',
  },
  saveBtn: {
    backgroundColor: '#3B82F6',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#3B82F6',
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 8,
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },
  cancelBtn: {
    padding: 15,
    alignItems: 'center',
  },
  cancelText: {
    color: '#64748B',
    fontWeight: '700',
  }
});

export default AddNoteScreen;
