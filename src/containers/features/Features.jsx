import React from 'react';
import './features.css';
import scratch from '../../asset/scratch.png';
import python from '../../asset/python.png';
import cpp from '../../asset/cpp.png';

const Features = () => {
  return (
    <div className='icode__features section__padding' id="features">
      <div className='icode__features-font'>
        <h3>中小学生适合学习哪些编程语言？</h3>
      </div>

      <div className='icode__features-language'>
        <div className='icode__features-language__scratch'>
          <div className='icode__features-language__scratch-font'>
            <h3>Scratch</h3>
            <p>是一种专为7-16岁学生设计的图形化程序设计语言。通过Scratch3.0工具，你可以轻松地创作故事、游戏和动画。在Scratch作品的设计过程中，你将学习到创造性思维、逻辑条理性，并学会如何与团队分工合作。无论你是哪个年龄段的学生，Scratch都为你提供了丰富且具有挑战性的内容，让你在玩乐中学习编程技能。</p>
          </div>
          <div className='icode__features-language__scratch-pic'>
            <img src = {scratch} alt='scratch' />
          </div>
        </div>

        <div className='icode__features-language__python'>
          <div className='icode__features-language__python-pic'>
            <img src = {python} alt='python' />
          </div>
          <div className='icode__features-language__python-font'>
            <h3>python</h3>
            <p>Scratch是一种专为7-16岁学生设计的图形化程序设计语言。通过Scratch3.0工具，你可以轻松地创作故事、游戏和动画。在Scratch作品的设计过程中，你将学习到创造性思维、逻辑条理性，并学会如何与团队分工合作。无论你是哪个年龄段的学生，Scratch都为你提供了丰富且具有挑战性的内容，让你在玩乐中学习编程技能。</p>
          </div>
        </div>

        <div className='icode__features-language__cpp'>

            <div className='icode__features-language__cpp-font'>
              <h3>cpp</h3>
              <p>Scratch是一种专为7-16岁学生设计的图形化程序设计语言。通过Scratch3.0工具，你可以轻松地创作故事、游戏和动画。在Scratch作品的设计过程中，你将学习到创造性思维、逻辑条理性，并学会如何与团队分工合作。无论你是哪个年龄段的学生，Scratch都为你提供了丰富且具有挑战性的内容，让你在玩乐中学习编程技能。</p>
            </div>
            <div className='icode__features-language__cpp-pic'>
              <img src = {cpp} alt='cpp' />
            </div>
        </div>

      </div>
    </div>
  )
}

export default Features