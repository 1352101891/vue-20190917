var constants = {
  api: {
    host: 'api/',
    // 用户相关
    login: '/user/login.do',
    register: '/user/register.do',
    checkVaild: '/user/check_valid.do',
    getUserInfo: '/user/get_user_info.do',
    forgetPassword: '/user/forget_get_question.do',
    answerQuestion: '/user/forget_check_answer.do',
    resetPassword: '/user/forget_reset_password.do',
    loginResetPassword: '/user/reset_password.do',
    updateUserInfo: '/user/update_information.do',
    getUserDetailInfo: '/user/get_information.do',
    logout: ' /user/logout.do',
    // 字典
    hotKey: '/hotkey/json',
    hotWeb: '/friend/json',
    banner: '/banner/json',
    topArticle: '/article/top/json',
    // 知识结构接口
    knowledgeTree: '/tree/json',
    treeArticle: '/article/list/0/json?cid=60',
    // 主页数据
    naviArticle: '/navi/json',
    mainArticle: '/article/list/0/json',
    // 收藏文章相关
    collectArticle: '/lg/collect/list/0/json',
    collect: 'lg/collect/1165/json',
    unCollect: '/lg/uncollect_originId/2333/json',
    collectOutLink: '/lg/collect/add/json',
    // 收藏网站
    collectLinkList: '/lg/collect/usertools/json',
    collectLink: '/lg/collect/addtool/json',
    updateLink: '/lg/collect/updatetool/json',
    deleteLink: '/lg/collect/deletetool/json',
    // 搜索相关
    search: '/article/query/0/json',
    // 积分相关
    userInfo: '/lg/coin/userinfo/json',
    coinRank: '/coin/rank/1/json',
    userCoinList: '/lg/coin/list/1/json'
  },
  code: {
    success: 0,
    failed: 1
  },
  responceCode: {
    success: 200
  }
}

export default constants
