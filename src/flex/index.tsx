import { CSSProperties, FC } from 'react';
import { SpaceProps } from '@douyinfe/semi-ui/lib/es/space';

import { Wrapper } from './styled';

export interface FlexProps extends SpaceProps {
  inline?: boolean;
  justify?: CSSProperties['justifyContent'];
}

const Flex: FC<FlexProps> = (props) => {
  const { children, inline = false, justify = 'normal', ...rest } = props;

  return (
    <Wrapper inline={inline} justify={justify} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Flex;
