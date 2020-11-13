/**
 * ES 2015 이상의 문법
 * import express from "express"
 * 현재 nodejs가 지원하는 문법
 */
const express = require("express")
const router = express.Router()
const {bbsDao} = require("../models")

router.get("/", (req, res)=> {
    // res.send("반갑습니다")
    res.render("index", {data : "data"})
})

router.get("/bbsList", (req, res)=> {
    const list = [
        {id : 0, writer : "홍길동", subject : "게시판"},
        {id : 1, writer : "이몽룡", subject : "게시판"},
        {id : 2, writer : "성춘향", subject : "게시판"}
    ]
    bbsDao.findAll().then((bbsList)=> {
        // res.json(bbsList)
        res.redirect("/api/bbsList")
    })
    // res.json(list)
})

router.get("/insert", (req, res)=> {
    bbsDao.create({
        b_writer : req.query.writer || "집보내줘",
        b_date : Date().toString(),
        b_subject : "게시글 제목",
        b_content : "게시글 내용"
    })
    .then((result)=> {
        res.json(result)
    })
    .catch((err)=> {
        res.json(err)
    })
})

module.exports = router