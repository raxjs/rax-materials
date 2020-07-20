import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import RecyclerView from 'rax-recyclerview';

import './Tab.css';

const mockArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Tab1() {

  const [list, setList] = useState([]);

  // Tab 数据请求
  const getData = async (options = {}) => {
    setList(list.concat(mockArray));
  };

  useEffect(() => {
    getData();
  }, []);

  function onEndReached() {
    getData();
  }

  return (
    <RecyclerView
      className="tabContainerItem"
      onEndReached={onEndReached}
    >
      {
        list && list.map((item, index) => {
          return (
            <View
              className="tabItemCard"
              key={index}
            >
              <Text className="tabItemCardText tabItemCardRedText">Card: {item}</Text>
            </View>
          )
        })
      }
    </RecyclerView>
  );
};
