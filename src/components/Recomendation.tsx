import { Button, Image, Text, View } from 'tamagui';

import { CardRecomendation } from './CardRecomendation';
import { formattedToKm } from '../utils/formattedToKm';
import { services } from '../utils/supabase/service';

export type RecomendationsProps = {
  name: string;
  image: string;
  category: string;
  categoryImage: string;
  distance: string;
  distanceKm: number;
  stars: number;
};

export function Recomendation({
  name,
  image,
  categoryImage,
  category,
  distance,
  distanceKm,
  stars,
  ...rest
}: RecomendationsProps) {
  return (
    <View flexDirection="column" h={230} w={172} borderRadius="$8" gap="$2" bg="#EAEAEA" {...rest}>
      <Image
        source={{ uri: image, height: 80, width: 172 }}
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
      />
      <View p="$3">
        <View gap="$2">
          <Text color="#373737" fontSize={14} fontWeight="bold">
            {name}
          </Text>
          <Text color="#A5A5A5">{category}</Text>
          <Text color="#A5A5A5">{distance}</Text>
        </View>
        <View flexDirection="row" gap="$2" mt="$4">
          <CardRecomendation image={`${services.storage.imagePath}/star.png`} title={stars} />
          <CardRecomendation title={`${formattedToKm(distanceKm)}`} />
          <View bg="#C4C4C4" p="$2" borderRadius="$10" mb="auto">
            <Image source={{ uri: categoryImage, width: 14, height: 14 }} />
          </View>
        </View>
      </View>
    </View>
  );
}
