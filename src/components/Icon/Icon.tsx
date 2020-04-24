import { Image, ImageProps } from '@chakra-ui/core';
import * as React from 'react';
import { getIconByName } from './getIconByName';

export interface IconProps {
  isInverted?: boolean;
  name: string;
}

export const Icon = ({
  name,
  isInverted,
  ...props
}: IconProps & ImageProps) => (
  <Image
    transform={isInverted ? 'rotate(180deg)' : undefined} // Console errors if we don't do it this way
    src={getIconByName(name)}
    {...props}
  />
);

Icon.defaultProps = {
  isInverted: false,
};

export default Icon;
