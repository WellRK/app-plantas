import { Tabs, useNavigation } from 'expo-router';
import { MoveLeft } from 'lucide-react-native';
import { Button, Image, Text, View } from 'tamagui';

import { services } from '~/src/utils/supabase/service';

export default function TabLayout() {
  const navigation = useNavigation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#319258',
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: 20,
          paddingVertical: 5,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              bg={focused ? '#319258' : 'transparent'}
              borderRadius="$10"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              marginVertical="$4"
              w={100}
              h={40}
              gap="$2">
              <Image
                source={{
                  uri: focused
                    ? `${services.storage.imagePath}/home-icon-white.png`
                    : `${services.storage.imagePath}/home-icon.png`,
                  width: 19,
                  height: 19.5,
                }}
              />
              {focused && (
                <Text color="white" fontSize="$3">
                  Início
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            height: 120,
          },
          headerRight() {
            return (
              <View bg="#319258" borderRadius="$10" p="$3" mr="$4">
                <Image
                  source={{
                    uri: `${services.storage.imagePath}/tune.png`,
                    width: 22,
                    height: 22,
                  }}
                />
              </View>
            );
          },
          headerLeft() {
            return (
              <Button
                backgroundColor="white"
                pressStyle={{ backgroundColor: 'white' }}
                ml="$4"
                width={40}
                height={40}
                onPress={() => navigation.goBack()}
                icon={<MoveLeft size={30} color="#319258" />}
              />
            );
          },
          tabBarIcon: ({ focused }) => (
            <View
              bg={focused ? '#319258' : 'transparent'}
              borderRadius="$10"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              marginVertical="$4"
              w={100}
              h={40}
              gap="$2">
              <Image
                source={{
                  uri: focused
                    ? `${services.storage.imagePath}/search-white.png`
                    : `${services.storage.imagePath}/search.png`,
                  width: 18,
                  height: 18,
                }}
              />
              {focused && (
                <Text color="white" fontSize="$3">
                  Pesquisar
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="work"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              bg={focused ? '#319258' : 'transparent'}
              borderRadius="$10"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              marginVertical="$4"
              w={100}
              h={40}
              gap="$2">
              <Image
                source={{
                  uri: focused
                    ? `${services.storage.imagePath}/work-white.png`
                    : `${services.storage.imagePath}/work.png`,
                  width: 18,
                  height: 17,
                }}
              />
              {focused && (
                <Text color="white" fontSize="$3">
                  Serviços
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="announce"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              bg={focused ? '#319258' : 'transparent'}
              borderRadius="$10"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              marginVertical="$4"
              w={100}
              h={40}
              gap="$2">
              <Image
                source={{
                  uri: focused
                    ? `${services.storage.imagePath}/anunciar-white.png`
                    : `${services.storage.imagePath}/anunciar.png`,
                  width: 23,
                  height: 18,
                }}
              />
              {focused && (
                <Text color="white" fontSize="$3">
                  Anunciar
                </Text>
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
