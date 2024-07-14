import { Text, Image, View, Button } from 'tamagui';

import { formattedToDolar } from '../utils/formattedToDolar';

export type ProfessionalsProps = {
  name: string;
  userImage: string;
  minPrice: number;
  maxPrice: number;
  category: string;
  categoryImage: string;
};

export function Professional({
  name,
  userImage,
  categoryImage,
  maxPrice,
  minPrice,
  category,
  ...rest
}: ProfessionalsProps) {
  return (
    <Button
      pressStyle={{ backgroundColor: '#EAEAEA' }}
      p="$4"
      h={100}
      borderRadius="$4"
      outlineWidth={0}
      gap="$2"
      bg="#EAEAEA"
      {...rest}>
      <Image source={{ uri: userImage, width: 56, height: 56 }} borderRadius={10} />
      <View alignItems="flex-start">
        <Text fontSize={16} fontWeight="500" color="#222" textAlign="center">
          {name}
        </Text>

        <Text fontSize={12} fontWeight="500" color="#A5A5A5" textAlign="center">
          {category}
        </Text>
        <Text fontSize={12} fontWeight="500" color="#A5A5A5" textAlign="center">
          Valores Médios:{' '}
          <Text color="#319258">
            {formattedToDolar(minPrice)} - {formattedToDolar(maxPrice)}
          </Text>
        </Text>
      </View>
      <View bg="#C4C4C4" p="$2" borderRadius="$10" mb="auto">
        <Image source={{ uri: categoryImage, width: 18, height: 18 }} />
      </View>
    </Button>
  );
}
