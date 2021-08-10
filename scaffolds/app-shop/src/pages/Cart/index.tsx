import { createElement, useRef } from 'rax';
import View from 'rax-view';
import RecyclerView from 'rax-recyclerview';
import ItemList, { IRefObject } from '@/components/ItemList';
import Header from './components/Header';
import Item from './components/Item';

import styles from './index.module.css';

function Cart() {
  const itemListRef = useRef<IRefObject>(null);

  return (
    <View className={styles.container}>
      <RecyclerView onEndReached={() => { itemListRef.current?.loadItems(); }} >
        <Header />
        <Item />
        <ItemList ref={itemListRef} />
      </RecyclerView>
    </View>
  );
}

export default Cart;
