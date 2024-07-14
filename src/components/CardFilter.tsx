import { AntDesign } from '@expo/vector-icons';
import { Text, View } from 'tamagui';

interface IProps {
  title: number | string;
}

export function CardFilter({ title }: IProps) {
  return (
    <View
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      gap="$2"
      bg="#EAEAEA"
      borderRadius="$8"
      px="$3"
      h="$3">
      <Text fontSize={12} fontWeight="bold" color="#8C8C8C">
        {title}
      </Text>
      <AntDesign name="close" size={18} color="#EE5757" />
    </View>
  );
}
