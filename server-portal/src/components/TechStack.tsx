import React, { useState } from 'react'
import { Code, Terminal, Zap, Package, Globe } from 'lucide-react'

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const techData = {
    frontend: [
      { name: 'React', description: '用于构建用户界面的JavaScript库' },
      { name: 'Vue.js', description: '渐进式JavaScript框架' },
      { name: 'TypeScript', description: 'JavaScript的超集，添加了类型系统' },
      { name: 'Tailwind CSS', description: '实用优先的CSS框架' },
      { name: 'Next.js', description: 'React全栈框架' },
      { name: 'Vite', description: '下一代前端构建工具' }
    ],
    backend: [
      { name: 'Node.js', description: '基于Chrome V8引擎的JavaScript运行时' },
      { name: 'Python', description: '简洁、优雅的编程语言' },
      { name: 'Express', description: '快速、极简的Node.js Web框架' },
      { name: 'FastAPI', description: '现代、快速的Python Web框架' },
      { name: 'NestJS', description: '构建高效、可扩展的Node.js服务器端应用' },
      { name: 'Django', description: 'Python高级Web框架' }
    ],
    ai: [
      { name: 'OpenAI API', description: '强大的AI模型API服务' },
      { name: 'LangChain', description: '构建LLM应用的框架' },
      { name: 'TensorFlow', description: '端到端开源机器学习平台' },
      { name: 'Hugging Face', description: '自然语言处理模型库' },
      { name: 'PyTorch', description: '开源机器学习框架' },
      { name: 'OpenCV', description: '计算机视觉库' }
    ],
    database: [
      { name: 'MongoDB', description: '面向文档的NoSQL数据库' },
      { name: 'PostgreSQL', description: '强大的开源关系型数据库' },
      { name: 'MySQL', description: '流行的开源关系型数据库' },
      { name: 'Redis', description: '内存数据结构存储系统' },
      { name: 'Prisma', description: '下一代数据库工具包' },
      { name: 'Supabase', description: '开源Firebase替代方案' }
    ],
    devops: [
      { name: 'Git', description: '分布式版本控制系统' },
      { name: 'Docker', description: '容器化平台' },
      { name: 'GitHub Actions', description: 'CI/CD自动化工具' },
      { name: 'Vercel', description: '前端部署平台' },
      { name: 'AWS', description: '亚马逊云服务平台' },
      { name: 'Kubernetes', description: '容器编排平台' }
    ]
  }

  const categories = [
    { id: 'frontend', name: '前端', icon: Code },
    { id: 'backend', name: '后端', icon: Terminal },
    { id: 'ai', name: 'AI与机器学习', icon: Zap },
    { id: 'database', name: '数据库', icon: Package },
    { id: 'devops', name: '开发工具', icon: Globe }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              技术栈
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            精通多种编程语言、框架和工具，能够根据项目需求选择最适合的技术组合
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-100 border border-blue-200'
              }`}
            >
              <category.icon size={18} />
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {techData[activeCategory as keyof typeof techData].map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{tech.name}</h3>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">技术优势</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Zap size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">全栈开发能力</h4>
                  <p className="text-gray-600 text-sm">
                    掌握前后端完整技术栈，能够独立完成从设计到部署的全流程开发
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Code size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">AI技术整合</h4>
                  <p className="text-gray-600 text-sm">
                    熟练整合多种AI服务，构建智能化应用解决方案
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Terminal size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">性能优化</h4>
                  <p className="text-gray-600 text-sm">
                    注重应用性能优化，确保高并发、低延迟的用户体验
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">持续学习</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Globe size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">技术趋势跟踪</h4>
                  <p className="text-gray-600 text-sm">
                    持续关注行业最新技术趋势，及时更新技术栈
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Package size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">开源贡献</h4>
                  <p className="text-gray-600 text-sm">
                    积极参与开源项目，分享技术经验
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Code size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">知识分享</h4>
                  <p className="text-gray-600 text-sm">
                    通过技术博客、教程等形式分享开发经验
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
