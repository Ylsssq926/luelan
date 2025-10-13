import { useState, useEffect, useRef } from 'react'
import { ExternalLink, Package, Zap, Terminal, Code, Award } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.1 }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })
  }, [filter])

  const projects = [
    {
      id: 1,
      title: 'Velo AI评测站',
      description: 'AI模型评测与对比平台，提供多维度的AI能力测试和性能分析，帮助用户选择最适合的AI模型',
      tags: ['React', 'TypeScript', 'AI评测', 'Next.js'],
      status: 'running',
      link: null,
      images: [
        '/images/projects/欢迎页面.png',
        '/images/projects/项目截图1.png',
        '/images/projects/项目截图2.png',
        '/images/projects/项目截图3.png',
        '/images/projects/项目截图4.png'
      ]
    },
    {
      id: 2,
      title: '小游戏对战平台',
      description: '多人在线游戏对战平台，支持实时匹配、游戏大厅、好友系统等功能，提供流畅的游戏体验',
      tags: ['Vue.js', 'WebSocket', 'Node.js', '实时通信'],
      status: 'running',
      link: null,
      images: [
        '/images/projects/欢迎页面.jpeg',
        '/images/projects/游戏大厅.jpeg',
        '/images/projects/游戏截图1.jpeg',
        '/images/projects/游戏截图2.png'
      ]
    },
    {
      id: 3,
      title: 'AI虚拟恋爱游戏',
      description: '基于AI的虚拟恋爱互动游戏，智能对话系统让虚拟角色更加真实，提供沉浸式的互动体验',
      tags: ['React', 'AI对话', 'LangChain', 'OpenAI'],
      status: 'running',
      link: null,
      images: [
        '/images/projects/欢迎.jpeg',
        '/images/projects/游戏截图1.jpeg',
        '/images/projects/游戏截图2.jpeg',
        '/images/projects/游戏截图3.jpeg',
        '/images/projects/游戏截图4.jpeg',
        '/images/projects/游戏截图5.jpg'
      ]
    },
    {
      id: 4,
      title: 'AI文字冒险游戏',
      description: 'AI驱动的文字冒险游戏，动态生成剧情和选项，每次游戏都有不同的体验和结局',
      tags: ['React', 'AI生成', 'GPT', '游戏设计'],
      status: 'running',
      link: null,
      images: [
        '/images/projects/欢迎界面.jpeg',
        '/images/projects/游戏截图1.jpeg',
        '/images/projects/游戏截图2.jpeg',
        '/images/projects/游戏截图3.jpeg'
      ]
    },
    {
      id: 5,
      title: '2048猫猫',
      description: '经典2048游戏的可爱猫猫版本，简洁的界面设计和流畅的游戏体验',
      tags: ['JavaScript', 'Canvas', '游戏开发', 'UI设计'],
      status: 'running',
      link: null,
      images: [
        '/images/projects/游戏截图1.jpeg'
      ]
    }
  ]

  const certificates = [
    {
      id: 1,
      title: 'AI Agent工程师认证',
      issuer: 'AI认证机构',
      date: '2024年',
      image: '/images/certificates/agent-engineer-cert.png'
    },
    {
      id: 2,
      title: 'Prompt工程师认证',
      issuer: 'AI认证机构',
      date: '2024年',
      image: '/images/certificates/prompt-engineer-cer.png'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'running':
        return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">运行中</span>
      case 'stopped':
        return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">已停止</span>
      case 'maintenance':
        return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">维护中</span>
      default:
        return null
    }
  }

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter)

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              项目展示
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            展示使用AI工具辅助开发的个人项目，涵盖游戏、工具等多个领域
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            全部项目
          </button>
          <button
            onClick={() => setFilter('running')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'running'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            运行中
          </button>
        </div>

        {/* 项目网格 - 添加滚动触发动画 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              data-index={idx}
              className="animate-on-scroll bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-500 card-hover group"
              style={{
                opacity: visibleItems.has(idx) ? 1 : 0,
                transform: visibleItems.has(idx) ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${idx * 0.1}s`
              }}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProject Image%3C/text%3E%3C/svg%3E'
                  }}
                />
                {project.images.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    {project.images.length} 张图片
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  {getStatusBadge(project.status)}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200 hover:bg-blue-100 hover:scale-110 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105 hover:shadow-lg group/btn"
                    >
                      <ExternalLink size={16} className="group-hover/btn:rotate-45 transition-transform" />
                      <span>访问项目</span>
                    </a>
                  )}
                  {project.images.length > 1 && (
                    <button
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-all hover:scale-105"
                    >
                      <Package size={16} />
                      <span>查看截图</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 项目统计 - 添加动画和交互效果 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white rounded-xl p-6 text-center border border-blue-100 card-hover hover-glow group cursor-default">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Package size={24} className="text-blue-600 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">{projects.length}</div>
            <div className="text-sm text-gray-600">总项目数</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-blue-100 card-hover hover-glow group cursor-default">
            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Zap size={24} className="text-green-600 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
              {projects.filter(p => p.status === 'running').length}
            </div>
            <div className="text-sm text-gray-600">运行中</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-blue-100 card-hover hover-glow group cursor-default">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Terminal size={24} className="text-yellow-600 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-1">
              {projects.filter(p => p.status === 'maintenance').length}
            </div>
            <div className="text-sm text-gray-600">维护中</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-blue-100 card-hover hover-glow group cursor-default">
            <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Code size={24} className="text-red-600 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-1">
              {projects.filter(p => p.status === 'stopped').length}
            </div>
            <div className="text-sm text-gray-600">已停止</div>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                学习认证
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              在职期间积极学习网课，获得AI相关领域学习认证
            </p>
          </div>

          {/* 证书网格 - 添加动画 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, idx) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-500 card-hover group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                <div className="h-40 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ECertificate%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-2 mb-2">
                    <Award size={18} className="text-blue-600 flex-shrink-0 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all" />
                    <h3 className="text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">{cert.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
