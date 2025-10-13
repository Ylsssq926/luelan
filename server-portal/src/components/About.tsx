
import { Github, Mail, MapPin, Calendar, Award, Target, Zap, ExternalLink } from 'lucide-react'

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              关于我
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            热衷于技术创新与产品开发，致力于打造高效、智能的数字解决方案
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-100">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Zap className="text-white" size={48} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Azure Glance</h3>
                <p className="text-blue-600 font-medium mb-4">AI工具链专家 · 产品经理</p>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={18} className="text-blue-500" />
                    <span>中国 · 北京</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar size={18} className="text-blue-500" />
                    <span>8年+ 开发经验</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail size={18} className="text-blue-500" />
                    <span>contact@example.com</span>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3 justify-center">
                  <a
                    href="https://github.com/Ylsssq926"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white text-blue-700 hover:bg-blue-100 transition-all"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Award className="text-blue-600" size={24} />
                专业技能
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">AI工具链开发</h4>
                    <p className="text-sm text-gray-600">构建端到端AI解决方案，从数据处理到模型部署</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">产品设计与管理</h4>
                    <p className="text-sm text-gray-600">用户体验优化与产品功能创新设计</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">全栈应用开发</h4>
                    <p className="text-sm text-gray-600">前后端技术栈整合，打造高性能Web应用</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">系统架构设计</h4>
                    <p className="text-sm text-gray-600">可扩展、高可用系统架构规划与实施</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">DevOps与自动化</h4>
                    <p className="text-sm text-gray-600">CI/CD流程构建与基础设施自动化管理</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">技术咨询与指导</h4>
                    <p className="text-sm text-gray-600">技术选型评估与团队技术能力提升</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Calendar className="text-blue-600" size={24} />
                工作经验
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-8 pb-6 border-l-2 border-blue-200">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">AI工具链专家 · 产品经理</h4>
                    <p className="text-blue-600 mb-2">2020 - 至今</p>
                    <p className="text-gray-600">
                      负责企业级AI工具链平台的设计与开发，整合多种AI服务，构建端到端解决方案，
                      提升团队开发效率30%以上。
                    </p>
                  </div>
                </div>
                
                <div className="relative pl-8 pb-6 border-l-2 border-blue-200">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">全栈开发工程师</h4>
                    <p className="text-blue-600 mb-2">2018 - 2020</p>
                    <p className="text-gray-600">
                      参与多个大型Web应用开发，负责前端架构设计与后端API开发，
                      实现高并发、低延迟的系统性能。
                    </p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">前端开发工程师</h4>
                    <p className="text-blue-600 mb-2">2016 - 2018</p>
                    <p className="text-gray-600">
                      专注于前端技术开发与用户体验优化，参与多个企业级项目的前端架构设计。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Target className="text-blue-600" size={24} />
              项目理念
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Zap size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">技术驱动创新</h4>
                  <p className="text-gray-600 text-sm">
                    以技术创新为核心驱动力，不断探索前沿技术的应用场景
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Target size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">用户体验至上</h4>
                  <p className="text-gray-600 text-sm">
                    始终将用户体验放在首位，打造简洁、高效、易用的产品
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">持续学习成长</h4>
                  <p className="text-gray-600 text-sm">
                    保持学习热情，不断更新知识体系，适应快速变化的技术环境
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Zap className="text-blue-600" size={24} />
              学习资源
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">技术博客</h4>
                <p className="text-sm text-gray-600 mb-3">
                  分享最新技术趋势、实战经验与开发技巧
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                  访问博客 <ExternalLink size={14} />
                </a>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">开源项目</h4>
                <p className="text-sm text-gray-600 mb-3">
                  参与和维护多个开源项目，贡献代码与文档
                </p>
                <a href="https://github.com/Ylsssq926" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                  查看项目 <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
