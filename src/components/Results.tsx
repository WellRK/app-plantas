import { Star } from 'lucide-react-native';
import { Image, Separator, Text, View } from 'tamagui';

import { formattedToDolar } from '../utils/formattedToDolar';
import { formattedToKm } from '../utils/formattedToKm';

interface IProps {
  stars: number;
  distance: number;
  minPrice: number;
  maxPrice: number;
  title: string;
  image: string;
}

export function Results({ stars, distance, minPrice, maxPrice, title, image }: IProps) {
  return (
    <View flexDirection="row" alignItems="center" gap="$5" mt="$6">
      <Image source={{ uri: image, width: 56, height: 56 }} borderRadius={10} />
      <View alignItems="flex-start" gap="$2">
        <Text fontSize={16} fontWeight="500" color="#222" textAlign="center">
          {title}
        </Text>
        <View flexDirection="row" gap="$5">
          <View flexDirection="row" gap="$2">
            <Star color="#319258" size={14} />
            <Text fontSize={12} fontWeight="bold" color="#319258">
              {stars}
            </Text>
          </View>
          <Text color="#A5A5A5">{formattedToKm(distance)}</Text>
          <Text color="#319258">
            {formattedToDolar(minPrice)} - {formattedToDolar(maxPrice)}/h
          </Text>
        </View>
      </View>
    </View>
  );
}
