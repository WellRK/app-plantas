import { Star } from 'lucide-react-native';
import { Text, View } from 'tamagui';

interface IProps {
  title: number | string;
  image?: string;
}

export function CardRecomendation({ title, image }: IProps) {
  return (
    <View
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      gap="$2"
      bg="#C4C4C4"
      borderRadius="$8"
      w="$5"
      h="$2">
      {image ? <Star color="#FFFF" size={14} /> : ''}
      <Text fontSize={12} fontWeight="bold" color="white">
        {title}
      </Text>
    </View>
  );
}
