import Logo from "@/assets/Logo.png"



const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
       <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img alt="logo" src={Logo}/>
            <p>Transform your fitness journey with Evogym, where passion meets performance. Our state-of-the-art facilities, expert trainers, and diverse classes empower you to achieve your fitness goals. Join us and experience a community dedicated to your well-being.</p>
            <p className="my-5">&copy; Evogym All rights Reserved.</p>
        </div>


        <div className="mt-16 basis-1/4 md:mt-0">
         <h4 className="font-bold">Links</h4>
         <p className="mt-5 hover:text-white cursor-pointer">Explore our classes to kick-start your fitness journey.</p>
         <p className="mt-5 hover:text-white cursor-pointer">Learn about our trainers and their expertise.</p>
        <p className="mt-5 hover:text-white cursor-pointer">Check out our blog for fitness tips and inspiration.</p>
      </div>

      <div className="mt-16 basis-1/4 md:mt-0">
       <h4 className="font-bold">Contact us</h4>
       <p className="mt-5">Have questions? Reach out to us at info@evogym.com.</p>
      <p className="mt-5">Visit our location at 123 Fitness Street, City.</p>
    </div>
       </div>
    </footer>
  )
}

export default Footer