'use strict';
const jwt = require("jsonwebtoken");
const db = uniCloud.database();
exports.main = async (event, context) => {
	const openid = jwt.verify(event.token,"secret").openid;
	db.collection('article').add({
		content: event.content,
		images: event.images,
		author_id: openid,
		category: event.category,
		niming_flag: event.nimingFlag,
		time: event.time,
		view_num: 0,
		like_num: 0,
		like_user_id: [],
		comment_num: 0
	})
	//返回数据给客户端
	return "succuss"
};
