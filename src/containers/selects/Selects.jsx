import React from 'react';
import './selects.css';
import server from '../../asset/server.png';


const Selects = () => {
  return (
    <div className='icode__select section__padding' id="select">
        <div className='icode__select-heading'>
            <h3 className='gradient__text'>为什么选择我们</h3>
        </div>

        <div className='icode__select-container'>
          <div className='icode__select-container__pic'>
            <img src={server} alt='server' />
          </div>

          <div className='icode__select-container__titles'>
            <div className='icode__select-container__title'>
                <div />
                <h3>真人教学</h3>
                <p>一对一真人线上授课，通过腾讯会议远程到老师点，与老师共同学习并且编写代码，时时互动教学可以随时纠正学生编码错误以及编码应用能力。</p>
            </div>
            <div className='icode__select-container__title'>
                <div />
                <h3>家长无忧</h3>
                <p>贴心班主任提供专业的课后辅导、督促、纠正，根据学生年龄以及学习情况进行复习或知识点巩固训练，解决家长对专业内容的困扰。</p>
            </div>
            <div className='icode__select-container__title'>
                <div /> 
                <h3>考试竞赛</h3>
                <p>学生通过平台进入到我们课堂，会有班主任老师跟踪上课情况，同时，课下会免费分享学生上课视频，学生每堂课的学习内容与进度，解放家长的时间。</p>
            </div>
            <div className='icode__select-container__title'>
                <div />
                <h3>贴心服务</h3>
                <p>一对一真人线上授课，通过腾讯会议远程到老师点，与老师共同学习并且编写代码，时时互动教学可以随时纠正学生编码错误以及编码应用能力。</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Selects