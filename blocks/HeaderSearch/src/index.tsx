import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Picture from 'rax-picture';
import { Search, Tag } from '@alifd/meet';

import './index.css';

const historyTagList = ['2019年新款', '2019年男装'];

const hotTags = ['键盘', '鼠标', '显示器', '电脑主机', '蓝牙音箱', '笔记本电脑', '鼠标垫'];

const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState('淘小橙');
  const [historyTags, setHistoryTags] = useState(historyTagList);

  const onSearchChange = (value) => {
    setSearchValue(value);
  };

  const onRemoveHistory = () => {
    setHistoryTags([]);
  };

  const onRefresh = () => {};

  return (
    <View className="wrap">
      <Search size="small" value={searchValue} hasClear hasCancel onChange={onSearchChange} />
      {!!historyTags.length && (
        <>
          <View className="title">
            <Text className="candidate-title">历史记录</Text>
            <Picture onClick={onRemoveHistory} className="icon" source={{ uri: 'https://img.alicdn.com/imgextra/i1/O1CN01KHZB941Ux3gUqpA62_!!6000000002583-2-tps-32-32.png' }} />
          </View>
          <View className="tags-container">
            {
              historyTags.map((item) => (
                <Tag size="small" type="normal" className="tag">
                  {item}
                </Tag>
              ))
            }
          </View>
        </>
      )}
      <View className="title">
        <Text className="candidate-title">热门搜索</Text>
        <Picture className="icon" onClick={onRefresh} source={{ uri: 'https://img.alicdn.com/imgextra/i3/O1CN01WY4Ht426ThhVUxsyp_!!6000000007663-2-tps-32-32.png' }} />
      </View>
      <View className="tags-container">
        {
          hotTags.map((item) => (
            <Tag size="small" type="normal" className="tag">
              {item}
            </Tag>
          ))
        }
      </View>
    </View>
  );
};

export default HeaderSearch;
