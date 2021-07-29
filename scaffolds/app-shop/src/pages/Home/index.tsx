import { createElement, useState, useRef } from 'rax';
import View from 'rax-view';
import RecyclerView from 'rax-recyclerview';
import GoTop from '@/components/GoGtop';
import Header from './components/Header';
import Banner from './components/Banner';
import NavList from './components/NavList';
import ItemWrap from './components/ItemWrap';
import ItemList, { IRefObject } from './components/ItemList';

import styles from './index.module.css';

export default function Home() {
  const [showGoTop, setShowGoTop] = useState(false);

  const itemListRef = useRef<IRefObject>(null);
  const recyclerViewRef = useRef<any>(null);

  const handlerScroll = (e) => {
    const { contentOffset } = e.nativeEvent;
    if (contentOffset.y >= 500) {
      setShowGoTop(true);
    } else {
      setShowGoTop(false);
    }
  };

  return (
    <View className={styles.container}>
      <Header />
      <RecyclerView
        ref={recyclerViewRef}
        onScroll={handlerScroll}
        onEndReached={() => { itemListRef.current?.loadItems(); }}
      >
        <Banner />
        <NavList />
        <ItemWrap />
        <ItemList ref={itemListRef} />
        <GoTop x-if={showGoTop} onClick={() => { recyclerViewRef.current?.scrollTo({ y: 0 }); }} />
      </RecyclerView>
    </View>
  );
}
