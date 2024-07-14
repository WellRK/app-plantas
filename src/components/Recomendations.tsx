import { View } from 'tamagui';

import { Recomendation, RecomendationsProps } from './Recomendation';
import { services } from '../utils/supabase/service';

type Props = {
  recomendations: RecomendationsProps[];
};

export function Recomendations({ recomendations }: Props) {
  return (
    <View flexDirection="row" gap="$2" flexWrap="wrap" mt="$6">
      {recomendations.map((recomendation) => (
        <Recomendation
          category={recomendation.category}
          categoryImage={`${services.storage.imagePath}/${recomendation.categoryImage}`}
          key={recomendation.name}
          name={recomendation.name}
          distance={recomendation.distance}
          stars={recomendation.stars}
          distanceKm={recomendation.distanceKm}
          image={`${services.storage.imagePath}/${recomendation.image}`}
        />
      ))}
    </View>
  );
}
