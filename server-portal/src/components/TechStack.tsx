import { useState } from 'react'
import { Code, Terminal, Zap, Package, Globe } from 'lucide-react'

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('product')

  const techData = {
    product: [
      { name: 'Axure RP', description: '产品原型设计工具' },
      { name: 'Figma', description: '协作式界面设计工具' },
      { name: 'Xmind', description: '思维导图与头脑风暴工具' },
      { name: 'Notion', description: '知识管理与协作平台' },
      { name: 'Jira', description: '项目管理与问题跟踪工具' },
      { name: 'Confluence', description: '团队协作与文档管理' }
    ],
    aitools: [
      { name: 'Cursor', description: 'AI辅助编程IDE' },
      { name: 'Kiro', description: 'AI代码助手' },
      { name: 'CodeBuddy', description: 'AI开发工具' },
      { name: 'Trae', description: 'AI编程助手' },
      { name: 'ChatGPT', description: 'AI对话与内容生成' },
      { name: 'Claude', description: 'AI助手与分析工具' }
    ],
    aigc: [
      { name: 'Stable Diffusion', description: 'AI图像生成 - 本地部署图像创作' },
      { name: 'Midjourney', description: 'AI图像生成 - 高质量艺术创作' },
      { name: 'Recraft', description: 'AI图像生成 - 设计工具' },
      { name: 'Banana', description: 'AI图像生成 - 快速创作工具' },
      { name: '可灵AI', description: 'AI视频生成 - 文本转视频' },
      { name: '即梦AI', description: 'AI视频生成 - 视频创作平台' },
      { name: '阿里万相', description: 'AI视频生成 - 本地部署方案' },
      { name: 'Suno AI', description: 'AI音乐生成 - 歌曲创作工具' },
      { name: 'ChatGPT', description: 'AI文本生成 - 内容创作助手' },
      { name: 'Claude', description: 'AI文本生成 - 长文本处理' }
    ],
    tech: [
      { name: 'C语言', description: '系统编程语言基础' },
      { name: 'Python', description: '数据处理与脚本编写' },
      { name: 'MySQL', description: '关系型数据库管理' },
      { name: 'Supabase', description: '开源后端即服务平台' },
      { name: 'Git', description: '版本控制系统' },
      { name: 'VS Code', description: '代码编辑器' }
    ],
    skills: [
      { name: '需求分析', description: '用户需求挖掘与分析' },
      { name: '产品规划', description: '产品路线图与功能规划' },
      { name: '原型设计', description: '交互原型与UI设计' },
      { name: '项目管理', description: '敏捷开发与项目协调' },
      { name: '数据分析', description: '用户行为与产品数据分析' },
      { name: 'AI应用', description: 'AI技术在产品中的应用' }
    ]
  }

  const categories = [
    { id: 'product', name: '产品工具', icon: Package },
    { id: 'aitools', name: 'AI开发工具', icon: Zap },
    { id: 'aigc', name: 'AIGC创作', icon: Code },
    { id: 'tech', name: '技术基础', icon: Terminal },
    { id: 'skills', name: '核心能力', icon: Globe }
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 px-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              技术栈
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            熟练使用多种产品设计工具和AI工具，具备扎实的技术基础，能够高效完成产品设计与开发协作
          </p>
        </div>
        
        {/* 分类标签 - 添加动画 - 移动端优化 */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4">
          {categories.map((category, idx) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base font-medium transition-all flex items-center gap-1.5 md:gap-2 hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-blue-200 hover:border-blue-400'
              }`}
              style={{
                animation: `scaleIn 0.4s ease-out ${idx * 0.05}s forwards`,
                opacity: 0
              }}
            >
              <category.icon size={16} className={`md:w-[18px] md:h-[18px] ${activeCategory === category.id ? 'animate-pulse' : ''}`} />
              {category.name}
            </button>
          ))}
        </div>
        
        {/* 技术列表 - 添加交错动画 - 移动端优化 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {techData[activeCategory as keyof typeof techData].map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-blue-100 hover:shadow-xl transition-all duration-300 card-hover group cursor-default"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`,
                opacity: 0
              }}
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform"></span>
                {tech.name}
              </h3>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
        
        {/* 技术优势和持续学习 - 添加动画 */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100 card-hover">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </span>
              技术优势
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Zap size={20} className="text-blue-600 group-hover:rotate-12 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">产品设计能力</h4>
                  <p className="text-gray-600 text-sm">
                    熟练使用Axure、Figma等工具，能够快速输出高质量产品原型
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Code size={20} className="text-blue-600 group-hover:rotate-12 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">AI工具应用</h4>
                  <p className="text-gray-600 text-sm">
                    熟练使用Cursor、Kiro等AI开发工具，提升工作效率
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Terminal size={20} className="text-blue-600 group-hover:rotate-12 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">AIGC创作</h4>
                  <p className="text-gray-600 text-sm">
                    掌握多种AI生成工具，在图像、视频、音乐创作方面经验丰富
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-100 card-hover">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <Globe size={16} className="text-white" />
              </span>
              持续学习
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Globe size={20} className="text-indigo-600 group-hover:rotate-12 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors">项目管理经验</h4>
                  <p className="text-gray-600 text-sm">
                    负责过9个公司项目，具备完整的项目管理经验
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Package size={20} className="text-indigo-600 group-hover:rotate-12 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors">持续学习</h4>
                  <p className="text-gray-600 text-sm">
                    积极学习网课，不断提升AI和产品相关技能
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Code size={20} className="text-indigo-600 group-hover:rotate-12 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors">技术理解</h4>
                  <p className="text-gray-600 text-sm">
                    具备扎实的技术基础，能够与开发团队高效沟通
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
