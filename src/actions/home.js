import * as constants from '../constants/home'
import {
  API_HOME, API_HOME_SEARCH_COUNT, API_HOME_RECOMMEND, API_HOME_PIN
} from '../constants/api'
import { createAction } from '../utils/redux'

/**
 * 首页数据
 * @param {*} payload
 */
export const dispatchHome = payload => createAction({
  url: API_HOME,
  type: constants.HOME_INFO,
  payload
})

/**
 * 商品总数
 * @param {*} payload
 */
export const dispatchSearchCount = payload => createAction({
  url: API_HOME_SEARCH_COUNT,
  type: constants.HOME_SEARCH_COUNT,
  payload
})

/**
 * 拼团
 * @param {*} payload
 */
export const dispatchPin = payload => createAction({
  url: API_HOME_PIN,
  type: constants.HOME_PIN,
  payload
})

/**
 * 推荐商品
 * @param {*} payload
 */
export const dispatchRecommend = payload => createAction({
  url: API_HOME_RECOMMEND,
  type: constants.HOME_RECOMMEND,
  payload
})