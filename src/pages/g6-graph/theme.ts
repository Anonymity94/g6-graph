/**
 * 设置主题
 */

import { EdgeStyle, NodeStyle } from '@antv/graphin';

/**
 * 主题
 */
export enum EThemeMode {
  /**
   * light 主题
   */
  'LIGHT' = 'light',
  /**
   * dark 主题
   */
  'DARK' = 'dark',
}

/**
 * 边的默认样式
 */
export const edgeStyleMap: Record<EThemeMode, Partial<EdgeStyle>> = {
  [EThemeMode.LIGHT]: {
    // @ts-ignore
    style: {
      keyshape: {
        // 边的颜色
        stroke: '#2e8ae6',
        // 尾箭头
        endArrow: {
          path: 'M 0,0 L 0, 0',
          fill: '#545872',
        },
      },
    },
  },
  [EThemeMode.DARK]: {
    // @ts-ignore
    style: {
      keyshape: {
        // 边的颜色
        stroke: '#3274b6',
        // 尾箭头
        endArrow: {
          path: 'M 0,0 L 0, 0',
          fill: '#545872',
        },
      },
    },
  },
};

/**
 * 节点的默认样式
 */
export const nodeStyleMap: Record<EThemeMode, Partial<NodeStyle>> = {
  [EThemeMode.LIGHT]: {
    style: {
      // 节点的样式
      keyshape: {
        // 填充色
        fill: '#0085a1',
        // 包围边的颜色
        stroke: '#004250',
        // 包围线的宽度
        lineWidth: 2,
        // 节点大小
        size: 20,
      },
    },
  },
  [EThemeMode.DARK]: {
    style: {
      // 节点的样式
      keyshape: {
        // 填充色
        fill: '#00ddff',
        // 包围边的颜色
        stroke: '#0f96ad',
        // 包围线的宽度
        lineWidth: 2,
        // 节点大小
        size: 20,
      },
    },
  },
};
