import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { ListItem, YGroup } from 'tamagui';

interface IProps {
  title: string;
}

export function FilterList({ title }: IProps) {
  return (
    <YGroup alignSelf="center" size="$4">
      <YGroup.Item>
        <ListItem color="#8C8C8C" fontWeight="600" bg="$colorTransparent">
          {title ? title : 'Jardineiro'}
          <AntDesign name="close" size={18} color="#EE5757" />
        </ListItem>
      </YGroup.Item>
    </YGroup>
  );
}
