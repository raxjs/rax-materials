import { createElement, useEffect, forwardRef, useImperativeHandle, useState } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import Card from './Card';

// mock data
import data from './data.json';

import styles from './index.module.css';

const maxItems = 300;

export interface IRefObject {
  loadItems: () => void;
}

function ItemList(props, ref) {
  const [list, setList] = useState<Array<{ picUrl: string; title: string; price: string; recExc: string }>>([]);

  function loadItems() {
    if (list.length >= maxItems) return;
    setList(list.concat(data));
  }

  useImperativeHandle(ref, () => ({ loadItems }));

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <Image className={styles.headerImage} source={{ uri: 'https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png' }} />
      </View>
      <View className={styles.list}>
        {list.map((item, index) => {
          return <Card key={`item${index}`} image={item.picUrl} name={item.title} price={item.price} extra={item.recExc} />;
        })}
      </View>
    </View>
  );
}

export default forwardRef<IRefObject, any>(ItemList);
