import { PageConfig } from '@/config/pageConfig';

const Portfolio: React.FC = () => {
  const profileImageUrl =
    'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/440470900_1609110776545151_1672244964000869568_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=yacdF3W3YzIQ7kNvgGgNHTJ&_nc_ht=scontent.fdad3-5.fna&_nc_gid=AcvXBcmswO8NOs0R8Z4O2xB&oh=00_AYDda_G4FT-_TUYKoKas3gkS3HanV31I3oYNGGt30Llo9w&oe=66F0B041';

  return (
    <div className="bg-blue-900 to-white min-h-screen text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-cyan-400 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-cyan-400 rounded-full opacity-30"></div>
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-cyan-400 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/3 left-20 w-24 h-24 bg-cyan-400 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-1 bg-cyan-400 opacity-30 transform rotate-45"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-1 bg-cyan-400 opacity-30 transform -rotate-45"></div>

      <header className="flex flex-col sm:flex-row justify-between items-center p-4 relative z-10">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="w-10 h-10 bg-cyan-400 rounded-lg mr-2"></div>
          <span className="font-bold">NIIT CODERS</span>
        </div>
        <nav>
          <ul className="flex space-x-4 sm:space-x-6">
            <li>ABOUT</li>
            <li>PORTFOLIO</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header>

      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4 relative z-10">
        <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-baseline">
              <span className="text-2xl md:text-3xl">Nguyễn Lê Đình</span>
              <span className="text-4xl md:text-6xl font-bold md:ml-2">-Tiên</span>
            </div>
            <div className="flex justify-center md:justify-start space-x-2">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="w-2 h-2 bg-white rounded-full"></div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-black rounded-full overflow-hidden">
              <img
                src={profileImageUrl}
                alt="Profile"
                className="w-full h-full object-cover scale-110 transform origin-center"
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex flex-col md:flex-row items-center">
              <span className="text-4xl md:text-6xl font-bold">WEB</span>
              <span className="text-2xl md:text-3xl md:ml-2">DEVELOPER</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default () =>
  PageConfig({
    Page: Portfolio,
    title: 'My Portfolio',
  });
