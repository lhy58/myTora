import request from '../utils/request'

//接口
export function getData (data={}) {
	return request('mact/api/searchKnowledgeExt',data,'GET')
}
