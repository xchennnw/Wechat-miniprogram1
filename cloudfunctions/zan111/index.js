// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  try {
    return await db.collection('users').where({
      topic: event.a
    })
      .update({
        data: {
          likes: _.inc(1)
        },
      })
      console.log("已增加")
  } catch (e) {
    console.error(e)
  }
}