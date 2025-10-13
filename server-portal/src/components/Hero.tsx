import { useState, useEffect } from 'react'
import { Github, ArrowDown, Zap, Package, Terminal, User } from 'lucide-react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const [displayText, setDisplayText] = useState('')
  
  const titles = [
    '产品经理',
    'AI爱好者',
    '技术探索者',
    'AIGC创作者'
  ]
  
  useEffect(() => {
    const title = titles[currentText]
    let index = 0
    
    const typeInterval = setInterval(() => {
      if (index < title.length) {
        setDisplayText(title.substring(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentText((prev) => (prev + 1) % titles.length)
        }, 2000)
      }
    }, 100)
    
    return () => clearInterval(typeInterval)
  }, [currentText])
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 动态背景 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-200 opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-200 opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 欢迎标签 - 添加动画 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 animate-fade-in-up hover-glow hover:scale-105 smooth-transition">
          <Zap size={16} className="animate-pulse" />
          <span>欢迎来到我的数字世界</span>
        </div>
        
        {/* 主标题 - 添加渐变动画 */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100">
          <span className="gradient-text-animated block">
            创新驱动
          </span>
          <span className="gradient-text-animated block" style={{ animationDelay: '0.5s' }}>
            技术引领未来
          </span>
        </h1>
        
        {/* 动态文本 - 添加动画 */}
        <div className="text-xl md:text-2xl text-gray-700 mb-8 h-8 animate-fade-in-up animation-delay-200">
          我是一名<span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{displayText}</span>
          <span className="animate-pulse text-blue-600">|</span>
        </div>
        
        {/* 描述文本 - 添加动画 */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-300">
          计算机科学与技术专业毕业，从2019年开始从事产品经理工作。
          热衷于探索AI技术在产品中的应用，擅长使用AI工具提升工作效率，
          在图像、视频、音乐等AIGC领域有丰富的实践经验。
        </p>
        
        {/* 操作按钮 - 添加动画和波纹效果 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-400">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 button-ripple group"
          >
            <Package size={20} className="group-hover:rotate-12 transition-transform" />
            <span>浏览项目</span>
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-3 bg-white border-2 border-blue-200 text-blue-700 rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            <User size={20} className="group-hover:scale-110 transition-transform" />
            <span>了解更多</span>
          </button>
        </div>
        
        {/* 快速访问区域 - 添加交错动画 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all group card-hover animate-scale-in"
          >
            <Package className="mx-auto mb-2 text-blue-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" size={24} />
            <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">项目展示</span>
          </button>
          
          <button
            onClick={() => scrollToSection('techstack')}
            className="p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all group card-hover animate-scale-in animation-delay-100"
          >
            <Terminal className="mx-auto mb-2 text-blue-600 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" size={24} />
            <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">技术栈</span>
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className="p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all group card-hover animate-scale-in animation-delay-200"
          >
            <User className="mx-auto mb-2 text-blue-600 group-hover:scale-125 transition-all duration-300" size={24} />
            <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">关于我</span>
          </button>
          
          <a
            href="https://github.com/Ylsssq926"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all group card-hover animate-scale-in animation-delay-300"
          >
            <Github className="mx-auto mb-2 text-blue-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" size={24} />
            <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">GitHub</span>
          </a>
        </div>
        
        {/* 滚动提示 - 添加动画 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('projects')}
            className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 hover:from-blue-200 hover:to-indigo-200 transition-all hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
