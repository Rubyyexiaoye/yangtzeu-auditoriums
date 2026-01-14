import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuditoriumDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { auditorium } = location.state as { auditorium: any };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-12 flex items-center justify-center">
              <img src="/images/logo/Yangtzeu.png" alt="长江大学校徽" className="h-full w-auto object-contain" />
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            返回首页
          </button>
        </div>
      </header>

      {/* Banner Image - Placeholder Only */}
      <div className="h-64 bg-gradient-to-r from-blue-400 to-blue-600"></div>

      {/* Content - Core Information Only */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Auditorium Name - Centered at Top */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{auditorium.name}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Start Time Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">开工时间</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {auditorium.name}于1953年正式开工建设，标志着长江大学基础设施建设的重要里程碑。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">English Version</h4>
              <p className="text-gray-600 leading-relaxed">
                {auditorium.name} officially began construction in 1953, marking an important milestone in the infrastructure development of Yangtze University.
              </p>
            </div>
          </div>

          {/* Completion Time Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">竣工时间</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              经过精心规划和建设，{auditorium.name}于1954年顺利竣工并投入使用，为学校的学术交流活动提供了重要场所。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">English Version</h4>
              <p className="text-gray-600 leading-relaxed">
                After careful planning and construction, {auditorium.name} was successfully completed and put into use in 1954, providing an important venue for academic exchange activities at the university.
              </p>
            </div>
          </div>

          {/* Main Events Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">主要事宜</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {auditorium.name}作为长江大学重要的学术交流场所，承办了众多重要的学术会议、讲座和文化活动，为师生提供了优质的学习和交流环境，见证了学校发展的重要历史时刻。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">English Version</h4>
              <p className="text-gray-600 leading-relaxed">
                As an important academic exchange venue of Yangtze University, {auditorium.name} has hosted numerous important academic conferences, lectures, and cultural events, providing high-quality learning and exchange environment for teachers and students, and witnessing important historical moments in the university's development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditoriumDetail;