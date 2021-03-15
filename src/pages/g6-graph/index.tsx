import Graphin, {
  Behaviors,
  GraphinData,
  Layout,
  NodeStyle,
  ThemeType,
} from '@antv/graphin';
import React, { useState } from 'react';
import Control from './components/Control';
import { EGraphLayoutType } from './components/Control/typings';
import Statistic from './components/Statistic';
import { edgeStyleMap, EThemeMode, nodeStyleMap } from './theme';
const {
  ZoomCanvas,
  DragNodeWithForce,
  ActivateRelations,
  DragNode,
} = Behaviors;

export const DEFAULT_LAYOUT_TYPE = EGraphLayoutType['graphin-force'];

export const GRAPHIN_CONTAINER_DOM_ID = 'graphin-container';

/**
 * 默认布局
 */
const defaultLayout = {
  type: DEFAULT_LAYOUT_TYPE,
  preset: {
    type: 'concentric',
  },
  preventOverlap: true, // 防止节点重叠
  // animation: false,
};

const defaultNodeStatusStyle = {
  status: {
    hover: {
      halo: {
        fill: '#33363c',
        animate: {
          attrs: (ratio: number) => {
            const startR = 20;
            const diff = 26 - startR;
            return {
              r: startR + diff * ratio,
              opacity: 0.5 + 0.5 * ratio,
            };
          },
          duration: 200,
          easing: 'easeCubic',
          delay: 0,
          repeat: false,
        },
      },
    },
  } as Partial<NodeStyle['status']>,
};

interface IG6GraphProps {
  data: GraphinData;
  /**
   * 主题类型
   */
  themeMode?: ThemeType['mode'];
}

const G6Graph: React.FC<IG6GraphProps> = ({
  themeMode = EThemeMode.DARK,
  data,
}) => {
  const [layout, setLayout] = useState<Layout & { type: EGraphLayoutType }>(
    defaultLayout,
  );

  const handleLayoutChange = (type: EGraphLayoutType) => {
    setLayout({
      ...defaultLayout,
      type,
    });
  };

  // 根据主题的颜色，动态修改样式
  const defaultNode = nodeStyleMap[themeMode];
  const defaultEdge = edgeStyleMap[themeMode];

  return (
    <div id={GRAPHIN_CONTAINER_DOM_ID}>
      <Graphin
        theme={{ mode: themeMode }}
        style={{ height: '100vh' }}
        data={data}
        layout={layout}
        defaultNode={defaultNode}
        defaultEdge={defaultEdge}
        nodeStateStyles={defaultNodeStatusStyle}
      >
        {/* 滚筒放大缩小 */}
        <ZoomCanvas enableOptimize />
        {/* 选中的节点自动固定住 */}
        <DragNodeWithForce autoPin={false} />
        {/* 高亮关系图 */}
        <ActivateRelations trigger="hover" />
        {/* 节点拖拽 */}
        <DragNode />
        {/* 工具栏 */}
        <Control layoutType={layout.type} onLayoutChange={handleLayoutChange} />
        {/* 统计信息 */}
        <Statistic />
      </Graphin>
    </div>
  );
};

export default G6Graph;
