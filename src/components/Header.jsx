import haicklogo from "../assets/haick-logo.png"
import soailogo from "../assets/soai-logo.png"

const Header = () => {
  return (
    <div className="flex justify-between container w-screen mx-auto px-8 py-4">
      <img src={soailogo} className="sm:h-[50px] h-[20px]" />
      <img src={haicklogo} className="sm:h-[56px] h-[22px]" />
    </div>
  )
}

export default Header
