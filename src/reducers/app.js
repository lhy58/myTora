import * as constants from '../constants/auth'

const INITIAL_STATE ={
	//请求接口
	baseURL : 'http://wxzp.newone.com.cn/' ,
	//应用首次加载
	appOnLaunch : true ,
	//请求token
	authorize : ''
}

export default function app( state = INITIAL_STATE , action ){
	switch (action.type){
		case constants.CHANGE_APP_ON_LAUNCH :
			return {
				...state ,
				appOnLaunch : false
			};
		case constants.INSERT_AUTHORIZE :
			return {
				...state ,
				authorize : action.authorize
			};
		default :
			return state;
	}
}