import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { EffectFade, Mousewheel, Pagination } from 'swiper';

import { Champion, Welcome, ChampionDetail, Trailer, Credit } from '../../components/home-section';

import { championsData } from '../../assets/dummy';

SwiperCore.use([Mousewheel, Pagination, EffectFade]);

const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: true,
    speed: 1000,
};

const Home = () => {
    return (
        <>
            <Swiper direction="vertical" effect="fade" {...swiperOptions}>
                <SwiperSlide>{({ isActive }) => <Welcome isActive={isActive} />}</SwiperSlide>
                <SwiperSlide>{({ isActive }) => <Champion isActive={isActive} />}</SwiperSlide>
                <SwiperSlide>{({ isActive }) => <Trailer isActive={isActive} />}</SwiperSlide>
                <SwiperSlide>{({ isActive }) => <Credit isActive={isActive} />}</SwiperSlide>
            </Swiper>
            {championsData.map((item, index) => (
                <ChampionDetail key={index} item={item} id={index} />
            ))}
            <div className="scroll">
                <span>Scroll to see effect</span>
            </div>
        </>
    );
};

export default Home;
