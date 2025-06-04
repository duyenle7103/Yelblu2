import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import RecipeSearch from './RecipeSearch';
import { Alert } from 'react-native';

const CLARIFAI_API_KEY = 'd1d008a06a3842f48c5bd9720a6815c2';
const CLARIFAI_MODEL_ID = 'food-item-recognition';
const CLARIFAI_API_URL = `https://api.clarifai.com/v2/models/${CLARIFAI_MODEL_ID}/outputs`;

export default function RecipeSearchContainer() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');

  const addIngredient = (name: string) => {
    if (!ingredients.includes(name)) {
      setIngredients([...ingredients, name]);
    }
  };

  const removeIngredient = (name: string) => {
    setIngredients(ingredients.filter((item) => item !== name));
  };

  const handleSubmitSearch = () => {
    const trimmed = searchText.trim();
    if (trimmed) {
      addIngredient(trimmed);
      setSearchText('');
    }
  };

  const recognizeIngredients = async (imageUri: string) => {
  try {
    const base64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const response = await fetch(CLARIFAI_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Key ${CLARIFAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_app_id: {
          user_id: 'clarifai',
          app_id: 'main',
        },
        inputs: [
          {
            data: {
              image: { base64 },
            },
          },
        ],
      }),
    });

    const result = await response.json();
    const concepts = result?.outputs?.[0]?.data?.concepts;

    if (concepts && concepts.length > 0) {
      const newIngredients = concepts
        .map((item: any) => item.name)
        .filter((name: string) => !ingredients.includes(name));

      setIngredients([...ingredients, ...newIngredients]);
    } else {
      console.log('❌ Không nhận diện được nguyên liệu.');
    }
  } catch (error) {
    console.error('Lỗi nhận diện nguyên liệu:', error);
  }
};


  

  const handleOpenCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Quyền truy cập camera bị từ chối');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      await recognizeIngredients(result.assets[0].uri);
    }
  };

  const handleOpenLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Quyền truy cập thư viện ảnh bị từ chối');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      await recognizeIngredients(result.assets[0].uri);
    }
  };

  return (
    <RecipeSearch
      onOpenCamera={handleOpenCamera}
      onOpenLibrary={handleOpenLibrary}
      ingredients={ingredients}
      onAddIngredient={addIngredient}
      onRemoveIngredient={removeIngredient}
      searchText={searchText}
      onChangeSearchText={setSearchText}
      onSubmitSearch={handleSubmitSearch}
    />
  );
}
