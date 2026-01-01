import { useState, useEffect } from 'react'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(4)

  // Using images from the reference site
  const teamPhotos = [
    {
      id: 1,
      url: `${import.meta.env.BASE_URL}1.jpg`,
      caption: '球員照片 1 吳劉品希',
    },
    {
      id: 2,
      url: `${import.meta.env.BASE_URL}2.jpg`,
      caption: '球員照片 2 莊元赫',
    },
    {
      id: 3,
      url: `${import.meta.env.BASE_URL}3.jpg`,
      caption: '球員照片 3 楊凱宸',
    },
    {
      id: 4,
      url: `${import.meta.env.BASE_URL}5.jpg`,
      caption: '球員照片 5 李亞宸',
    },
    {
      id: 5,
      url: `${import.meta.env.BASE_URL}9.jpg`,
      caption: '球員照片 9 陳承瑀',
    },
    {
      id: 6,
      url: `${import.meta.env.BASE_URL}10.jpg`,
      caption: '球員照片 10 王承翰',
    },
    {
      id: 7,
      url: `${import.meta.env.BASE_URL}12.jpg`,
      caption: '球員照片 12 陳冠衡',
    },
    {
      id: 8,
      url: `${import.meta.env.BASE_URL}13.jpg`,
      caption: '球員照片 13 張宸誌',
    },
    {
      id: 9,
      url: `${import.meta.env.BASE_URL}14.jpg`,
      caption: '球員照片 14 黃于廷',
    },
    {
      id: 10,
      url: `${import.meta.env.BASE_URL}15.jpg`,
      caption: '球員照片 15 宋奕龍',
    }, 
    {
      id: 11,
      url: `${import.meta.env.BASE_URL}17.jpg`,
      caption: '球員照片 17 黃冠睿',
    },
    {
      id: 12,
      url: `${import.meta.env.BASE_URL}18.jpg`,
      caption: '球員照片 18 鄭仲甫',
    }, 
    {
      id: 13,
      url: `${import.meta.env.BASE_URL}21.jpg`,
      caption: '球員照片 21 簡邵謙',
    },
    {
      id: 14,
      url: `${import.meta.env.BASE_URL}27.jpg`,
      caption: '球員照片 27 張順翔',
    },
    {
      id: 15,
      url: `${import.meta.env.BASE_URL}31.jpg`,
      caption: '球員照片 31 陳方鍇',
    },
    {
      id: 16,
      url: `${import.meta.env.BASE_URL}36.jpg`,
      caption: '球員照片 36 莊元嘉',
    }, 
    {
      id: 17,
      url: `${import.meta.env.BASE_URL}39.jpg`,
      caption: '球員照片 39 王威皓',
    },                    
    {
      id: 18,
      url: `${import.meta.env.BASE_URL}55.jpg`,
      caption: '球員照片 55 梁晨睿',
    },
    {
      id: 19,
      url: `${import.meta.env.BASE_URL}77.jpg`,
      caption: '球員照片 77 鐘季鋼',
    },
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamPhotos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [teamPhotos.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamPhotos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamPhotos.length) % teamPhotos.length)
  }

  const getSlideClass = (index: number) => {
    const diff = (index - currentSlide + teamPhotos.length) % teamPhotos.length
    const reverseDiff = (currentSlide - index + teamPhotos.length) % teamPhotos.length

    if (diff === 0) return 'active'
    if (diff === 1 || reverseDiff === teamPhotos.length - 1) return 'next'
    if (reverseDiff === 1 || diff === teamPhotos.length - 1) return 'prev'
    if (diff <= 3) return 'far-next'
    return 'far-prev'
  }

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="bg-gradient-to-br from-[#802135] via-[#802135] to-[#ffb81c] text-white lg:min-h-screen flex items-center overflow-hidden py-12 lg:py-0">
        <div className="container mx-auto px-4 lg:-mt-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-48 items-center">
            {/* Hero Content - Top on mobile/tablet, Left on desktop */}
            <div className="flex-1 flex flex-col items-center justify-center z-10 w-full lg:w-auto">
              <div className="flex justify-center mb-6 md:mb-8">
                <img src={`${import.meta.env.BASE_URL}kf-spirit.png`} alt="光復精神" className="w-80 sm:w-96 lg:w-[30rem] h-auto object-contain" />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight text-center">
                第十屆光復盃籃球邀請賽
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 md:mb-8 text-center">
                青春無畏，熱血拚搏，讓籃球夢想在這裡起飛
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4 md:mb-6">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>2026年1月16日-18日</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>光復國小活動中心</span>
                </div>
              </div>
            </div>

            {/* Photo Carousel - Bottom on mobile/tablet, Right on desktop */}
            <div className="flex-1 relative w-full flex flex-col justify-center items-center z-10">
              <div className="relative w-full max-w-[400px] lg:max-w-[500px] h-[500px] sm:h-[700px] lg:h-[600px] flex items-center justify-center" style={{ perspective: '1000px' }}>
                <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                  {teamPhotos.map((photo, index) => {
                    const slideClass = getSlideClass(index)
                    return (
                      <div
                        key={photo.id}
                        className={`absolute w-[240px] h-[550px] sm:w-[280px] sm:h-[640px] lg:w-[350px] lg:h-[800px] rounded-2xl transition-all duration-500 ease-in-out cursor-pointer shadow-2xl ${
                          slideClass === 'active'
                            ? 'z-30 opacity-100 scale-110'
                            : slideClass === 'prev'
                            ? 'z-20 opacity-70 scale-90'
                            : slideClass === 'next'
                            ? 'z-20 opacity-70 scale-90'
                            : slideClass === 'far-prev'
                            ? 'z-10 opacity-40 scale-80'
                            : 'z-10 opacity-40 scale-80'
                        }`}
                        style={{
                          transform: slideClass === 'active'
                            ? 'translateZ(0) rotateY(0deg)'
                            : slideClass === 'prev'
                            ? 'translateX(-150px) translateZ(-50px) rotateY(35deg)'
                            : slideClass === 'next'
                            ? 'translateX(150px) translateZ(-50px) rotateY(-35deg)'
                            : slideClass === 'far-prev'
                            ? 'translateX(-250px) translateZ(-100px) rotateY(45deg)'
                            : 'translateX(250px) translateZ(-100px) rotateY(-45deg)'
                        }}
                      >
                        <img
                          src={photo.url}
                          alt={photo.caption}
                          className="w-full h-full rounded-2xl object-cover pointer-events-none"
                        />
                      </div>
                    )
                  })}
                </div>

                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 sm:-left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-40 bg-[#802135]/80 hover:bg-[#802135] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-colors shadow-lg flex items-center justify-center text-2xl sm:text-3xl"
                  aria-label="Previous"
                >
                  ‹
                </button>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="absolute right-0 sm:-right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-40 bg-[#802135]/80 hover:bg-[#802135] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-colors shadow-lg flex items-center justify-center text-2xl sm:text-3xl"
                  aria-label="Next"
                >
                  ›
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {teamPhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-white w-6'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">最新消息</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-sm text-gray-500 mb-2">2026-01-01</div>
            <h3 className="text-xl font-semibold mb-3 text-primary">賽事報名開始</h3>
            <p className="text-gray-700">
              2026年度第十屆光復盃籃球邀請賽報名正式開放，歡迎各校踴躍參加！
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-sm text-gray-500 mb-2">2025-12-29</div>
            <h3 className="text-xl font-semibold mb-3 text-primary">賽事規則公告</h3>
            <p className="text-gray-700">
              本屆賽事規則已更新，請各參賽隊伍詳閱賽事資訊。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-sm text-gray-500 mb-2">2025-12-20</div>
            <h3 className="text-xl font-semibold mb-3 text-primary">場地確認完成</h3>
            <p className="text-gray-700">
              比賽場地已確認為光復國小活動中心，歡迎各位蒞臨觀賽。
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-center mb-2">
                <svg className="w-10 h-10 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary mb-1">3</div>
              <div className="text-gray-600">參賽組別</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-center mb-2">
                <svg className="w-10 h-10 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary mb-1">15</div>
              <div className="text-gray-600">參賽學校</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-center mb-2">
                <svg className="w-10 h-10 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary mb-1">3</div>
              <div className="text-gray-600">比賽天數</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-center mb-2">
                <svg className="w-10 h-10 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary mb-1">15</div>
              <div className="text-gray-600">場次賽事</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">特別感謝</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-64 h-48 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-default"
          >
            <img
              src={`${import.meta.env.BASE_URL}sponsor-logo-annray-capital.png`}
              alt="贊助廠商 安睿資本"
              className="max-w-full max-h-full object-contain"
            />
          </a>
          <a
            href="https://www.hsuslegend.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 h-48 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img
              src={`${import.meta.env.BASE_URL}sponsor-logo-hsus-legend.png`}
              alt="贊助廠商 潭酵天地"
              className="max-w-full max-h-full object-contain"
            />
          </a>          
          <a
            href="https://www.dlivetw.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 h-48 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img
              src={`${import.meta.env.BASE_URL}sponsor-logo-dlive.png`}
              alt="贊助廠商 DLIVE"
              className="max-w-full max-h-full object-contain"
            />
          </a>          
          <a
            href="https://www.facebook.com/tec999/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 h-48 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img
              src={`${import.meta.env.BASE_URL}sponsor-logo-tec.png`}
              alt="贊助廠商 TEC-Technical Equipment Center"
              className="max-w-full max-h-full object-contain"
            />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
