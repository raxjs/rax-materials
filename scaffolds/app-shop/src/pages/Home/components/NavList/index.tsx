import { createElement, useRef } from 'rax';
import View from 'rax-view';
import ScrollView from 'rax-scrollview';
import Nav from './Nav';
import Scrollbar, { IRefObject } from './Scrollbar';

// mock data
import data from './data.json';

import styles from './index.module.css';

function NavList() {
  const scrollbarRef = useRef<IRefObject>(null);

  const handleScroll = (e) => {
    scrollbarRef.current?.handleTargetScroll(e);
  };

  return (
    <View className={styles.navList}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
      >
        <View className={styles.list} id="navList">
          {data.map((item, index) => {
            if (index % 2 === 0) {
              const nextItem = data[index + 1];
              return (
                <View key={`item${item.text}`}>
                  <Nav image={item.icon} text={item.text} />
                  <Nav image={nextItem.icon} text={nextItem.text} />
                </View>
              );
            }
            return null;
          })}
        </View>
      </ScrollView>
      <Scrollbar ref={scrollbarRef} target="#navList" />
    </View>
  );
}

export default NavList;
