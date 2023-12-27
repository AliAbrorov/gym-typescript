import { SelectedPage } from '@/shared/types'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
// import { ClassType } from 'react'
import Class from './Class'


const classes = [
    {
        name: "Weight Training Classes",
        description:"Build strength, sculpt your body, and achieve your fitness goals with our dynamic Weight Training Classes. Led by certified trainers, these sessions are designed to challenge and empower you. Whether you're a beginner or an experienced lifter, our classes offer personalized guidance, a supportive community, and a path to transform your physique. Elevate your workout routine and embark on a journey to a stronger, healthier you.",
        image: image1
    },
    {
        name: "Yoga Classes",
        description:"Immerse yourself in the serenity of our Yoga Classes, where mind, body, and spirit unite. Led by experienced instructors, these classes offer a holistic approach to wellness. Whether you're a beginner or an advanced practitioner, discover the transformative power of yoga poses, breathwork, and meditation. Join our community to enhance flexibility, find inner peace, and embark on a journey of self-discovery.",
        image: image2
    },
    {
        name: "Fitness Classes",
        description:"Experience a diverse range of Fitness Classes tailored to suit all levels and interests. Our classes are designed to make fitness enjoyable and effective. Join our community-led sessions where you can engage in dynamic workouts, challenge yourself, and have fun. Whether you're into cardio, strength training, or a mix of both, our Fitness Classes cater to your unique fitness journey.",
        image: image3
    },
    {
        name: "Training Classes",
        description:"Transform your fitness journey with our dynamic Training Classes. Led by certified trainers, these sessions are crafted to enhance your skills and elevate your performance. Whether you're a novice or an experienced enthusiast, our comprehensive training programs cover a range of disciplines. Join our community and embark on a path of continuous improvement, pushing your limits and achieving new milestones.",
        image: image4
    },
    {
        name: "Adventure Classes",
        description: "Embark on thrilling adventures with our Adventure Classes! Dive into an adrenaline-packed journey led by experienced guides. Whether it's rock climbing, outdoor expeditions, or water sports, our classes offer a perfect blend of excitement and skill-building. Join our community of adventure enthusiasts and discover new challenges, breathtaking landscapes, and the joy of pushing your boundaries.",
        image: image5
    },
    {
        name: "Ab Core Classes",
        description: "Define and strengthen your core with our Ab Core Classes. Led by expert trainers, these classes focus on targeted exercises to sculpt your abs and improve overall core stability. Whether you're aiming for a six-pack or simply want to enhance your core strength, our classes provide a mix of challenging workouts and personalized guidance. Join us to achieve a strong, toned midsection and elevate your fitness journey.",
        image: image6
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
     <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
      <motion.div className='mx-auto w-5/6' 
      initial="hidden" whileInView="visible" 
      viewport={{once:true, amount: 0.5}} 
      transition={{duration: 0.5}} 
      variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0},
                }}>

 <div className='md:w-3/5'>
    <HText>OUR CLASSES</HText>

    <p className='py-5'>
    Elevate your fitness journey with our diverse range of classes tailored to meet your needs. Whether you're a beginner or an experienced enthusiast, our expert instructors are here to guide you. Join us in a supportive community where you can challenge   yourself, have fun, and achieve your fitness goals.
    </p>
      </div>
      </motion.div>

      <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
         <ul className='w-[2800px] whitespace-nowrap'>
            {classes.map((item, index)=>(
                <Class key={`${item.name}=${index}`} name={item.name} description={item.description} image={item.image}/>
            ))}
         </ul>
      </div>
    </motion.div>
    </section>
  )
}

export default OurClasses