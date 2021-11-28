import './champion-card.scss';

import { useRef, useState } from 'react';

const ChampionCard = (props: any) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const item = props.item;

    const onClick = () => {
        const img = cardRef.current!.querySelector('img');
        const pos = img!.getBoundingClientRect();

        const newNode = img!.cloneNode(true);
        // @ts-ignore
        newNode.style.width = img!.offsetWidth + 'px';
        // @ts-ignore
        newNode.style.height = img!.offsetHeight + 'px';
        // @ts-ignore
        newNode.style.position = 'absolute';
        // @ts-ignore
        newNode.style.top = pos.top + 'px';
        // @ts-ignore
        newNode.style.left = pos.left + 'px';
        // @ts-ignore
        newNode.style.zIndex = '102';

        // @ts-ignore
        newNode.style.transition = 'all 0.7s ease';
        // @ts-ignore
        newNode.id = `champ-img-${props.id}`;

        setTimeout(() => {
            // @ts-ignore
            newNode.style.width = 'auto';
            // @ts-ignore
            newNode.style.height = '100%';
            // @ts-ignore
            newNode.style.top = '0';
            // @ts-ignore
            newNode.style.left = '0';
        });

        document.body.appendChild(newNode);
        const videoUrl = `https://youtube.com/embed/${item.video}`;
        document.querySelector(`#champ-detail-${props.id} iframe`)!.setAttribute('src', videoUrl);
        document.querySelector(`#champ-detail-${props.id}`)!.classList.add('active');
    };

    return (
        <div className="champion-card" onClick={onClick} ref={cardRef}>
            <div className="frame">
                <div
                    className="bg-image overlay bg"
                    style={{ backgroundImage: `url(${item.bg})` }}
                ></div>
            </div>
            <img src={item.img} alt="champion" />
            <div className="name">{item.name}</div>
        </div>
    );
};

export default ChampionCard;
