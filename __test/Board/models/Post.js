var mongoose = require('mongoose');

// schema (개요)
var postSchema = mongoose.Schema({ // 1
title:{type:String, required:true},
body:{type:String, required:true},
createdAt:{type:Date, default:Date.now}, // 2
updatedAt:{type:Date},
});

// model & export
var Post = mongoose.model('post', postSchema);
module.exports = Post;

/*
1. Post의 schema는 title, body, createdAt, updatedAt으로 구성이 되어 있습니다.
2. default 항목으로 기본 값을 지정할 수 있습니다. 함수명을 넣으면 해당 함수의 return이 기본값이 됩니다.
    (Date.now는 현재시간을 리턴하는 함수입니다)

컴퓨터 데이터 베이스 스키마란?
한마디로 정의하면 '데이터의 구조' 또는 '데이터베이스의 설계'를 의미한다.
스키마는 데이터베이스를 구성하는 데이터 개체(entity), 속성(Attribute), 관계(Relationship) 및 데이터 조작시 데이터 값들이 갖는 제약 조건 등에 관해 전반적으로 정의한다.
*/