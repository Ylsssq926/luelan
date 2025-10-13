import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-effect shadow-lg border-b border-blue-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - 添加动画 */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold gradient-text-animated hover:scale-105 transition-transform cursor-pointer"
          >
            Azure Glance
          </button>

          {/* 桌面端导航 - 添加动画 */}
          <div className="hidden md:flex space-x-8">
            {['home', 'projects', 'about', 'techstack'].map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-gray-700 hover:text-blue-600 transition-all capitalize font-medium group"
                style={{
                  animation: `fadeInDown 0.5s ease-out ${idx * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                {item === 'home' ? '首页' : item === 'projects' ? '项目' : item === 'about' ? '关于' : '技术栈'}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* 移动端菜单按钮 - 添加动画 */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-all hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-gray-700 animate-spin" style={{ animationDuration: '0.3s' }} />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* 移动端菜单 - 添加滑入动画 */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden glass-effect border-t border-blue-100"
          style={{
            animation: 'fadeInDown 0.3s ease-out forwards'
          }}
        >
          <div className="px-4 py-4 space-y-2">
            {['home', 'projects', 'about', 'techstack'].map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg capitalize font-medium transition-all hover:scale-105 hover:shadow-md"
                style={{
                  animation: `fadeInLeft 0.3s ease-out ${idx * 0.05}s forwards`,
                  opacity: 0
                }}
              >
                {item === 'home' ? '首页' : item === 'projects' ? '项目' : item === 'about' ? '关于' : '技术栈'}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
