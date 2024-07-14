import { ScrollView, Text, View } from 'tamagui';

import { CardFilter } from '~/src/components/CardFilter';
import { FilterList } from '~/src/components/FilterList';
import { InputComponent } from '~/src/components/Input';
import { Results } from '~/src/components/Results';
import { useInputData } from '~/src/hooks/use-input-data';
import { services } from '~/src/utils/supabase/service';

export default function Search() {
  const userImage = 'mary.png';
  const userImage1 = 'joseph.png';
  const userImage2 = 'john.png';
  const userImage3 = 'user-mock.png';

  return (
    <ScrollView px="$4">
      <View mt="$5">
        <Text color="#373737" fontSize="$8" lineHeight="$8" fontWeight="bold">
          Pesquise por profissionais {'\n'}
          ou estabelecimentos
        </Text>
        <InputComponent />
        <FilterList title="Passeador de Cães" />
        <FilterList title="Jardineiro" />
        <FilterList title="Balconista" />
      </View>
      <View mt="$5">
        <Text color="#373737" fontSize="$6" lineHeight="$8" fontWeight="bold">
          Principais resultados
        </Text>
        <ScrollView horizontal gap="$3" flexDirection="row" mt="$4">
          <CardFilter title="Até $54/h" />
          <CardFilter title="5km" />
          <CardFilter title="De manhã" />
        </ScrollView>
        <View>
          <Results
            image={`${services.storage.imagePath}/${userImage}`}
            title="Maria Clara - Limpeza Residencial"
            stars={4.8}
            distance={2.2}
            minPrice={25}
            maxPrice={68}
          />
          <Results
            image={`${services.storage.imagePath}/${userImage1}`}
            title="Casa Limpa & Cia"
            stars={5.0}
            distance={1.6}
            minPrice={20}
            maxPrice={30}
          />
          <Results
            image={`${services.storage.imagePath}/${userImage2}`}
            title="Miguel Carvalho - Lavagem a seco"
            stars={4.4}
            distance={0.5}
            minPrice={25}
            maxPrice={68}
          />
          <Results
            image={`${services.storage.imagePath}/${userImage3}`}
            title="Pedro Andrade - Limpeza Comercial"
            stars={4.7}
            distance={0.8}
            minPrice={40}
            maxPrice={50}
          />
        </View>
      </View>
    </ScrollView>
  );
}
