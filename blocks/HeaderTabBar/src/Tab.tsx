import { createElement } from 'rax';
import View from 'rax-View';

import './Tab.css';


const Tab = ({ tabs, onChange, activeTab }) => {
  return (
    <View className="tabs-container">
      {
        tabs.map((tab) => (
          <View className={`tab ${activeTab === tab ? 'tab-selected' : ''}`} onClick={() => onChange(tab)}>
            {tab}
            {activeTab === tab && <View className="tab-selected-bottom-line" />}
          </View>
        ))
      }
    </View>
  );
};

export default Tab;

