import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import { Search } from '@alifd/meet';

import './index.css';

const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState('淘小橙');

  const onSearchChange = (value) => {
    setSearchValue(value);
  };
  return (
    <View className="wrap">
      <Search size="medium" value={searchValue} hasClear hasCancel onChange={onSearchChange} />
      <Text>搜索发现</Text>
    </View>
  );
};

export default HeaderSearch;
