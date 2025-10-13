import React, { useState } from 'react'
import { ExternalLink, Eye, Package, Zap, Terminal, Code, Award } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'AI工具链平台',
      description: '集成多种AI工具的一站式平台，提供文本生成、图像处理、语音识别等功能',
      tags: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
      status: 'running',
      link: 'https://ai-platform.example.com',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: '智能对话系统',
      description: '基于大语言模型的智能对话系统，支持多轮对话和上下文理解',
      tags: ['Vue.js', 'Python', 'LangChain'],
      status: 'running',
      link: 'https://chat.example.com',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: '全栈Web应用',
      description: '使用现代技术栈构建的全栈Web应用，包含用户管理、数据处理等功能',
      tags: ['Next.js', 'TypeScript', 'Prisma'],
      status: 'running',
      link: 'https://webapp.example.com',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: '数据分析平台',
      description: '企业级数据分析平台，提供数据可视化、报表生成和智能分析功能',
      tags: ['Python', 'FastAPI', 'TensorFlow'],
      status: 'maintenance',
      link: null,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
    }
  ]

  const certificates = [
    {
      id: 1,
      title: 'AWS认证机器学习专家',
      issuer: 'Amazon Web Services',
      date: '2023年6月',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Google云专业数据工程师',
      issuer: 'Google Cloud',
      date: '2023年3月',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: '微软Azure AI工程师',
      issuer: 'Microsoft',
      date: '2022年11月',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'TensorFlow开发者认证',
      issuer: 'Google',
      date: '2022年8月',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop'
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
            精选项目展示，涵盖Web应用、AI工具、数据分析等多个领域
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProject Image%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  {getStatusBadge(project.status)}
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.status === 'running' && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    访问项目
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white rounded-xl p-6 text-center border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Package size={24} className="text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{projects.length}</div>
            <div className="text-sm text-gray-600">总项目数</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-blue-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap size={24} className="text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">
              {projects.filter(p => p.status === 'running').length}
            </div>
            <div className="text-sm text-gray-600">运行中</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-blue-100">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Terminal size={24} className="text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">
              {projects.filter(p => p.status === 'maintenance').length}
            </div>
            <div className="text-sm text-gray-600">维护中</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-blue-100">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Code size={24} className="text-red-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">
              {projects.filter(p => p.status === 'stopped').length}
            </div>
            <div className="text-sm text-gray-600">已停止</div>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI专业认证
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              获得多项国际权威AI与机器学习领域专业认证
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ECertificate%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={18} className="text-blue-600" />
                    <h3 className="text-lg font-bold text-gray-800">{cert.title}</h3>
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
