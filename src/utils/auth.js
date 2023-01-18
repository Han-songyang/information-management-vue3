import { TOKEN_TIME } from './constant'
import { TOKEN_TIME_VALUE } from './constant'

// 登录时设置时间
export const setTokenTime = () => {
    localStorage.setItem(TOKEN_TIME, Date.now())
}

// 获取时间
export const getTokenTime = () => {
    return localStorage.getItem(TOKEN_TIME)
}

// 判断是否过期
export const diffTokenTime = () => {
    const curTime = Date.now()
    const tokenTime = getTokenTime()
    return curTime - tokenTime > TOKEN_TIME_VALUE
}