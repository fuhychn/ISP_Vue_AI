import request from '../../utils/request'
// 获取表格数据分页获取
export function GetTableData(data) {
  return request({
    url: '/HistoryLog/ScheduleResData/get_table_data/',
    method: 'post',
    data
  })
}
export function ExportData(data) {
  return request({
    url: '/HistoryLog/ScheduleResData/export_data/',
    method: 'post',
    data
  })
}
// 获取表格列名
export function GetLangDict() {
  return request({
    url: '/HistoryLog/ScheduleResData/get_lang_dict/',
    method: 'get'
  })
}
