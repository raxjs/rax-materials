import { createElement, useRef } from 'rax';
import View from 'rax-view';
import RecyclerView from 'rax-recyclerview';
import Header from './components/Header';
import Banner from './components/Banner';
import NavList from './components/NavList';
import ItemWrap from './components/ItemWrap';
import ItemList, { IRefObject } from './components/ItemList';

import styles from './index.module.css';

export default function Home() {
  const itemListRef = useRef<IRefObject>(null);

  return (
    <View className={styles.container}>
      <Header />
      <RecyclerView onEndReached={() => { itemListRef.current?.loadItems(); }}>
        <Banner />
        <NavList />
        <ItemWrap />
        <ItemList ref={itemListRef} />
      </RecyclerView>
    </View>
  );
}
