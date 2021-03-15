import {
  ApartmentOutlined,
  BranchesOutlined,
  CopyrightCircleOutlined,
  DeploymentUnitOutlined,
  ForkOutlined,
  GatewayOutlined,
  MediumOutlined,
  ShareAltOutlined,
  TrademarkCircleOutlined,
} from '@ant-design/icons';
import { EGraphLayoutType } from './typings';

// G6布局预览
// @see: https://antv-graphin.gitee.io/graphin/layout/network#%E5%B8%83%E5%B1%80%E9%A2%84%E8%A7%88
export const graphLayoutConfig = [
  {
    title: '渐进力导向布局',
    type: EGraphLayoutType['graphin-force'],
    icon: BranchesOutlined,
  },
  // {
  //   title: '预设布局',
  //   type: 'preset',
  //   icon: BranchesOutlined,
  // },
  {
    title: '经典力导向布局',
    type: EGraphLayoutType['force'],
    icon: BranchesOutlined,
  },
  {
    title: 'G6力导向布局',
    type: EGraphLayoutType['gForce'],
    icon: BranchesOutlined,
  },
  {
    title: '同心圆布局',
    type: EGraphLayoutType['concentric'],
    icon: DeploymentUnitOutlined,
  },
  // {
  //   title: '辐射布局',
  //   type: EGraphLayoutType['radial'],
  //   icon: ShareAltOutlined,
  // },
  {
    title: '圆形布局',
    type: EGraphLayoutType['circular'],
    icon: CopyrightCircleOutlined,
  },
  {
    title: '层次布局',
    type: EGraphLayoutType['dagre'],
    icon: ApartmentOutlined,
  },
  {
    title: '网格布局',
    type: EGraphLayoutType['grid'],
    icon: GatewayOutlined,
  },
  {
    title: 'Fruchterman布局',
    type: EGraphLayoutType['fructherman'],
    icon: ForkOutlined,
  },
  {
    title: '降维布局',
    type: EGraphLayoutType['mds'],
    icon: MediumOutlined,
  },
  {
    title: '随机布局',
    type: EGraphLayoutType['random'],
    icon: TrademarkCircleOutlined,
  },
];
