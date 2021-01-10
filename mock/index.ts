export default {
    'POST /api/mock': (req, res) => {
      // 添加跨域请求头
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end('ok');
    },
  }