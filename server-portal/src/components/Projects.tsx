import { useState, useEffect, useRef } from 'react'
import { ExternalLink, Package, Zap, Terminal, Award, X, ChevronLeft, ChevronRight } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [currentImages, setCurrentImages] = useState<string[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [previewTitle, setPreviewTitle] = useState('')

  // 打开图片预览
  const openImagePreview = (images: string[], title: string, startIndex = 0) => {
    setCurrentImages(images)
    setPreviewTitle(title)
    setCurrentImageIndex(startIndex)
    setPreviewOpen(true)
  }

  // 关闭图片预览
  const closeImagePreview = () => {
    setPreviewOpen(false)
    setCurrentImages([])
    setCurrentImageIndex(0)
    setPreviewTitle('')
  }

  // 上一张图片
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : currentImages.length - 1))
  }

  // 下一张图片
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev < currentImages.length - 1 ? prev + 1 : 0))
  }

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!previewOpen) return
      if (e.key === 'Escape') closeImagePreview()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [previewOpen, currentImages.length])

  // 预加载图片
  useEffect(() => {
    const imagesToPreload = [
      ...filteredProjects.flatMap(p => p.images),
      ...certificates.map(c => c.image)
    ].filter(Boolean)

    imagesToPreload.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [filter])

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
      title: 'VeloAI - AI工具评测平台',
      description: 'AI工具极速测评库，专注于新发布AI工具的快速测评，通过客观中立短评和评分为用户提供高效的工具选择参考',
      tags: ['React', 'TypeScript', 'SQLite', 'Express'],
      status: 'filing',
      link: null,
      images: [
        '/images/projects/veloai/欢迎页面.png',
        '/images/projects/veloai/项目截图1.png',
        '/images/projects/veloai/项目截图2.png',
        '/images/projects/veloai/项目截图3.png',
        '/images/projects/veloai/项目截图4.png'
      ]
    },
    {
      id: 2,
      title: '掠蓝写作 - AI智能小说创作工具',
      description: '基于Vue 3的专业AI小说创作平台，集成先进AI模型，提供完整的创作工具链，支持智能续写、内容润色、世界观构建等功能',
      tags: ['Vue 3', 'Element Plus', 'AI创作', 'WangEditor'],
      status: 'development',
      link: null,
      images: []
    },
    {
      id: 3,
      title: 'AI工具导航站',
      description: '现代化的AI工具导航网站，帮助用户发现和使用最优质的AI工具，支持智能搜索、分类筛选、工具收藏等功能',
      tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
      status: 'development',
      link: null,
      images: []
    },
    {
      id: 4,
      title: '掠蓝速通站',
      description: '3分钟工具站，为本科毕业生提供答辩PPT、论文降重等可直接使用的资源，零服务器成本，解决新手痛点',
      tags: ['HTML', 'JavaScript', 'SQLite', 'Bootstrap'],
      status: 'development',
      link: null,
      images: []
    },
    {
      id: 5,
      title: '小游戏对战平台',
      description: '多人在线游戏对战平台，支持实时匹配、游戏大厅、好友系统等功能，提供流畅的游戏体验',
      tags: ['WebSocket', '实时通信', '游戏开发', 'Cursor辅助'],
      status: 'filing',
      link: null,
      images: [
        '/images/projects/game-yxdt/欢迎页面.jpeg',
        '/images/projects/game-yxdt/游戏大厅.jpeg',
        '/images/projects/game-yxdt/游戏截图2.png'
      ]
    },
    {
      id: 6,
      title: 'AI虚拟恋爱游戏',
      description: '基于AI的虚拟恋爱互动游戏，使用Cursor辅助开发，智能对话系统让虚拟角色更加真实，提供沉浸式的互动体验',
      tags: ['React', 'AI对话', 'Supabase', 'Cursor辅助'],
      status: 'filing',
      link: null,
      images: [
        '/images/projects/game-ai-love/欢迎.jpeg',
        '/images/projects/game-ai-love/游戏截图1.jpeg',
        '/images/projects/game-ai-love/游戏截图2.jpeg',
        '/images/projects/game-ai-love/游戏截图3.jpeg',
        '/images/projects/game-ai-love/游戏截图4.jpeg',
        '/images/projects/game-ai-love/游戏截图5.jpg'
      ]
    },
    {
      id: 7,
      title: 'AI文字冒险游戏',
      description: 'AI驱动的文字冒险游戏，使用Cursor辅助开发，动态生成剧情和选项，每次游戏都有不同的体验和结局',
      tags: ['React', 'AI生成', 'Supabase', 'Cursor辅助'],
      status: 'filing',
      link: null,
      images: [
        '/images/projects/game-wzmx/欢迎界面.jpeg'
      ]
    },
    {
      id: 8,
      title: '暗黑破坏神风格RPG',
      description: '暗黑破坏神4风格RPG游戏，使用Cursor辅助开发，五大职业系统、丰富装备系统、完整技能树，暗黑哥特风格UI设计',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Cursor辅助'],
      status: 'development',
      link: null,
      images: []
    },
    {
      id: 9,
      title: '金庸群侠传卡牌游戏',
      description: '金庸群侠传主题卡牌游戏，使用Cursor辅助开发，收集经典人物卡牌，组建卡组进行战斗',
      tags: ['React', 'TypeScript', 'Supabase', 'Cursor辅助'],
      status: 'development',
      link: null,
      images: []
    },
    {
      id: 10,
      title: '2048猫猫',
      description: '经典2048游戏的可爱猫猫版本，使用Cursor辅助开发，简洁的界面设计和流畅的游戏体验',
      tags: ['JavaScript', 'Canvas', '微信小程序', 'Cursor辅助'],
      status: 'filing',
      link: null,
      images: [
        '/images/projects/game-2048maomao/游戏截图1.jpeg'
      ]
    }
  ]

  const certificates = [
    {
      id: 1,
      title: 'AI Agent工程师认证',
      issuer: 'AI认证机构',
      date: '2025年',
      image: '/images/certificates/agent-engineer-cert.png'
    },
    {
      id: 2,
      title: 'Prompt工程师认证',
      issuer: 'AI认证机构',
      date: '2025年',
      image: '/images/certificates/prompt-engineer-cer.png'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'filing':
        return <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">备案部署中</span>
      case 'development':
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">开发中</span>
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

  // 项目排序：备案部署中优先，然后是开发中
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.status === 'filing' && b.status !== 'filing') return -1
    if (a.status !== 'filing' && b.status === 'filing') return 1
    return 0
  })

  const filteredProjects = filter === 'all' 
    ? sortedProjects 
    : sortedProjects.filter(project => project.status === filter)

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 px-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              项目展示
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            展示使用AI工具辅助开发的个人项目，涵盖游戏、工具等多个领域
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base font-medium transition-all ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            全部项目
          </button>
          <button
            onClick={() => setFilter('filing')}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base font-medium transition-all ${
              filter === 'filing'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            备案部署中
          </button>
          <button
            onClick={() => setFilter('development')}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base font-medium transition-all ${
              filter === 'development'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            开发中
          </button>
        </div>

        {/* 项目网格 - 添加滚动触发动画 - 移动端优化 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-16">
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
              <div className="h-40 md:h-48 overflow-hidden relative">
                {project.images.length > 0 ? (
                  <>
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
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center px-4">
                    <Package size={48} className="text-blue-300 mb-3" />
                    <p className="text-blue-600 font-medium text-sm">开发中</p>
                    <p className="text-blue-400 text-xs mt-1 text-center">前端页面不便提供</p>
                  </div>
                )}
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-2 md:mb-3 gap-2">
                  <h3 className="text-base md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors flex-1">{project.title}</h3>
                  {getStatusBadge(project.status)}
                </div>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-2">{project.description}</p>
                {project.status === 'filing' && project.images.length > 0 && (
                  <div className="mb-2 md:mb-3 p-2 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-xs text-blue-700">💼 求职可查看源码</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-1.5 py-0.5 md:px-2 md:py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200 hover:bg-blue-100 hover:scale-110 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 md:px-3 md:py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs md:text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105 hover:shadow-lg group/btn"
                    >
                      <ExternalLink size={14} className="md:w-4 md:h-4 group-hover/btn:rotate-45 transition-transform" />
                      <span>访问项目</span>
                    </a>
                  )}
                  {project.images.length > 0 && (
                    <button
                      onClick={() => openImagePreview(project.images, project.title)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 md:px-3 md:py-1.5 bg-gray-100 text-gray-700 text-xs md:text-sm font-medium rounded-lg hover:bg-gray-200 transition-all hover:scale-105"
                    >
                      <Package size={14} className="md:w-4 md:h-4" />
                      <span>查看截图</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 项目统计 - 添加动画和交互效果 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-20">
          <div className="bg-white rounded-xl p-4 md:p-6 text-center border border-blue-100 card-hover hover-glow group cursor-default">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform">
              <Package size={20} className="md:w-6 md:h-6 text-blue-600 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">{projects.length}</div>
            <div className="text-xs md:text-sm text-gray-600">总项目数</div>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 text-center border border-blue-100 card-hover hover-glow group cursor-default">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform">
              <Zap size={20} className="md:w-6 md:h-6 text-blue-600 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
              {projects.filter(p => p.status === 'filing').length}
            </div>
            <div className="text-xs md:text-sm text-gray-600">备案部署中</div>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 text-center border border-blue-100 card-hover hover-glow group cursor-default col-span-2 md:col-span-1">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform">
              <Terminal size={20} className="md:w-6 md:h-6 text-gray-600 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent mb-1">
              {projects.filter(p => p.status === 'development').length}
            </div>
            <div className="text-xs md:text-sm text-gray-600">开发中</div>
          </div>
        </div>

        <div>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 px-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                学习认证
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              在职期间积极学习网课，获得AI相关领域学习认证
            </p>
          </div>

          {/* 证书网格 - 添加动画 - 移动端优化 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {certificates.map((cert, idx) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-500 card-hover group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                <div 
                className="h-32 md:h-40 overflow-hidden relative cursor-pointer"
                onClick={() => openImagePreview([cert.image], cert.title)}
              >
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
                <div className="p-4 md:p-5">
                  <div className="flex items-start gap-2 mb-2">
                    <Award size={16} className="md:w-[18px] md:h-[18px] text-blue-600 flex-shrink-0 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all" />
                    <h3 className="text-sm md:text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">{cert.title}</h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm mb-1 md:mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 图片预览模态框 - 优化支持滚动查看长图 */}
      {previewOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-hidden"
          onClick={closeImagePreview}
        >
          {/* 顶部工具栏 */}
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 z-20">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div>
                <h3 className="text-white text-lg md:text-xl font-bold">{previewTitle}</h3>
                {currentImages.length > 1 && (
                  <p className="text-white/80 text-sm">
                    {currentImageIndex + 1} / {currentImages.length}
                  </p>
                )}
              </div>
              <button
                onClick={closeImagePreview}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* 图片容器 - 支持滚动 */}
          <div 
            className="absolute inset-0 overflow-y-auto overflow-x-hidden pt-20 pb-24 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-5xl mx-auto">
              <img
                src={currentImages[currentImageIndex]}
                alt={`${previewTitle} - ${currentImageIndex + 1}`}
                className="w-full h-auto rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23333" width="800" height="600"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E图片加载失败%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>
          </div>

          {/* 左右切换按钮 - 移动端优化 */}
          {currentImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm z-20"
              >
                <ChevronLeft size={24} className="md:w-8 md:h-8" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm z-20"
              >
                <ChevronRight size={24} className="md:w-8 md:h-8" />
              </button>
            </>
          )}

          {/* 底部缩略图导航 - 移动端优化 */}
          {currentImages.length > 1 && (
            <div className="fixed bottom-4 left-0 right-0 z-20 px-4">
              <div className="max-w-3xl mx-auto overflow-x-auto">
                <div className="flex gap-2 bg-black/60 backdrop-blur-sm p-2 rounded-lg justify-center min-w-max mx-auto">
                  {currentImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`w-12 h-12 md:w-16 md:h-16 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
                        idx === currentImageIndex ? 'border-blue-500 scale-110' : 'border-white/30 hover:border-white/60'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`缩略图 ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default Projects
