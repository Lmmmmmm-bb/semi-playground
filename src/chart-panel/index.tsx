import { FC, useState } from 'react';
import { Button, Spin } from '@douyinfe/semi-ui';
import { IconRefresh } from '@douyinfe/semi-icons';

import { HeaderStyled, WrapperStyled } from './styled';

const ChartPanel: FC = () => {
  const [loading, setLoading] = useState(false);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className='title'>标题</div>
        <Button size='small' onClick={handleRefresh} icon={<IconRefresh />} />
      </HeaderStyled>
      <Spin spinning={loading}>
        <div className='content'>内容区域</div>
      </Spin>
    </WrapperStyled>
  );
};

export default ChartPanel;
