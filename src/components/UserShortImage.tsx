import { Image, View } from 'tamagui';

import { services } from '../utils/supabase/service';

export function UserShortImage() {
  const hasMessage: boolean = true;
  const userImage: string = `${services.storage.imagePath}/user-mock.png`;

  return (
    <View display="flex" alignItems="center" gap="$2" flexDirection="row">
      {hasMessage ? (
        <Image
          source={{
            uri: `${services.storage.imagePath}/messages.png`,
            width: 28,
            height: 32,
          }}
        />
      ) : (
        <Image
          source={{
            uri: `${services.storage.imagePath}/messages-with-no-notifications.png`,
            width: 28,
            height: 24,
          }}
        />
      )}

      <Image source={{ uri: userImage, width: 32, height: 32 }} />
    </View>
  );
}
