'use client';

import { useState } from 'react';
import Image from 'next/image';
import people from '@/public/people.png';
import logo from '@/public/logo.svg';
import { Button } from '@/components/ui/button';

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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    if (!input.startsWith('+998')) {
      input = '+998';
    }
    const digitsOnly = input.replace(/\D/g, '').slice(3, 12);
    setPhone('+998' + digitsOnly);
  };

  const handleSubmit = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'Ism majburiy';
    if (phone.length < 13) newErrors.phone = 'Toʻliq telefon raqam kiriting';
    if (!region) newErrors.region = 'Viloyatni tanlang';
    if (!educationType) newErrors.educationType = "Ta'lim shaklini tanlang";
    if (!direction) newErrors.direction = "Yo'nalishni tanlang";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formData = {
      fullName,
      phone,
      region,
      educationType,
      direction,
    };
    console.log('Yuborilgan maʼlumot:', formData);
    alert('Maʼlumotlar yuborildi!');
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
          <Image src={logo} alt="univer-logo" className="sm:w-[10vw] sm:mt-[1vw]" />
          <p className="font-bebas sm:text-[2vw] text-[8vw]  mt-[2vw] leading-[120%] sm:w-[75%]">
            <strong className="text-[#0B4075]">Nordik universitetida</strong> talaba bo'lish uchun pastdagi formani to'ldiring
          </p>

          <div className="flex flex-col sm:gap-[1.5vw] gap-[3vw] mt-[2vw]">
            {/* Ism */}
            <div className="flex flex-col gap-[0.5vw]">
              <label className="sm:text-[1vw] text-[4vw]" >Ism</label>
              <input
                placeholder="Ismingizni kiriting"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full sm:h-[3vw] h-[10vw] sm:text-[1vw] text-[4vw] sm:px-[1vw] px-[4vw] border border-gray-300 rounded-sm"
              />
              {errors.fullName && <span className="text-red-500 sm:text-[1vw]">{errors.fullName}</span>}
            </div>

            {/* Telefon raqam */}
            <div className="flex flex-col gap-[0.5vw]">
              <label className="sm:text-[1vw] text-[4vw]" >Telefoningizni kiriting</label>
              <input
                value={phone}
                onChange={handlePhoneChange}
                inputMode="numeric"
                maxLength={13}
                className="w-full sm:h-[3vw] h-[10vw] sm:text-[1vw] text-[4vw] sm:px-[1vw] px-[4vw] border border-gray-300 rounded-sm"
              />
              {errors.phone && <span className="text-red-500 sm:text-[1vw]">{errors.phone}</span>}
            </div>

            {/* Viloyat */}
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
              {errors.region && <span className="text-red-500 sm:text-[1vw]">{errors.region}</span>}
            </div>

            {/* Ta'lim turi */}
            <div className="flex flex-col gap-[0.5vw]">
              <label className="sm:text-[1vw] text-[4vw]">Ta'lim shakli</label>
              <select
                onChange={(e) => { setEducationType(e.target.value as EducationType); setDirection(''); }}
                className="w-full sm:h-[3vw] h-[10vw] sm:text-[1vw] text-[4vw] sm:px-[1vw] px-[4vw] border border-gray-300 rounded-sm"
              >
                <option value="">Ta'lim turini tanlang</option>
                {educationTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.educationType && <span className="text-red-500 sm:text-[1vw]">{errors.educationType}</span>}
            </div>

            {/* Yo'nalish */}
            {educationType && (
              <div className="flex flex-col gap-[0.5vw]">
                <label className="sm:text-[1vw] text-[4vw]">Yo'nalish</label>
                <select
                  onChange={(e) => setDirection(e.target.value)}
                  className="w-full sm:h-[3vw] h-[10vw] sm:text-[1vw] text-[4vw] sm:px-[1vw] px-[4vw] border border-gray-300 rounded-sm"
                >
                  <option value="">Yo'nalishni tanlang</option>
                  {filteredDirections.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {errors.direction && <span className="text-red-500 sm:text-[1vw]">{errors.direction}</span>}
              </div>
            )}

            <Button
              className="mt-[2vw] bg-[#0B4075] sm:text-[1vw] text-[4vw] text-white sm:h-[3vw] h-[10vw] px-[5vw]"
              onClick={handleSubmit}
            >
              Yuborish
            </Button>
          </div>
        </div>
      </div>

      <div className="sm:w-1/2 hidden sm:flex">
        <Image src={people} alt="people" className="w-full" />
      </div>
    </div>
  );
}
