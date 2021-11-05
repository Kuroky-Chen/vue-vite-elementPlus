const prefix = ''
const list = []

const orderList = [
  {
    key: 'planned',
    value: 5021,
    status: 'primary',
  },
  {
    key: 'finished',
    value: 3204,
    status: 'success',
  },
  {
    key: 'unfinished',
    value: 1817,
    status: 'error',
  },
];

const skillList = [
  {
    title: 'JavaScript',
    percentage: 50,
    color: '#67c23a',
  },
  {
    title: 'HTML',
    percentage: 90,
    color: '#e6a23c',
  },
  {
    title: 'CSS',
    percentage: 70,
    color: '',
  },
  {
    title: 'Vue',
    percentage: 80,
    color: '#f56c6d',
  },
  {
    title: 'Node',
    percentage: 60,
    color: '#a650fe',
  },
];

export default [
  {
    url: '/api/getResouceList',
    type: 'get',
    response() {
      return { code: 200, msg: 'success', data: { list, prefix, orderList, skillList } };
    },
  },
];
