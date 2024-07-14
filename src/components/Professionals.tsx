import { ScrollView } from 'tamagui';

import { Professional, ProfessionalsProps } from './Professional';
import { services } from '../utils/supabase/service';

type Props = {
  professionals: ProfessionalsProps[];
};

export function Professionals({ professionals }: Props) {
  return (
    <ScrollView
      mt="$6"
      contentContainerStyle={styles.professionalsContent}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {professionals.map((professional) => (
        <Professional
          category={professional.category}
          categoryImage={`${services.storage.imagePath}/${professional.categoryImage}`}
          maxPrice={professional.maxPrice}
          minPrice={professional.minPrice}
          key={professional.name}
          name={professional.name}
          userImage={`${services.storage.imagePath}/${professional.userImage}`}
        />
      ))}
    </ScrollView>
  );
}

const styles = {
  professionalsContent: {
    gap: 12,
  },
};
