import { createElement } from 'rax';
import View from 'rax-view';
import * as classnames from 'classnames';
import styles from './Tab.module.css';

const Tab = ({ tabs, onChange, activeTab }) => {
  return (
    <View className={styles.tabsContainer}>
      {
        tabs.map((tab) => (
          <View className={classnames(styles.tab, activeTab === tab ? styles.tabSelected : '')} onClick={() => onChange(tab)}>
            {tab}
            {activeTab === tab && <View className={styles.tabSelectedBottomLine} />}
          </View>
        ))
      }
    </View>
  );
};

export default Tab;

