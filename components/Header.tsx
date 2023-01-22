import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2`">
        <Link href="/" className="flex">
          <Image
            className="rounded-full"
            src="/nugzLogo.svg"
            width={50}
            height={50}
            alt="logo"
          />
          <h1 className="mt-1">Nugz Finance</h1>
        </Link>
      </div>
      <div>
        <Link href="https://mintymarket.io" target="_blank" className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">
          Create your NFT collection at MintyMarket.io          
        </Link>
      </div>
    </header>
  )
}

export default Header
