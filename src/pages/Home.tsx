import React from 'react';
import { useNavigate } from 'react-router-dom';

const auditoriums = [
  {
    id: 1,
    name: '求实报告厅',
    constructionUnit: '江汉石油学院',
    designUnit: '江汉石油学院设计研究院',
    constructionCompany: '湖南湘阴县建筑安装工程公司',
    startDate: '1996年9月',
    completionDate: '1997年1月',
    meaning: '名称“求实”源于“求实、进取、创业、报国”之校园精神，旨在倡导师生恪守实事求是、诚实守信的品格。'
  },
  {
    id: 2,
    name: '石油报告厅',
    constructionUnit: '江汉石油学院',
    designUnit: '江汉石油学院设计研究院',
    constructionCompany: '江都建安总承包公司荆沙工程处',
    startDate: '1995年3月',
    completionDate: '1996年11月',
    meaning: '报告厅内描绘古代石油开采工艺的主题壁画以及报告厅外保留的“江汉石油学院学术报告厅”旧址墙体，是我校石油教育发展的历史见证。以“石油”命名，不仅是对石油学科办学历史的致敬，更承载对“学石油、爱石油、献身石油事业”核心精神的接续传承。'
  },
  {
    id: 3,
    name: '七里湖报告厅',
    constructionUnit: '长江大学',
    designUnit: '荆州市城市规划设计研究院',
    constructionCompany: '中恒建设集团有限公司',
    startDate: '2015年7月',
    completionDate: '2016年12月',
    meaning: '“七里湖”之名，旨在纪念我校农学教育的历史起点——湖北沙洋七里湖，并致敬在此凝练的“七里湖精神”。以此命名，意在激励师生铭记办学初心，担当强农兴农的时代使命。'
  },
  {
    id: 4,
    name: '隆平报告厅',
    constructionUnit: '长江大学',
    designUnit: '荆州市城市规划设计研究院',
    constructionCompany: '中恒建设集团有限公司',
    startDate: '2015年7月',
    completionDate: '2016年12月',
    meaning: '“隆平”之名，旨在深切缅怀我校双聘院士、“杂交水稻之父”袁隆平先生。2015年，先生亲临学校讲学并受聘，曾以“长大学农大有作为”勉励师生。此命名既寄追思之情，亦盼传承其躬耕为民、笃行育人的崇高精神。'
  },
  {
    id: 5,
    name: '文波报告厅',
    constructionUnit: '',
    designUnit: '',
    constructionCompany: '',
    startDate: '2010年11月',
    completionDate: '2011年1月',
    meaning: '“文波”之名，旨在纪念与致敬我校石油教育奠基人翁文波院士。东校区长江大道中央立有翁院士铜像，武汉校区此厅亦以“文波”命名，遥相呼应，共同寄托对先生学术风范与奠基之功的深切缅怀。'
  },
  {
    id: 6,
    name: '启航宣讲厅',
    constructionUnit: '江汉石油学院',
    designUnit: '中南设计院',
    constructionCompany: '湖北省第三建筑公司',
    startDate: '1990年12月',
    completionDate: '1991年7月',
    meaning: '该厅是我校学子接受职业规划教育、参与招聘宣讲的重要场所。命名为“启航”，寓意学子由此扬帆，逐梦职场，开启人生新篇章。'
  },
  {
    id: 7,
    name: '薪火多功能厅',
    constructionUnit: '',
    designUnit: '',
    constructionCompany: '',
    startDate: '2020年12月',
    completionDate: '2021年11月',
    meaning: '长江大学的办学历史，是一部与国家命运同频共振、与民族复兴同向同行的奋斗史。“薪火”典出“薪尽火传”，喻指学校精神、知识与文化如永恒之火，由一代代师生接力传递、永续延绵。这既是对学校“使命文化”的生动诠释，亦是对其传承不辍的庄重承诺。'
  }
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
          className="w-full h-full object-cover object-[85%_top]"
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