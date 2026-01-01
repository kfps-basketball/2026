function EventInfo() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">賽事資訊</h1>

      {/* Tournament Overview */}
      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">賽事概述</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div>
              <strong>比賽時間：</strong>2026年1月16日（五）至 1月18日（日）
            </div>
          </div>
          <div className="flex items-start">
            <svg className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <strong>比賽地點：</strong>光復國小活動中心
            </div>
          </div>
          <div className="flex items-start">
            <svg className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <div>
              <strong>參賽組別：</strong>四年級組、五年級組、六年級組
            </div>
          </div>
        </div>
      </section>

      {/* Competition Format */}
      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">賽制說明</h2>
        <div className="prose max-w-none text-gray-700">
          <ul className="space-y-2">
            <li>採用國際籃球規則</li>
            <li>分組循環賽後進行淘汰賽</li>
            <li>每場比賽4節，每節8分鐘</li>
            <li>節間休息2分鐘，半場休息5分鐘</li>
          </ul>
        </div>
      </section>

      {/* Documents Download */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">相關文件下載</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="#"
            className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-red-50 transition-colors"
          >
            <svg className="w-10 h-10 text-primary mr-4 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div>
              <div className="font-semibold text-primary">賽事秩序冊</div>
              <div className="text-sm text-gray-500">PDF 格式</div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-red-50 transition-colors"
          >
            <svg className="w-10 h-10 text-primary mr-4 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <div>
              <div className="font-semibold text-primary">比賽規則</div>
              <div className="text-sm text-gray-500">PDF 格式</div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-red-50 transition-colors"
          >
            <svg className="w-10 h-10 text-primary mr-4 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <div>
              <div className="font-semibold text-primary">對戰表</div>
              <div className="text-sm text-gray-500">PDF 格式</div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-red-50 transition-colors"
          >
            <svg className="w-10 h-10 text-primary mr-4 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <div>
              <div className="font-semibold text-primary">報名表</div>
              <div className="text-sm text-gray-500">PDF 格式</div>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default EventInfo
