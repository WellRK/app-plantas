import { ScrollView } from 'tamagui';

import { Category, CategoriesProps } from './Category';
import { services } from '../utils/supabase/service';

type Props = {
  categories: CategoriesProps[];
};

export function Categories({ categories }: Props) {
  return (
    <ScrollView
      mt="$6"
      contentContainerStyle={styles.categoriesContent}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {categories.map((category) => (
        <Category
          key={category.name}
          name={category.name}
          image={`${services.storage.imagePath}/${category.image}`}
        />
      ))}
    </ScrollView>
  );
}

const styles = {
  categoriesContent: {
    gap: 12,
  },
};
