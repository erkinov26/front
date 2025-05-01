'use client';
import DataFetchingComponent from "@/components/custom/data-fetching";
import Image from "next/image";
import rector from '@/public/Sh-Mustafakulov.png';
import prize from '@/public/prize.svg';
import date from '@/public/date.png';
import checked from '@/public/checked.svg';
import warning from '@/public/warning.svg';
import calendar from '@/public/calendar.svg';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <div className="relative w-full bg-cover min-h-screen bg-center" style={{ backgroundImage: `url('/bg-image.png')` }}>
      <div className="sm:flex sm:justify-start">
        <motion.div initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }} className="sm:ml-[6vw] sm:rounded-b-[30px] sm:w-auto sm:mx-0 w-[95%] mx-auto rounded-b-md text-gray-600 mb-[2vw] bg-white flex items-center justify-center sm:py-[0.8vw] py-[2vw] sm:px-[2vw]" style={{ boxShadow: '0px 4px 24px 0px #0000001F;' }}>
          <Image src={calendar} alt="calendar" className="inline sm:w-[2vw] w-[6vw]" />
          <span className="text-black text-[5vw] sm:text-[1.5vw] rounded-md font-bebas mx-[1vw]"> 10-11-MAY</span>
          <span className="font-poppins text-[3vw] text-[#0B4075] sm:text-[1vw]"
          >
            20:30, Onlayn, yopiq taqdimot
          </span>
        </motion.div>
      </div>
      <div className="mx-[6vw] flex sm:flex-row flex-col-reverse justify-between items-start gap-8">
        <div className="sm:w-[50%] w-full">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            className="sm:text-[2.8vw] sm:block hidden font-bold font-bebas tracking-[0px] leading-[100%] w-full">
            ABITURIENTLIKDAN <span className="text-[#0B4075]">YEVROPA DIPLOMINI</span> OLISHGACHA BARCHA QADAMLAR
          </motion.div>
          {/* Description */}
          <motion.p initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.6 }} className="text-gray-700 sm:block hidden text-[0.9vw] lg:my-[1.3vw] my-[1vw] font-poppins leading-[150%] sm:w-[70%]">
            <strong>Nordik International University</strong> arzon kontrakt evaziga chet elda o‘qish, Work & Travel dasturida qatnashish va xalqaro diplom olish imkoniyatlarini oching.
          </motion.p>
          {/* Benefits */}
          <div className="flex sm:flex-col flex-col-reverse">
            <ul className="list-none text-gray-700 text-base sm:mt-0 mt-[2vw] mb-[1.7vw]">
              <motion.li initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.9 }} className="flex items-start">
                <Image src={checked} alt="checked" className="mr-[1vw] sm:w-[1.5vw] w-[4vw]" />
                <span className="font-[550] font-poppins sm:text-[1vw] text-[3vw] ">
                  Exchange dasturlari orqali qanday qilib Amerika, Koreya, Italiya kabi davlatlarda grandda o‘qish
                </span>
              </motion.li>
              <motion.li initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 1.2 }} className="flex items-start sm:my-[1.2vw] my-[3vw]">
                <Image src={checked} alt="checked" className="mr-[1vw] sm:w-[1.5vw] w-[4vw]" />
                <span className="font-[550] font-poppins sm:text-[1vw] text-[3vw] ">
                  Work & Travel: Talabalik davrida qanday turar joy va daromad  olish imkoniyatlari
                </span>
              </motion.li>
              <motion.li initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 1.5 }} className="flex items-start">
                <Image src={checked} alt="checked" className="mr-[1vw] sm:w-[1.5vw] w-[4vw]" />
                <span className="font-[550] font-poppins sm:text-[1vw] text-[3vw] ">
                  Arzon kontrakt bilan xalqaro diplom olish yo‘llari
                </span>
              </motion.li>
            </ul>
            {/* Note Section */}
            <motion.div initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 1.8 }} className="flex items-center sm:justify-start justify-between bg-white lg:px-[1.1vw] sm:p-[1vw] p-[2vw] rounded-[50px] mb-[2vw]">
              <Image src={prize} alt="Note Icon" className="sm:w-[4.5vw] w-[15vw] mr-[1vw]" />
              <p className="text-gray-700 sm:text-[1vw] font-poppins text-[3vw] sm:ml-0 ml-[4vw]">
                Taqdimot qatnashchilari uchun grant va stipendiya imkoniyatlari haqida yopiq ma’lumotlar taqdim etiladi!
              </p>
            </motion.div>
            {/* Button */}
            <div className="-mt-[40px] sm:m-0">
              <motion.button
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 2.1 }}
                className="text-white font-semibold sm:w-auto w-full sm:py-[1vw] sm:px-[6vw] py-[5vw]  z-50 relative sm:mt-0 hover:opacity-90 transition sm:text-[2vw] text-[6vw] rounded-[100px]"
                style={{
                  background: "linear-gradient(90deg, #027D1D 0%, #31BA4F 48.08%, #007B1B 100%)"
                }}
              >
                RO‘YXATDAN O‘TISH
              </motion.button>
              {/* Warning */}
              <motion.div initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 2.7 }} className="flex items-center gap-[1.5vw] sm:my-0 my-[4vw]  sm:mt-[2vw]">
                <Image src={warning} alt="warning" className="sm:w-[1.5vw] w-[6vw]" />
                <span className="font-[550] font-poppins sm:text-[1.2vw] text-[3vw]">Faqat ro‘yxatdan o‘tganlar qatnasha oladi</span>
              </motion.div>
            </div>
          </div>



        </div>

        <div className="relative sm:flex items-start sm:w-[50%] w-full mx-auto">
          <motion.h1 initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }} className="text-center sm:hidden block text-[8vw] my-[3vw] font-bold font-bebas tracking-[0px] leading-[100%] w-full">
            ABITURIENTLIKDAN <span className="text-[#0B4075]">YEVROPA DIPLOMINI</span> OLISHGACHA BARCHA QADAMLAR
          </motion.h1>
          <motion.p initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }} className="text-gray-700 text-center sm:hidden block text-[4vw] w-full font-poppins leading-[150%]">
            <strong>Nordik International University</strong> arzon kontrakt evaziga chet elda o‘qish, Work & Travel dasturida qatnashish va xalqaro diplom olish imkoniyatlarini oching.
          </motion.p>
          <motion.div initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }} className="sm:w-[90%] w-full -mt-[3.8vw]">
            <Image src={rector} alt="Speaker Image" className="w-full" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }} className="sm:w-[50%] md:w-[40%] w-[50%] rounded-lg mt-6 absolute left-1/2 bottom-0 transform sm:-translate-x-2/3 -translate-x-1/2 -translate-y-2/3 " >
            <Image src={date} alt="Date Icon" className="w-full" />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
