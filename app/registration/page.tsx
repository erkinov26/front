'use client';

import { useState } from 'react';
import Image from 'next/image';
import people from '@/public/people.png';
import logo from '@/public/logo.svg';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

type EducationType = 'Kunduzgi' | 'Sirtqi oddiy' | 'Sirtqi stajli';

type DirectionItem = {
  name: string;
} & {
  [key in EducationType]: boolean;
};

export default function Home() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998');
  const [region, setRegion] = useState('');
  const [educationType, setEducationType] = useState<EducationType | ''>('');
  const [direction, setDirection] = useState('');
  const [localErrors, setLocalErrors] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<string | null>("");
  interface ErrorResponse {
    response: {
      data: {
        error: string;
      };
    };
  }
  const { isPending, mutate, isSuccess } = useMutation({
    mutationFn: async (data: { ism: string; telefon: string }) => {
      const res = await axios.post("https://form-api.nordicuniversity.org/registratedusers", data);
      return res.data;
    },
    onSuccess: () => {
      setFullName('')
      setPhone('+998')
      setRegion("")
      setEducationType("")
      setDirection('')
      setErrors("")
    },
    onError: (error: ErrorResponse) => {
      console.log(error);
      setErrors(error.response?.data.error);
    },
  });
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    if (!input.startsWith('+998')) {
      input = '+998';
    }
    const digitsOnly = input.replace(/\D/g, '').slice(3, 12);
    setPhone('+998' + digitsOnly);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'Ism majburiy';
    if (phone.length < 13) newErrors.phone = 'Toʻliq telefon raqam kiriting';
    if (!region) newErrors.region = 'Viloyatni tanlang';
    if (!educationType) newErrors.educationType = "Ta'lim shaklini tanlang";
    if (!direction) newErrors.direction = "Yo'nalishni tanlang";

    if (Object.keys(newErrors).length > 0) {
      setLocalErrors(newErrors);
      return;
    }

    const formData = {
      ism: fullName,
      telefon: phone,
      viloyat: region,
      talim_shakli: educationType,
      talim_yonalishi: direction,
    };
    console.log('Yuborilgan maʼlumot:', formData);
    mutate(formData)
  };

  const regions = [
    'Toshkent shahri', 'Toshkent viloyati', 'Andijon', 'Fargʻona', 'Namangan',
    'Samarqand', 'Buxoro', 'Xorazm', 'Qashqadaryo', 'Surxondaryo',
    'Jizzax', 'Sirdaryo', 'Navoiy', 'Qoraqalpogʻiston Respublikasi',
  ];

  const data: DirectionItem[] = [
    { name: 'Jahon iqtisodiyoti va xalqaro iqtisodiy munosabatlar', Kunduzgi: true, 'Sirtqi oddiy': false, 'Sirtqi stajli': false },
    { name: 'Tarix', Kunduzgi: true, 'Sirtqi oddiy': true, 'Sirtqi stajli': false },
    { name: 'Xorijiy til va adabiyoti', Kunduzgi: true, 'Sirtqi oddiy': false, 'Sirtqi stajli': false },
    { name: 'Boshlang‘ich ta‘lim', Kunduzgi: true, 'Sirtqi oddiy': false, 'Sirtqi stajli': true },
    { name: 'Maktabgacha ta‘lim', Kunduzgi: true, 'Sirtqi oddiy': false, 'Sirtqi stajli': true },
    { name: 'Psixologiya', Kunduzgi: true, 'Sirtqi oddiy': true, 'Sirtqi stajli': false },
    { name: 'Maxsus pedagogika', Kunduzgi: true, 'Sirtqi oddiy': false, 'Sirtqi stajli': false },
    { name: 'Iqtisodiyot', Kunduzgi: true, 'Sirtqi oddiy': true, 'Sirtqi stajli': false },
    { name: 'Moliya va moliyaviy texnologiyalar', Kunduzgi: true, 'Sirtqi oddiy': true, 'Sirtqi stajli': false },
    { name: 'Biznesni boshqarish', Kunduzgi: true, 'Sirtqi oddiy': false, 'Sirtqi stajli': false },
    { name: 'Sanoat muhandisligi va menejmenti', Kunduzgi: true, 'Sirtqi oddiy': false, 'Sirtqi stajli': false },
    { name: 'Kompyuter injiniringi', Kunduzgi: true, 'Sirtqi oddiy': true, 'Sirtqi stajli': false },
    { name: "Musiqa ta'limi", Kunduzgi: true, 'Sirtqi oddiy': false, 'Sirtqi stajli': true },
    { name: 'Turizm va mehmondo’stlik', Kunduzgi: true, 'Sirtqi oddiy': false, 'Sirtqi stajli': false },
    { name: 'Jurnalistika', Kunduzgi: true, 'Sirtqi oddiy': true, 'Sirtqi stajli': false },
    { name: 'Amaliy matematika', Kunduzgi: true, 'Sirtqi oddiy': false, 'Sirtqi stajli': false }
  ];

  const educationTypes: EducationType[] = ['Kunduzgi', 'Sirtqi oddiy', 'Sirtqi stajli'];

  const filteredDirections = educationType ? data.filter((item) => item[educationType]) : [];

  return (
    <div className="relative sm:flex w-full min-h-screen bg-center sm:bg-[url('/bg-reg.png')] bg-none bg-cover">
      <div className="sm:w-1/2 px-[6vw] w-full sm:min-h-screen bg-white py-[3vw]">
        <div>

          {isSuccess ? <div className='flex items-center flex-col min-h-[80vh] justify-center'>           <Image src={logo} alt="univer-logo" className="sm:w-[10vw] sm:mt-[1vw]" /><p className="font-bebas sm:text-[4vw] text-center text-[8vw]  mt-[2vw] leading-[120%] sm:w-[75%]">
            <strong className="text-[#0B4075]">Tabriklaymiz</strong> {"talaba bo'lish uchun arizani to'ldirdingiz"}
          </p></div> : (<>               <Image src={logo} alt="univer-logo" className="sm:w-[10vw] sm:mt-[1vw]" />     <p className="font-bebas sm:text-[2vw] text-[8vw]  mt-[2vw] leading-[120%] sm:w-[75%]">
            <strong className="text-[#0B4075]">Nordik universitetida</strong> {"talaba bo'lish uchun pastdagi formani to'ldiring"}
          </p>

            <div className="flex flex-col sm:gap-[1.5vw] gap-[3vw] mt-[2vw]">
              <div className="flex flex-col gap-[0.5vw]">
                <label className="sm:text-[1vw] text-[4vw]" >Ism</label>
                <input
                  placeholder="Ismingizni kiriting"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full sm:h-[3vw] h-[10vw] sm:text-[1vw] text-[4vw] sm:px-[1vw] px-[4vw] border border-gray-300 rounded-sm"
                />
                {localErrors.fullName && <span className="text-red-500 sm:text-[1vw]">{localErrors.fullName}</span>}
              </div>
              <div className="flex flex-col gap-[0.5vw]">
                <label className="sm:text-[1vw] text-[4vw]" >Telefoningizni kiriting</label>
                <input
                  value={phone}
                  onChange={handlePhoneChange}
                  inputMode="numeric"
                  maxLength={13}
                  className="w-full sm:h-[3vw] h-[10vw] sm:text-[1vw] text-[4vw] sm:px-[1vw] px-[4vw] border border-gray-300 rounded-sm"
                />
                {localErrors.phone && <span className="text-red-500 sm:text-[1vw]">{localErrors.phone}</span>}
              </div>
              <div className="flex flex-col gap-[0.5vw]">
                <label className="sm:text-[1vw] text-[4vw]">Qaysi viloyatdansiz</label>
                <select
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full sm:h-[3vw] h-[10vw] sm:text-[1vw] text-[4vw] sm:px-[1vw] px-[4vw] border border-gray-300 rounded-sm"
                >
                  <option value="">Viloyatni tanlang</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
                {localErrors.region && <span className="text-red-500 sm:text-[1vw]">{localErrors.region}</span>}
              </div>
              <div className="flex flex-col gap-[0.5vw]">
                <label className="sm:text-[1vw] text-[4vw]">{"Ta'lim"} shakli</label>
                <select
                  onChange={(e) => { setEducationType(e.target.value as EducationType); setDirection(''); }}
                  className="w-full sm:h-[3vw] h-[10vw] sm:text-[1vw] text-[4vw] sm:px-[1vw] px-[4vw] border border-gray-300 rounded-sm"
                >
                  <option value="">{"Ta'lim"} turini tanlang</option>
                  {educationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {localErrors.educationType && <span className="text-red-500 sm:text-[1vw]">{localErrors.educationType}</span>}
              </div>
              {educationType && (
                <div className="flex flex-col gap-[0.5vw]">
                  <label className="sm:text-[1vw] text-[4vw]">{"Yo'nalish"}</label>
                  <select
                    onChange={(e) => setDirection(e.target.value)}
                    className="w-full sm:h-[3vw] h-[10vw] sm:text-[1vw] text-[4vw] sm:px-[1vw] px-[4vw] border border-gray-300 rounded-sm"
                  >
                    <option value="">{"Yo'nalishni"} tanlang</option>
                    {filteredDirections.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {localErrors.direction && <span className="text-red-500 sm:text-[1vw]">{localErrors.direction}</span>}
                </div>
              )}

              {errors && <p className='text-center text-red-400 text-0.5vw'>{errors}</p>}

              <Button
                className="mt-[2vw] bg-[#0B4075] sm:text-[1vw] text-[4vw] text-white sm:h-[3vw] h-[10vw] px-[5vw]"
                onClick={handleSubmit}
              >
                {
                  isPending ? "Yuborilyapti" : "Yuborish"
                }
              </Button>
            </div></>)}
        </div>
      </div>

      <div className="sm:w-1/2 hidden sm:flex">
        <Image src={people} alt="people" className="w-full" />
      </div>
    </div>
  );
}
