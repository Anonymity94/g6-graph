import { GraphinContext } from '@antv/graphin';
import React from 'react';
import styles from './index.less';

interface IStatisticProps {}

const Statistic: React.FC<IStatisticProps> = () => {
  const { graph } = React.useContext(GraphinContext);
  // 节点数量
  const nodeCount = graph.getNodes().length;
  // 边数量
  const edgeCount = graph.getEdges().length;

  return (
    <div className={styles.statisticWrap}>
      <div className={styles.item}>
        <span>Nodes</span>
        <span>{nodeCount}</span>
      </div>
      <div className={styles.item}>
        <span>Edges</span>
        <span>{edgeCount}</span>
      </div>
    </div>
  );
};

export default Statistic;
