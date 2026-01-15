import React from 'react';
import { useNavigate } from 'react-router-dom';

const auditoriums = [
  { id: 1, name: '东校区报告厅', building: '教学楼A栋' },
  { id: 2, name: '西校区报告厅', building: '教学楼B栋' },
  { id: 3, name: '南校区报告厅', building: '教学楼C栋' },
  { id: 4, name: '北校区报告厅', building: '教学楼D栋' },
  { id: 5, name: '主校区报告厅', building: '综合楼' },
  { id: 6, name: '科技楼报告厅', building: '科技楼' },
  { id: 7, name: '图书馆报告厅', building: '图书馆' },
  { id: 8, name: '行政楼报告厅', building: '行政楼' },
  { id: 9, name: '实验楼报告厅', building: '实验楼' },
  { id: 10, name: '艺术楼报告厅', building: '艺术楼' },
  { id: 11, name: '体育馆报告厅', building: '体育馆' },
  { id: 12, name: '学术交流中心', building: '学术交流中心' }
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleAuditoriumClick = (auditorium: typeof auditoriums[0]) => {
    navigate(`/auditorium/${auditorium.id}`, { state: { auditorium } });
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/images/campus/campus.png" 
          alt="Campus Background" 
          className="w-full h-full object-cover object-top"
        />
        {/* Blue gradient overlay matching the reference style */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-600/70 to-cyan-400/50 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
            <div className="h-12 flex items-center justify-center">
              <img src="/images/logo/Yangtzeu.png" alt="长江大学校徽" className="h-full w-auto object-contain" />
            </div>
          </div>
        </header>

        {/* Title Section */}
        <div className="text-center py-8 sm:py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 tracking-wide text-shadow-lg">阅读建筑</h2>
          <p className="text-blue-50 text-sm sm:text-base md:text-lg opacity-100 text-shadow font-medium">点击了解各个报告厅的详细信息</p>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-300 to-cyan-300 mx-auto mt-4 sm:mt-6 rounded-full shadow-lg"></div>
        </div>

        {/* Main Content - Grid of Auditoriums */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {auditoriums.map((auditorium) => (
              <button
                key={auditorium.id}
                onClick={() => handleAuditoriumClick(auditorium)}
                className="group relative bg-white/90 backdrop-blur-md text-blue-900 font-semibold py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 border border-white/40 hover:border-white/60 overflow-hidden active:scale-95"
              >
                <div className="relative z-10 text-center">
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-2 group-hover:text-blue-700 transition-colors duration-300 leading-tight">{auditorium.name}</div>
                  <div className="w-3 sm:w-5 md:w-8 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full group-hover:w-5 sm:group-hover:w-8 md:group-hover:w-12 transition-all duration-300"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-8 sm:w-12 md:w-20 h-8 sm:h-12 md:h-20 bg-gradient-to-bl from-blue-300/20 to-transparent rounded-full transform translate-x-2 sm:translate-x-4 md:translate-x-10 -translate-y-2 sm:-translate-y-4 md:-translate-y-10 group-hover:scale-110 sm:group-hover:scale-125 md:group-hover:scale-150 transition-transform duration-500"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Background */}
        <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent opacity-60 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Home;