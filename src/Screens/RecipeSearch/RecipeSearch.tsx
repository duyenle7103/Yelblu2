import React from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';

interface Props {
  onOpenCamera: () => void;
  onOpenLibrary: () => void;
  ingredients: string[];
  onAddIngredient: (name: string) => void;
  onRemoveIngredient: (name: string) => void;
  searchText: string;
  onChangeSearchText: (text: string) => void;
  onSubmitSearch: () => void;
}

export default function RecipeSearch({
  onOpenCamera,
  onOpenLibrary,
  ingredients,
  onAddIngredient,
  onRemoveIngredient,
  searchText,
  onChangeSearchText,
  onSubmitSearch,
}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchRow}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Thêm nguyên liệu"
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={onChangeSearchText}
            onSubmitEditing={onSubmitSearch}
            returnKeyType="done"
          />
        </View>

        <TouchableOpacity style={styles.iconButton} onPress={onOpenCamera}>
          <Feather name="camera" size={22} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={onOpenLibrary}>
          <Feather name="image" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Nguyên liệu đã chọn</Text>
      <View style={styles.tagContainer}>
        {ingredients.map((item) => (
          <View key={item} style={styles.tag}>
            <Text style={styles.tagText}>{item}</Text>
            <TouchableOpacity onPress={() => onRemoveIngredient(item)}>
              <Feather name="x" size={16} color="#f5a623" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Kết quả tìm kiếm</Text>

      <TouchableOpacity style={styles.filterButton}>
        <Feather name="filter" size={18} color="#f5a623" />
        <Text style={styles.filterText}>Bộ lọc</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  searchRow: { flexDirection: 'row', alignItems: 'center' },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
  },
  textInput: { flex: 1, marginLeft: 8, fontSize: 16 },
  icon: { marginRight: 4 },
  iconButton: {
    marginLeft: 8,
    padding: 6,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
  },
  sectionTitle: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  filterText: {
    marginLeft: 4,
    color: '#f5a623',
    fontWeight: '600',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff6e5',
    borderColor: '#f5a623',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    marginRight: 6,
    color: '#333',
  },
});
