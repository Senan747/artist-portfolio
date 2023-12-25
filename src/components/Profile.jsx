import React from "react";

function Profile() {
  return (
    <div className="w-full flex items-center justify-center flex-wrap pt-28 max-md:pt-20">
      <div className="bg-gega-green flex flex-row items-center max-lg:flex-col max-md:gap-3 justify-between p-10 max-md:p-5 m-20 max-md:m-5">
        <div className="bg-gega-white rounded-[30px] p-10">
          <div className="pb-5 flex flex-row items-center">
            <img
              src="/artist.jpg"
              alt=""
              className="rounded-50 w-[50px] h-[50px] mr-3 max-md:w-[30px] max-md:h-[30px]"
            />
            <p className="font-semibold text-lg max-lg:hidden">Rəssam</p>
            <p className="font-semibold hidden text-base max-lg:block">
              İntiqam Ağayev
            </p>
          </div>
          <div className="w-[300px] max-md:w-[200px]">
            <img src="/profile.webp" alt="" className="w-full h-auto" />
          </div>
        </div>
        <div className="ml-10 max-md:ml-0">
          <h1 className="font-Pacifico text-5xl text-gega-white pb-10 max-lg:hidden">
            İntiqam Ağayev
          </h1>
          <p className="text-gega-white max-md:text-justify max-md:text-sm pt-4">
            Ağayev İntiqam Tofiq oğlu 1966-cı ildə Azerbaycan’ın Sumqayıt
            şəhərində anadan olmub. 1983-1989 cu ildə Ə.Əzimzadə adına
            Azərbaycan Dövlət rəssamlıq məktəbini bitirib. Rəssam İntiqam Ağayev
            ehtiyatda olan zabit, II qrup Qarabağ əlilidir. Əzim Əzimzadə adına
            Rəssamlıq Məktəbini bitirib. Çəkdiyi əsərlər imperssionizm
            üslubundadır. Əsasən, yağlı boyadan istifadə edir. İşlədiyi
            mövzularda isə məişət, dəniz peyzajları və müharibə mövzuları
            üstünlük təşkil edir. İntiqam Ağayev incəsənət aləmində özünəməxsus
            dəsti-xətti olan istedadlı rəssamlardandır. Rəsmlərinə baxanda
            insanın ağlına da gəlməz ki, o, Qarabağ müharibəsinin iştirakçısı
            olub, ağır döyüşlərdə iştirak edib, yaddaşında dərin iz buraxmış
            faciəvi itkilər görüb. Çünki yaradıcılıqda əsas şüarı auditoriyaya
            yalnız müsbət enerji, xoş təəssürat və nikbin əhval-ruhiyyə
            ötürməkdir. O, öz kədərini, ağrı-acılarını da kətan üzərinə rəngli
            boyalarla, gözəl təbiət mənzərələri ilə canlandırmağı bacaran
            rəssamlardandır. Cəbhədə baş verənləri unutmasa da, tablolarda mavi
            Xəzəri, qayğısız uşaqlıq illərini, Abşeronun əsrarəngiz təbiətini
            təsvir etməklə insanlara nikbinlik aşılamağa çalışır. Müharibə
            illərində qanlı savaşlarda iştirak etmiş, böyük faciələrin şahidi
            olmuş və rəssamlığa da məhz döyüş zamanı aldığı fiziki və mənəvi
            zərbədən sonra başlamış İntiqam Ağayevin yaradıcılığının əsas
            mövzusu vətənpərvərlik olsa da, o, heç zaman ağrı-acını, bədbinliyi,
            çarəsizliyi rəsmlərində təbliğ etmir, əksinə, auditoriyaya mənəvi
            rahatlıq və ümid hissi aşılayır, xeyirin şər üzərində gec-tez qələbə
            çalacağına inamını insanlara çatdırır. Bir sözlə, rəssamın
            optimizmlə dolu yaradıcılığı hər kəsə həyatın gözəl olduğunu, onu
            sevinclə, doya-doya yaşamağı, nə baş verirsə-versin həyatdan
            küsməməyi öyrədir. İntiqam Ağayev böyük həvəslə hazırlaşdığı, bu
            yaxınlarda təşkil edəcəyi yeni sərgidə yer alan tablolarda da məhz
            bu xətt qorunub saxlanılır.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
