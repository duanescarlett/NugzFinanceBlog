import Image from "next/image"

const Logo = (props: any) => {
  const { renderDefault, title } = props

  return (
    <div className="flex items-center space-x-2">
      <Image 
        className="rounted-full object-cover"
        height={50}
        width={50}
        src="/nugzLogo.svg"
        alt="logo"
      />      
      <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo
