import { AntDesign } from '@expo/vector-icons';
import { Button, XStack, Input } from 'tamagui';

import { useInputData } from '../hooks/use-input-data';

export function InputComponent() {
  const { inputData, setInputData, onClear } = useInputData();

  return (
    <XStack my="$6" alignItems="center">
      <Button
        size="$4"
        icon={<AntDesign name="search1" size={24} color="#959595" />}
        marginRight="$-4"
        borderTopLeftRadius="$8"
        borderBottomLeftRadius="$8"
        pressStyle={{ backgroundColor: '$gray5Light' }}
        borderTopRightRadius="$0"
        borderBottomRightRadius="$0"
        borderColor="$gray12Light"
        backgroundColor="$gray5Light"
        borderWidth="$0"
        borderRightWidth="$0"
        disabled
      />
      <Input
        placeholder="O que você procura?"
        flex={1}
        value={inputData}
        onChangeText={setInputData}
        borderColor="$gray12Light"
        focusStyle={{
          borderColor: '$gray12Light',
        }}
        borderWidth="$0"
        backgroundColor="$gray5Light"
        placeholderTextColor="#959595"
        color="black"
        borderBottomLeftRadius="$8"
      />
      <Button
        size="$4"
        icon={<AntDesign name="close" size={24} color="#EE5757" />}
        display="flex"
        marginLeft="$-4"
        borderTopRightRadius="$8"
        borderBottomRightRadius="$8"
        pressStyle={{ backgroundColor: '$gray5Light' }}
        borderTopLeftRadius={8}
        borderBottomLeftRadius="$0"
        borderColor="$gray12Light"
        backgroundColor="$gray5Light"
        borderWidth="$0"
        borderLeftWidth="$0"
        onPress={onClear}
      />
    </XStack>
  );
}
