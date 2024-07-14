import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, Input, ScrollView, Text, View, XStack } from 'tamagui';

import { ProfessionalsResponse } from '../../@types/professionals-interface';
import { Categories } from '../../components/Categories';
import { Location } from '../../components/Location';
import { Professionals } from '../../components/Professionals';
import { Recomendations } from '../../components/Recomendations';
import { UserShortImage } from '../../components/UserShortImage';
import { services } from '../../utils/supabase/service';

import { InputComponent } from '~/src/components/Input';

export default function Home() {
  const [professionals, setProfessionals] = useState<ProfessionalsResponse[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [recomendations, setRecomendations] = useState<any[]>([]);

  useEffect(() => {
    setCategories([
      {
        name: 'Boldo',
        image: 'barber.png',
      },
      {
        name: 'Erva-Doce',
        image: 'bell.png',
      },
      {
        name: 'Capim-Cidreira',
        image: 'books.png',
      },
      {
        name: 'Goiaba (folha)',
        image: 'burguer.png',
      },
      {
        name: 'Romã',
        image: 'computer.png',
      },
      {
        name: 'Hortelã miúda',
        image: 'dog.png',
      },
      {
        name: 'Alecrim',
        image: 'pen.png',
      },
    ]);
    setProfessionals([
      {
        name: 'Boldo',
        userImage: 'john.png',
        category: 'Beneficios',
        categoryImage: 'barber.png',
        minPrice: 20,
        maxPrice: 50,
      },
      {
        name: 'Erva-Doce',
        userImage: 'mary.png',
        category: 'Benefícios',
        categoryImage: 'bell.png',
        minPrice: 10,
        maxPrice: 35,
      },
      {
        name: 'Capim-Cidreira',
        userImage: 'joseph.png',
        category: 'Benefícios',
        categoryImage: 'books.png',
        minPrice: 15,
        maxPrice: 40,
      },
    ]);
    setRecomendations([
      {
        name: 'Goiaba (folha)',
        image: 'estabelecimento-01.png',
        category: 'Benefícios',
        categoryImage: 'barber.png',
        distance: '2 minutos de leitura',
        distanceKm: 0.5,
        stars: 4.5,
      },
      {
        name: 'Romã',
        image: 'estabelecimento-02.png',
        category: 'Benefícios',
        categoryImage: 'bell.png',
        distance: '5 minutos de leitura',
        distanceKm: 0.5,
        stars: 4.5,
      },
    ]);
  }, []);

  return (
    <ScrollView px="$4">
      <View mt="$10" display="flex" flexDirection="row" justifyContent="space-between">
        <Location image={`${services.storage.imagePath}/pin.png`} name="Rua Aqui Perto, 401" />
        <UserShortImage />
      </View>
      <InputComponent />
      <View display="flex" justifyContent="space-between" flexDirection="row">
        <Text fontWeight="bold" fontSize="$6">
          Procure por Plantas
        </Text>
        <Link href="https://www.fitoessencia.com.br/">
          <Text color="#319258" fontWeight="600">
            Ver tudo
          </Text>
        </Link>
      </View>
      <Categories categories={categories} />
      <View display="flex" justifyContent="space-between" flexDirection="row" mt="$6">
        <Text fontWeight="bold" fontSize="$6">
          Sugestões de novos assuntos
        </Text>
        <Link href="/">
          <Text color="#319258" fontWeight="600">
            Ver tudo
          </Text>
        </Link>
      </View>
      <Professionals professionals={professionals} />
      <View display="flex" justifyContent="space-between" flexDirection="row" mt="$6">
        <Text fontWeight="bold" fontSize="$6">
          Recomendados para você
        </Text>
      </View>
      <Recomendations recomendations={recomendations} />
    </ScrollView>
  );
}
