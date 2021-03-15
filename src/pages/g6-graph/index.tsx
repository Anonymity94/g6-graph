import Graphin, {
  Behaviors,
  EdgeStyle,
  GraphinData,
  Layout,
  NodeStyle,
} from '@antv/graphin';
import React, { useState } from 'react';
import Control from './components/Control';
import { EGraphLayoutType } from './components/Control/typings';
import Statistic from './components/Statistic';
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

/**
 * 边的默认样式
 *
 * @see: https://github.com/antvis/Graphin/pull/231
 */
const defaultEdge: Partial<EdgeStyle> = {
  // @ts-ignore
  style: {
    keyshape: {
      // 边的颜色
      // stroke: '#3274b6',
      stroke: '#004250',
      // 尾箭头
      endArrow: {
        path: 'M 0,0 L 0, 0',
        fill: '#545872',
      },
    },
  },
};

/**
 * 节点的默认样式
 *
 *  @see: https://github.com/antvis/Graphin/pull/231
 */
const defaultNode: Partial<NodeStyle> = {
  // type: 'graphin-circle',
  // type: 'concentric',
  style: {
    // 节点的样式
    keyshape: {
      // 填充色
      fill: '#0085a1',
      // 包围边的颜色
      stroke: '#004250',
      // 包围线的宽度
      lineWidth: 3,
      // 节点大小
      size: 20,
    },
    // 光晕
    halo: {},
  },
};

const defaultNodeStatusStyle = {
  status: {
    hover: {
      halo: {
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
}

const G6Graph: React.FC<IG6GraphProps> = ({ data }) => {
  const [layout, setLayout] = useState<Layout & { type: EGraphLayoutType }>(
    defaultLayout,
  );

  const handleLayoutChange = (type: EGraphLayoutType) => {
    setLayout({
      ...defaultLayout,
      type,
    });
  };

  return (
    <div id={GRAPHIN_CONTAINER_DOM_ID}>
      <Graphin
        style={{ height: '100vh' }}
        // theme={{ mode: 'dark' }}
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
