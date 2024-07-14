import { Image, Text, View } from 'tamagui';

export type LocationProps = {
  name: string;
  image: string;
};

export function Location({ name, image, ...rest }: LocationProps) {
  return (
    <View display="flex" alignItems="center" gap="$2" flexDirection="row" {...rest}>
      <Image source={{ uri: image, width: 18, height: 22 }} />
      <Text>{name}</Text>
    </View>
  );
}
