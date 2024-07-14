import { Button, Text, Image, View } from 'tamagui';

export type CategoriesProps = {
  name: string;
  image: string;
};

export function Category({ name, image, ...rest }: CategoriesProps) {
  return (
    <View
      p="$4"
      w={119}
      h={100}
      borderRadius="$4"
      gap="$2"
      alignItems="center"
      flexDirection="column"
      bg="#EAEAEA"
      {...rest}>
      <Image source={{ uri: image, width: 32, height: 32 }} />
      <Text fontSize={12} fontWeight="500" color="#6B6B6B" textAlign="center">
        {name}
      </Text>
    </View>
  );
}
