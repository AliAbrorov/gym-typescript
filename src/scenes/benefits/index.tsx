import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Immerse yourself in a world of innovation with our state-of-the-art facilities. Our modern spaces are designed to elevate your experience, providing a dynamic environment where you can thrive. From cutting-edge equipment to thoughtfully crafted surroundings, we've created a space that inspires excellence and fosters a sense of community."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Explore a rich variety of classes designed to meet your unique interests and goals. From fitness and wellness to creative arts and professional development, our diverse selection ensures there's something for everyone. Embark on a journey of learning and self-discovery with our extensive range of courses."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Experts and Pro Trainers",
        description: "Learn from the best with our team of experts and professional trainers. Our instructors bring a wealth of knowledge and real-world experience to guide you through engaging and impactful learning journeys. Whether you're a beginner or seeking advanced skills, our dedicated experts are here to support your growth and help you achieve your goals."
    }

]


const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}


type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 ">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>

            {/* HEADER */}
            <motion.div className="md:my-5 md:w-3/5" 
            initial="hidden" 
            whileInView="visible" viewport={{once:true, amount: 0.5}} transition={{delay:0.2,duration: 0.5}} variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0},
                }}>
                <HText>MORE THAN JUST GYM.</HText>
                <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes to
                get you to your ultimate fitness goals with ease. We provide true
                care into each and every member.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div className="md:flex items-center justify-between gap-8 mt-8" initial="hidden" whileInView={"visible"} viewport={{once:true, amount: 0.5}} variants={container}
            >
           
           {benefits.map((benefit: BenefitType)=>(
            <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage}/>
           ))}

            </motion.div>

            {/* Graphics and description */}
            <div className="mt-16 items-center justify-between gap-20 md:flex md:mt-28 ">


                {/* Graphic */}
                <img className="mx-auto" alt="benefit-page-graphic" src={BenefitsPageGraphic}/>


                {/* Description */}
                <div>
                    {/* Title */}
                    <div className="relative">
                       <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                       <motion.div
                       initial="hidden" 
                       whileInView="visible" 
                       viewport={{once:true, amount: 0.5}} 
                       transition={{duration: 0.5}} 
                       variants={{
                               hidden: {opacity:0, x:50},
                               visible: {opacity:1, x:0},
                           }}
                       >
                         <HText>MILLIONS OF HAPPY MEMBERS GETTING
                            <span className="text-primary-500"> FIT.</span>
                         </HText>
                      </motion.div>
                       </div>

                    </div>

                    {/* Description */}
                    <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{once:true, amount: 0.5}} 
                    transition={{delay:0.2,duration: 0.5}} 
                    variants={{
                            hidden: {opacity:0, x:50},
                            visible: {opacity:1, x:0},
                        }}>
                        <p className="my-5"> Join our community of fitness enthusiasts and embark on a transformative journey towards a healthier lifestyle. Experience the support and motivation you need to reach your fitness goals. We're here to inspire and guide you every step of the way.</p>
                        <p className="mb-5"> Discover a variety of workouts, personalized plans, and a welcoming atmosphere. Whether you're a fitness novice or a seasoned pro, our platform is designed to meet you where you are and help you thrive on your fitness path.</p>
                    </motion.div>

                    {/* Button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join now
                            </ActionButton>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits