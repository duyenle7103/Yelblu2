import { Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';

export const RecipeSearch = (props: {
  onOpenCamera: () => void;
  onOpenLibrary: () => void;
  ingredients: string[];
  onAddIngredient: (name: string) => void;
  onRemoveIngredient: (name: string) => void;
  searchText: string;
  onChangeSearchText: (text: string) => void;
  onSubmitSearch: () => void;
  suggestedRecipes?: Array<{
    id: number;
    recipeName: string;
    totalTime: number;
    calories: number;
    shortDescription: string;
    imageUrl: string;
  }>;
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Thanh tìm kiếm và nút camera / thư viện */}
      <View style={styles.searchRow}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Thêm nguyên liệu"
            placeholderTextColor="#888"
            value={props.searchText}
            onChangeText={props.onChangeSearchText}
            onSubmitEditing={props.onSubmitSearch}
            returnKeyType="done"
          />
        </View>

        <TouchableOpacity style={styles.iconButton} onPress={props.onOpenCamera}>
          <Feather name="camera" size={22} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={props.onOpenLibrary}>
          <Feather name="image" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Danh sách nguyên liệu */}
      <Text style={styles.sectionTitle}>Nguyên liệu đã chọn</Text>
      <View style={styles.tagContainer}>
        {props.ingredients.map((item) => (
          <View key={item} style={styles.tag}>
            <Text style={styles.tagText}>{item}</Text>
            <TouchableOpacity onPress={() => props.onRemoveIngredient(item)}>
              <Feather name="x" size={16} color="#f5a623" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Kết quả tìm kiếm */}
      <Text style={styles.sectionTitle}>Kết quả tìm kiếm</Text>
      <TouchableOpacity style={styles.filterButton}>
        <Feather name="filter" size={18} color="#f5a623" />
        <Text style={styles.filterText}>Bộ lọc</Text>
      </TouchableOpacity>

      {/* Danh sách công thức gợi ý */}
      <FlatList
        data={props.suggestedRecipes}
        keyExtractor={(item) => item.id.toString()}
        style={{ marginTop: 10 }}
        ListEmptyComponent={
          <Text style={{ marginTop: 10, color: '#888' }}>
            Chưa có công thức gợi ý
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.recipeCard}>
            <Image source={{ uri: item.imageUrl }} style={styles.recipeImage} />
            <View style={styles.recipeInfo}>
              <Text style={styles.recipeName}>{item.recipeName}</Text>
              <Text style={styles.recipeDesc}>{item.shortDescription}</Text>
              <Text style={styles.recipeMeta}>
                Thời gian: {item.totalTime} phút | Calories: {item.calories}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

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
  icon: { marginRight: 4 },
  textInput: { flex: 1, marginLeft: 8, fontSize: 16 },
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
  recipeCard: {
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 1,
  },
  recipeImage: {
    width: 100,
    height: 100,
  },
  recipeInfo: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  recipeName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  recipeDesc: {
    color: '#555',
    marginVertical: 4,
  },
  recipeMeta: {
    color: '#999',
    fontSize: 12,
  },
});
