export default {
  /** -------------------------------------------------以下必须修改----------------------------------------------------- */

  githubName: 'Coeur101', // 必须修改，github账户名

  /** -------------------------------------------------以下可选修改----------------------------------------------------- */

  title: 'coeur', // 网站标题
  nickName: 'couer', // 昵称
  domain: '', // rss域名
  SEO_title: ' - coeur blog', // 搜索引擎显示的标题
  SEO_keywords: "coeur,coeur's blog", // keywords meta header
  MSClarityId: '', // Microsoft的Clarity统计，https://clarity.microsoft.com/
  CloudflareAnalyze: '', // cloudflare的统计，https://developers.cloudflare.com/analytics/web-analytics
  CommentRepoId: 'R_kgDOLgj5Og', // https://giscus.app/zh-CN
  CommentDiscussionCategoryId: 'DIC_kwDOLgj5Os4CeJyE', // https://giscus.app/zh-CN

  Comment: {
    // 是否开启评论，请先设置上面的 CommentRepoId 和 CommentDiscussionCategoryId
    articles: true, // “文章”是否开启评论
    records: true, // “记录”是否开启评论
    knowledges: true, // “文化”是否开启评论
  },
  MongoDb: {
    // 浏览量统计，请先设置 https://vercel.com/integrations/mongodbatlas
    database: 'couer-nuxt-blog',
    collection: 'nuxt-blog',
    initialVisitors: 1, // 如果设置成10000，那么发一篇文章立马就有10000个浏览量！
    visitFromOwner: false, // 网站拥有者访问时，是否增加浏览量
    MONGODB_URI:
      'mongodb+srv://vercel-admin-user-6600cddedeac7159d5bdf1ea:RAupBd41OqzXbZpl@cluster0.9c5yp1a.mongodb.net/couer-nuxt-blog?retryWrites=true&w=majority',
    MONGODB_USER: 'coeur7170@gmail.com',
    MONGODB_PASS: 'baihailong123',
    MONGODB_ENDPOINT:
      'https://data.mongodb-api.com/app/data-aybhc/endpoint/data/v1',
    MONGODB_DATA_SOURCE: 'cluster0.9c5yp1a.mongodb.net',
  },
  themeColor: '#2aa0bb', // 主题色
  defaultLang: 'zh', // default language, "zh" and "en" are supported currently
  timezone: 'Asia/Shanghai', // timezone, please refer to https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List

  /** -------------------------------------------------注意----------------------------------------------------- */

  githubRepo: 'coeur-nuxt-blog', // 需要与仓库名一致，如果fork时更改了仓库名，则这里也要改
}
