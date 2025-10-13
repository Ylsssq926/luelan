
import { Github, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Azure Glance
            </h3>
            <p className="text-gray-400 text-sm">
              产品经理 · AI爱好者<br />
              探索AI技术在产品中的应用，提升工作效率
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">首页</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">项目</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">关于</a></li>
              <li><a href="#techstack" className="hover:text-blue-400 transition-colors">技术栈</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">联系方式</h4>
            <div className="space-y-3">
              <a href="https://github.com/Ylsssq926" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm group">
                <Github size={18} className="group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              <a href="tel:17633918339" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm group">
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>17633918339</span>
              </a>
              <a href="https://tp9aaq8t4g.feishu.cn/docx/HET7dNm2aofdyMxMMgfcFGBUnke" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm group">
                <svg className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
                <span>产品作品集</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by Azure Glance © 2025
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
