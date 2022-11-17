import styled from 'styled-components';
import { Space } from '@douyinfe/semi-ui';

import { FlexProps } from '.';

export const Wrapper = styled(Space)<FlexProps>`
  display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};
  justify-content: ${(props) => props.justify};
`;
