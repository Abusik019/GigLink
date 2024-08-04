import { HomeTopSide } from '../../components/HomeTopSide'
import HomeDownSide from '../../components/HomeDownSide/index';
import { useState } from 'react';

function Home() {
  const [openLogin, setOpenLogin] = useState(false)
  return (
    <div>
      <HomeTopSide openLogin={openLogin} setOpenLogin={setOpenLogin} />
      <HomeDownSide setOpenLogin={setOpenLogin} />
    </div>
  )
}

export default Home