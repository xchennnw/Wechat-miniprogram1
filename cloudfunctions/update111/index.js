// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  try {
    return await db.collection('users').where({
      staffID: event.c
    })
      .update({
        data: {
          skill: event.s
        },
      })
  } catch (e) {
    console.error(e)
  }
}