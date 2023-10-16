// 预测数据
import Layout from '@/layout'

const PredictRouter = {
  path: '/predict',
  component: Layout,
  redirect: '/predict/trainledtdata',
  alwaysShow: true,
  name: 'Predict',
  meta: {
    title: '预测数据',
    icon: 'el-icon-coin',
    roles: ['TrainLEDTData', 'TrainData', 'FixedCTData', 'TrainDataMap']
  },
  children: [
    {
      path: 'trainledtdata',
      component: () => import('@/views/Predict/TrainLEDTData'),
      name: 'TrainLEDTData',
      meta: {
        title: 'LED训练数据',
        roles: ['TrainLEDTData']
      }
    },
    {
      path: 'traindata',
      component: () => import('@/views/Predict/TrainData'),
      name: 'TrainData',
      meta: {
        title: '训练数据',
        roles: ['TrainData']
      }
    },
    {
      path: 'FixedCTData',
      component: () => import('@/views/Predict/FixedCTData'),
      name: 'FixedCTData',
      meta: {
        title: '车间指定CT表',
        roles: ['FixedCTData']
      }
    },
    {
      path: 'traindatamap',
      component: () => import('@/views/Predict/TrainDataMap'),
      name: 'TrainDataMap',
      meta: {
        title: '新线体预测参考表',
        roles: ['TrainDataMap']
      }
    }
  ]
}

export default PredictRouter
