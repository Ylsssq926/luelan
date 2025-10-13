import { useState, useEffect } from 'react'
import { Github, ArrowDown, Zap, Package, Terminal, User } from 'lucide-react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const [displayText, setDisplayText] = useState('')
  
  const titles = [
    'AI工具链专家',
    '产品经理',
    '全栈开发工程师',
    '技术创新者'
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
          <Zap size={16} />
          <span>欢迎来到我的数字世界</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            创新驱动
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            技术引领未来
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-700 mb-8 h-8">
          我是一名<span className="font-semibold text-blue-600">{displayText}</span>
          <span className="animate-pulse">|</span>
        </div>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          专注于AI工具链开发、产品设计与创新。通过整合前沿技术，
          打造高效、智能的数字解决方案，助力业务增长与用户体验提升。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Package size={20} />
            浏览项目
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-3 bg-white border-2 border-blue-200 text-blue-700 rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <User size={20} />
            了解更多
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all group"
          >
            <Package className="mx-auto mb-2 text-blue-600 group-hover:scale-110 transition-transform" size={24} />
            <span className="text-sm text-gray-700">项目展示</span>
          </button>
          
          <button
            onClick={() => scrollToSection('techstack')}
            className="p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all group"
          >
            <Terminal className="mx-auto mb-2 text-blue-600 group-hover:scale-110 transition-transform" size={24} />
            <span className="text-sm text-gray-700">技术栈</span>
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className="p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all group"
          >
            <User className="mx-auto mb-2 text-blue-600 group-hover:scale-110 transition-transform" size={24} />
            <span className="text-sm text-gray-700">关于我</span>
          </button>
          
          <a
            href="https://github.com/Ylsssq926"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all group"
          >
            <Github className="mx-auto mb-2 text-blue-600 group-hover:scale-110 transition-transform" size={24} />
            <span className="text-sm text-gray-700">GitHub</span>
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('projects')}
            className="p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
