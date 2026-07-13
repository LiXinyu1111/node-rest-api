const express = require('express');
const app = express();
const port = 3000;

// 解析JSON请求体
app.use(express.json());

// 根路由测试接口
app.get('/', (req, res) => {
  res.send('Node REST Server 运行成功！');
});

// 示例GET接口
app.get('/api/user', (req, res) => {
  res.json({
    code: 200,
    msg: "查询用户成功",
    data: {
      id: 1,
      name: "测试用户"
    }
  });
});

// 启动监听
app.listen(port, () => {
  console.log(`服务已启动，访问地址：http://localhost:${port}`);
});