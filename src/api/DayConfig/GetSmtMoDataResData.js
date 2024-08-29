import request from '../../utils/request'
const API_URL_FIRST = 'DayConfig'
const API_URL_SECOND = 'GetSmtMoDataResData'
// 获取表格数据 分页获取
export function GetTableData(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/get_table_data/`,
    method: 'post',
    data
  })
}

export function GetAIData(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/get_table_data_ai/`,
    method: 'post',
    data
  })
}

export function GetXiGaoData(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/get_table_data_xigao/`,
    method: 'post',
    data
  })
}

// 添加数据
export function AddData(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/add_data/`,
    method: 'post',
    data
  })
}
// 修改数据
export function ModifyData(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/modify_data/`,
    method: 'post',
    data
  })
}
// 删除勾选的数据
export function DeleteData(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/delete_data/`,
    method: 'post',
    data
  })
}
// 删除一条数据
export function HandleDelete(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/handle_delete/`,
    method: 'post',
    data
  })
}
// 确认导入数据
export function ImportData(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/import_data/`,
    method: 'post',
    data
  })
}
// 确认导出数据
export function ExportData() {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/export_data/`,
    method: 'get'
  })
}
// 清空所有数据
export function DeleteAllData() {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/delete_all_data/`,
    method: 'get'
  })
}

// 搜索数据
export function SearchData(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/search_data/`,
    method: 'post',
    data
  })
}
// 获取表格列名
export function GetLangDict() {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/get_lang_dict/`,
    method: 'get'
  })
}
