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
              <img src="/YabgtzeuAItro/images/logo/Yangtzeu.png" alt="长江大学校徽" className="h-full w-auto object-contain" />
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
          
          {/* Start Date */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#0C3388] mb-2">开工时间</h3>
            <p className="text-gray-700 text-lg">{auditorium.startDate}</p>
          </div>

          {/* Completion Date */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#0C3388] mb-2">竣工时间</h3>
            <p className="text-gray-700 text-lg">{auditorium.completionDate}</p>
          </div>

          {/* Construction Unit */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#0C3388] mb-2">建设单位</h3>
            <p className="text-gray-700 text-lg">{auditorium.constructionUnit}</p>
          </div>

          {/* Design Unit */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#0C3388] mb-2">设计单位</h3>
            <p className="text-gray-700 text-lg">{auditorium.designUnit}</p>
          </div>

          {/* Construction Company */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#0C3388] mb-2">施工单位</h3>
            <p className="text-gray-700 text-lg">{auditorium.constructionCompany}</p>
          </div>

          {/* Meaning */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#0C3388] mb-2">名称释义</h3>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              {auditorium.meaning}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditoriumDetail;