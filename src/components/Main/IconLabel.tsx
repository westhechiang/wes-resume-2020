import * as React from 'react';
import { Text, Flex, FlexProps } from '@chakra-ui/core';

import { Icon } from '../Icon/Icon';

interface IconLabelProps extends FlexProps {
  icon?: string;
  label: string;
  orientation?: string;
  iconSize?: string | number;
}

export const IconLabel = ({
  icon,
  label,
  orientation,
  iconSize,
  ...props
}: IconLabelProps) => (
  <Flex
    pr={3}
    alignItems="center"
    flexDirection={orientation === 'horizontal' ? 'row' : 'column'}
    {...props}
  >
    {icon && (
      <Icon
        name={icon}
        width={iconSize}
        height={iconSize}
        mr={1}
        mb={orientation === 'horizontal' ? 0 : 1}
      />
    )}
    <Text m={0} fontFamily="body" fontSize="xs" color="body">
      {label}
    </Text>
  </Flex>
);

IconLabel.defaultProps = {
  orientation: 'horizontal',
  iconSize: 15,
};
