function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">關於我們</h3>
            <p className="text-gray-300">
              第十屆光復盃籃球邀請賽致力於推廣少年籃球運動，點燃籃球熱情，傳承運動文化。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">快速連結</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">賽事規則</a></li>
              <li><a href="#" className="hover:text-white">賽程表</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">聯絡資訊</h3>
            <ul className="space-y-2 text-gray-300">
              <li>請透過Line聯繫教練</li>
              <li>110 台北市信義區光復南路271號</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2026 第十屆光復盃籃球邀請賽 All Rights Reserved.</p>
          <p className="mt-2">Made with Peace ✌️ and Love ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
