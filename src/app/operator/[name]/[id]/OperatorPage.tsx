'use client'
import HomeSection from '@/app/components/home/HomeSection'
import AffiliationImage from '@/app/components/operatorDetails/AffiliationImage'
import EliteSkins from '@/app/components/operatorDetails/EliteSkins'
import MoreDetail from '@/app/components/operatorDetails/MoreDetail'
import OperatorDescription from '@/app/components/operatorDetails/OperatorDescription'
import OperatorNameClass from '@/app/components/operatorDetails/OperatorNameClass'
import OperatorSkins from '@/app/components/operatorDetails/OperatorSkins'
import { toggleSkinsButton } from '@/app/redux/slice/UtilitySlice'
import { RootState } from '@/app/redux/store'
import { Elites } from '@/app/utils/const'
import { AngleLeft } from '@/app/utils/icons'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const OperatorPage = ({rhodesData, operatorData, operatorId}:{rhodesData:any, operatorData:any, operatorId:string}) => {
  const dispatch = useDispatch()
  // redux state
  const skinButtonClick = useSelector((state:RootState) => state.utility.skinsButtonClick);

  // operator data
  const operator = rhodesData;


  // skins
  const baseImage = `${operatorId}_1.png`;
  const elite1 = `${operatorId}_1b.png`
  const elite2 = `${operatorId}_2.png`;
  const elite3 = `${operatorId}_2.png` || `${operatorId}_2b.png`  

  // operator skins
  const skins =  operator?.art?.filter((artItem:any) =>
    !Elites.some(elite => elite.name.toLowerCase() === artItem.name.toLowerCase())
  )

  const eliteImageArray = [baseImage, elite1, elite2, elite3];
  const [eliteImageIndex, setEliteImageIndex] = useState('');
  const [fading, setFading] = useState(false);
  const handleImageChange = (name:string) => {
    setFading(true);
    setTimeout(() => {
      setEliteImageIndex(name);
      setFading(false);
    }, 500);
  };

  // Membentuk URL gambar
  const apiUrl = process.env.NEXT_PUBLIC_IMG_API; // Pastikan ini valid
  const [img, setImg] = useState<string>('/char/ptilopsis_e2.png');
  
  useEffect(() => {
    let newImg = '/char/ptilopsis_e2.png'; // Default image
  
    if (eliteImageArray) {
      switch (eliteImageIndex) {
        case 'base':
          newImg = baseImage ? `${apiUrl}/${baseImage.replace('#', '%23')}` : newImg;
          break;
        case 'e1':
          newImg = elite1 ? `${apiUrl}/${elite1.replace('#', '%23')}` : newImg;
          break;
        case 'e2':
          newImg = elite2 ? `${apiUrl}/${elite2.replace('#', '%23')}` : newImg;
          break;
        case 'e3':
          newImg = elite3 ? `${apiUrl}/${elite3.replace('#', '%23')}` : newImg;
          break;
        default:
          newImg = baseImage ? `${apiUrl}/${baseImage.replace('#', '%23')}` : newImg;
          break;
      }
    }
  
    setImg(newImg);
  }, [eliteImageIndex, eliteImageArray]);  

  const handleImgEror = () => setImg('/char/ptilopsis_e2.png');

  // operator skins
  const operatorSkins = useSelector((state:RootState) => state.utility.operatorSkin);
  console.log(img)
  return (
    <main className='relative overflow-hidden'>
      <HomeSection>
        <section className="z-20 absolute top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden py-[100px] 2xl:pt-[200px] 2xl:pb-[100px]">

          <div className="w-full flex flex-col gap-[50px] items-center justify-center">
            {/* operator basic informations */}
            <div className="relative w-[90%] h-[100vh] md:h-[90vh] overflow-hidden mt-[30px] bg-center bg-cover p-[2rem]" style={{
              backgroundImage: 'url("/char_bg_default.png")'
            }}>
              {/* operator elite image && skins */}
              {(skinButtonClick && operatorSkins) ? (
                <Image src={operatorSkins || '/char/ptilopsis_e2.png'} alt={operator?.name} width={1000} height={1000} className={`absolute right-0 top-[100px] md:right-0 md:top-0 lg:-right-[250px] xl:right-0 2xl:-right-[100px] 2xl:-top-[400px] z-10 ${fading ? 'fadeOut' : 'fadeIn'} ${skinButtonClick ? 'md:-translate-x-[100px] lg:-translate-x-[300px]' : 'translate-x-0'} z-20 2xl:w-[3000px] 2xl:h-[2000px]`} />
              ) : (
                <>
                  {img && (
                    <Image onError={handleImgEror} src={img} alt={operator?.name} width={1000} height={1000} className={`absolute right-0 top-[100px] md:top-[10px] md:-right-[50px] lg:top-0 lg:-right-[150px] xl:-top-0 z-10 ${fading ? 'fadeOut' : 'fadeIn'} ${eliteImageIndex === 'e2' ? 'md:-top-[110px] lg:-top-[100px] xl:-top-[300px] w-[2500px]' : '-top-[80px]'} ${skinButtonClick ? 'md:-translate-x-[100px] lg:-translate-x-[400px]' : 'translate-x-0'} z-20`} />
                  )}
                </>
              )}

              {/* operator elite skins */}
              <section className={`z-20 absolute top-0 left-0 p-[1rem] transform transition-transform duration-500 ease-out ${skinButtonClick ? '-translate-x-[500px] 2xl:-translate-x-[1400px]' : 'translate-x-0'}`}>
                <EliteSkins artArray={operator?.art} eliteImageArray={eliteImageArray} handleImage={handleImageChange} />
              </section>

              {/* operator affiliations img */}
              <div className="z-10 absolute top-[50px] left-0">
                <AffiliationImage nation={operatorData?.value?.data?.nationId} group={operatorData?.value?.data?.groupId} team={operatorData?.value?.data?.teamId} />
              </div>

              {/* skins back button */}
              <section className={`z-20 absolute top-0 left-0 transition-all duration-500 ease-out ${skinButtonClick ? 'opacity-100 translate-y-0' : '-translate-y-[500px] opacity-0'} p-[1rem]`}>
                <button onClick={() => dispatch(toggleSkinsButton(false))} className='p-[.5rem] border border-white bg-darkGray bg-opacity-70'>
                  <AngleLeft size={20} color='white' />
                </button>
              </section>

              {/* operator skins */}
              <section className={`z-20 absolute top-0 right-0 p-[1rem] transform transition-transform duration-500 ease-in-out ${skinButtonClick ? 'translate-x-0' : 'translate-x-[500px]'}`}>
                <OperatorSkins imageArray={skins} />
              </section>

              {/* operator name, skills */}
              <section className={`z-20 absolute bottom-0 left-0 transform transition-transform duration-500 ease-in-out ${skinButtonClick ? 'translate-y-[167px] md:translate-y-[90px] 2xl:translate-y-[230px]' : 'translate-y-0'}`}>
                <div className={`hidden md:block transform transition-transform duration-500 ease-in-out ${skinButtonClick ? '-translate-x-[300px] 2xl:-translate-x-[600px]' : 'translate-x-0'}`}>
                  <OperatorDescription description={operator?.description} />
                </div>
                <OperatorNameClass operatorName={operator?.name} classArray={operator?.class} tagArray={operator?.tags} position={operatorData?.value?.data?.position} rarity={operator?.rarity}/>
              </section>
            </div>
          </div>

        </section>
      </HomeSection>
    </main>
  )
}

export default OperatorPage