
import { Github, Mail, Calendar, Award, Target, ExternalLink, Phone, MessageCircle, Zap } from 'lucide-react'

const About = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 px-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              关于我
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            热衷于技术创新与产品开发，致力于打造高效、智能的数字解决方案
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-100">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="/images/avatar.jpg" 
                    alt="头像" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Azure Glance</h3>
                <p className="text-blue-600 font-medium mb-4">产品经理 · AI爱好者</p>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar size={18} className="text-blue-500 flex-shrink-0" />
                    <span>2019年起 · 产品经理</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Award size={18} className="text-blue-500 flex-shrink-0" />
                    <span>计算机科学与技术</span>
                  </div>
                </div>
                
                {/* 联系方式分组 */}
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <MessageCircle size={16} className="text-blue-500" />
                    联系方式
                  </h4>
                  <div className="space-y-2.5 text-left">
                    <div className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                      <Phone size={16} className="text-blue-500 flex-shrink-0" />
                      <a href="tel:17633918339" className="text-sm hover:underline">17633918339</a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                      <Mail size={16} className="text-blue-500 flex-shrink-0" />
                      <a href="mailto:ylsssq@qq.com" className="text-sm hover:underline">ylsssq@qq.com</a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.5 9h-19C1.67 9 1 9.67 1 10.5v10C1 21.33 1.67 22 2.5 22h19c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5zm-1.64 2L12 15.5 4.14 11h15.72zM3 20V11.81l9 5.63 9-5.63V20H3z"/>
                      </svg>
                      <span className="text-sm">QQ: 4699906100</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.691 2.188C7.82 2.188 7.12 2.89 7.12 3.758v16.484c0 .868.7 1.569 1.571 1.569h6.618c.868 0 1.571-.7 1.571-1.569V3.758c0-.868-.703-1.57-1.571-1.57H8.691zm.746 1.5h4.126c.414 0 .75.336.75.75s-.336.75-.75.75H9.437c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm2.063 14.438c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75-.336-.75-.75-.75z"/>
                      </svg>
                      <span className="text-sm">微信: pain_wei</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3 justify-center">
                  <a
                    href="https://github.com/Ylsssq926"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white text-blue-700 hover:bg-blue-100 transition-all hover:scale-110"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://tp9aaq8t4g.feishu.cn/docx/HET7dNm2aofdyMxMMgfcFGBUnke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white text-blue-700 hover:bg-blue-100 transition-all hover:scale-110"
                    title="产品经理作品集"
                  >
                    <ExternalLink size={20} />
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
                    <h4 className="font-semibold text-blue-800 mb-2">产品规划与设计</h4>
                    <p className="text-sm text-gray-600">需求分析、产品设计、用户体验优化</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">AI工具应用</h4>
                    <p className="text-sm text-gray-600">熟练使用Cursor、Kiro等AI开发工具</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">AIGC创作</h4>
                    <p className="text-sm text-gray-600">图像、视频、音乐等AI生成内容创作</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">技术基础</h4>
                    <p className="text-sm text-gray-600">C语言、Python、MySQL基础，Supabase应用</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">项目管理</h4>
                    <p className="text-sm text-gray-600">负责过9个公司项目，具备完整项目管理经验</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">持续学习</h4>
                    <p className="text-sm text-gray-600">积极学习网课，不断提升专业技能</p>
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
                    <h4 className="text-lg font-semibold text-gray-800">产品经理</h4>
                    <p className="text-blue-600 mb-2">2019 - 至今</p>
                    <p className="text-gray-600">
                      负责过9个公司项目的产品规划与管理，从需求分析到产品上线全流程把控。
                      擅长将AI技术融入产品设计，提升用户体验和产品竞争力。
                    </p>
                  </div>
                </div>
                
                <div className="relative pl-8 pb-6 border-l-2 border-blue-200">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">AI探索与实践</h4>
                    <p className="text-blue-600 mb-2">2022 - 至今</p>
                    <p className="text-gray-600">
                      深度探索AI技术应用，熟练掌握多种AIGC工具。
                      在图像生成（SD、MJ、Recraft）、视频生成（可灵、即梦）、
                      音乐创作（Suno AI）等领域积累丰富实践经验。
                    </p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">教育背景</h4>
                    <p className="text-blue-600 mb-2">计算机科学与技术专业</p>
                    <p className="text-gray-600">
                      系统学习计算机基础知识，具备C语言证书。
                      在职期间持续学习，通过网课获得多项AI相关认证。
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
                  <Target size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">用户体验至上</h4>
                  <p className="text-gray-600 text-sm">
                    始终将用户需求放在首位，打造简洁、高效、易用的产品
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Zap size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">AI赋能产品</h4>
                  <p className="text-gray-600 text-sm">
                    积极探索AI技术在产品中的应用，提升产品智能化水平
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
                    保持学习热情，通过网课和实践不断提升专业能力
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
                <h4 className="font-semibold text-blue-800 mb-2">产品作品集</h4>
                <p className="text-sm text-gray-600 mb-3">
                  产品经理工作经历与项目案例展示
                </p>
                <a href="https://tp9aaq8t4g.feishu.cn/docx/HET7dNm2aofdyMxMMgfcFGBUnke" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                  查看作品集 <ExternalLink size={14} />
                </a>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">AI工具探索</h4>
                <p className="text-sm text-gray-600 mb-3">
                  AIGC创作实践与AI工具使用经验分享
                </p>
                <a href="https://github.com/Ylsssq926" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                  GitHub主页 <ExternalLink size={14} />
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
