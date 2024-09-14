import './App.css';
import Hamster from './icons/Hamster';
import { useState } from 'react';
import { binanceLogo, dollar, dollarCoin, main, mainCharacter, Rabi } from './images'; // Убедитесь, что эти пути верны
import Mine from './icons/Mine';
import Friends from './icons/Friends';
import Coins from './icons/Coins';

function App() {
  
  const levelNames = [
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
    "Epic",
    "Legendary",
    "Master",
    "Grandmaster",
    "Lord",
  ];

  const levelMinPoints = [
    0, 
    5000, 
    25000, 
    100000, 
    1000000, 
    2000000, 
    10000000, 
    50000000, 
    100000000, 
    1000000000 
  ];

  const [levelIndex, setLevelIndex] = useState(6);
  const [points, setPoints] = useState(22749365);

  const pointsToAdd = 11;
  const profitPerHour = 126420;
  
  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress = ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  const formatProfitPerHour = (profit: number) => {
    if(profit >= 1000000000) return `${(profit / 1000000000).toFixed(2)}B`;
    if(profit >= 1000000) return `${(profit / 1000000).toFixed(2)}M`;
    if(profit >= 1000) return `${(profit / 1000).toFixed(2)}K`;
    return `+${profit}`;
  };
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number; }[]>([]);
const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY = rect.top - rect.height / 2;
  card.style.transform = `perspective(1000px) rotateX(${y / 10}deg) rotateY(${x / 10}deg)`;
  setTimeout(() => {
    card.style.transform = '';
  }, 100);

  setPoints(points + pointsToAdd);
  setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY}]);
};

  return (
    <div className="bg-black flex justify-center">
      <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-10">
          <div className="flex items-center space-x-2 pt-4">
            <div className="p-1 rounded-lg bg-[#1d2025]">
              <Hamster size={24} className="text-[#d4d4d4]" />
            </div>
            <div>
              <p className="text-sm">Traft (CEO)</p>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-4 mt-1">
            <div className="flex items-center w-1/3">
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="text-sm">{levelNames[levelIndex]}</p>
                  <p className="text-sm">{levelIndex + 1}
                    <span className="text-[#95908a]">/ {levelNames.length}</span>
                  </p>
                </div>
                <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
                  <div className="progress-gradient h-2 rounded-full" style={{ width: `${calculateProgress()}%` }} />
                </div>
              </div>
            </div>
            <div className="flex items-center w-2/3 border-2 border-[#43433b] 
            rounded-full px-4 py-[2px] bg-[#43433b]/[0.6] max-w-64">
              <img src={binanceLogo} alt="Exchange" className="w-8 h-8"/>
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center space-x-1">
                  <img src={dollar} alt="DollarCoin" className="w-[40px] h-[40px]"/>
                  <p className="text-sm">{formatProfitPerHour(profitPerHour)}</p>
            
                </div>
              </div>
              
            </div>
          </div>

        </div>
        
        <div className = "flex-grow mt-4 bg-[#003459] rounded-t-[48px] relative top-glow z-0">
          <div className = "absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]">
            
            <div className = "px-4 mt-6 flex justify-between gap-2">

            </div>
            <div className = "px-4 mt-4 flex justify-center">
              <div className = "px-4 py-2 flex items-center space-x-2">
                <img src = {Rabi} alt = "dollarCoin" className = "w-15 h-10"/>
                <p className="text-4xl text-white">{points.toLocaleString()}
                
              </p>
          </div>
            </div>
            <div className = "px-4 mt-4 flex justify-center">
              <div 
              className = "w-80 h-80 p-4 rounded-full circle-outer"
              onClick={handleCardClick}
              >
                <div className = "w-full h-full rounded-full circle-inner">
                  <img src = {main} alt = "mainCharacter" className = "w-full h-full"/>
                  </div>
                  </div>
              </div>

            </div>
          </div>
      </div>
      <div className = "fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl test-xs">
        <div className = "text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl">
        <img src = {binanceLogo} alt = "Exchange" className = "w-8 h-8 mx-auto"/>
        <p className = "text-sm">Exchange</p>
        </div>
        <div className = "text-center text-[#85827d] w-1/5">
        <Mine className = "w-8 h-8 mx-auto"/>
        <p className = "mt-1">Mine</p>
        </div>
        <div className = "text-center text-[#85827d] w-1/5">
        <Friends className = "w-8 h-8 mx-auto"/>
        <p className = "mt-1">Friends</p>
        </div>
        <div className = "text-center text-[#85827d] w-1/5">
        <Coins className = "w-8 h-8 mx-auto"/>
        <p className = "mt-1">Earn</p>
        </div>
        <div className = "text-center text-[#85827d] w-1/5">
        <img src ={Rabi} alt = "Airdrop" className='w-10 h-100 mx-auto'/>
        <p className = "mt-1">Airdrop</p>
        </div>
      </div>
     
      {clicks.map((click) => (
  <div
    key={click.id}
    className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
    style={{
      top: `${click.y - 42}px`,
    }}
    onAnimationEnd={(e) => {
      // Add your logic here
      console.log(`Animation ended for click with id ${click.id}`);
    }} // Call the function here
  >
    {/* Your JSX content here */}
  </div>
))}
    </div>
  );
}

export default App;
