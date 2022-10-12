import { FC } from 'react';
import {
  InputNumber,
  SplitButtonGroup,
  Button,
  Dropdown,
  Space
} from '@douyinfe/semi-ui';
import { IconTreeTriangleDown } from '@douyinfe/semi-icons';

const MultSelect: FC = () => (
  <Space>
    <InputNumber
      insetLabel='屏蔽警报'
      style={{ width: 160 }}
      suffix={<div className='semi-input-inset-label'>小时</div>}
      hideButtons
    />
    <SplitButtonGroup>
      <Button theme='solid'>确定</Button>
      <Dropdown
        clickToHide
        trigger='click'
        position='bottomRight'
        render={
          <Dropdown.Menu>
            <Dropdown.Title>快速选项</Dropdown.Title>
            <Dropdown.Item>屏蔽 30 分钟</Dropdown.Item>
            <Dropdown.Item>屏蔽 1 小时</Dropdown.Item>
            <Dropdown.Item>屏蔽 6 小时</Dropdown.Item>
            <Dropdown.Item>屏蔽 12 小时</Dropdown.Item>
          </Dropdown.Menu>
        }
      >
        <Button theme='solid' icon={<IconTreeTriangleDown />} />
      </Dropdown>
    </SplitButtonGroup>
  </Space>
);

export default MultSelect;
