import React from 'react';
import Image from 'next/image';

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';

import MintButton from './MintButton';
import TradeButton from './TradeButton';
import ForgeButton from './ForgeButton';
import ConnectWalletButton from './ConnectWalletButton';

const MintCard = ({ image, name, tokenId }) => {
    return (
        <div className="flex flex-col border-xl space-y-1">
            <div className="mx-auto text-2xl">{name}</div>
            <Image src={image} width={300} height={300} alt={'Image'}></Image>
            {/* <div className="py-1" /> */}
            <MintButton tokenId={tokenId} />
            <TradeButton />
            <div>Total Supply</div>
        </div>
    );
};

const ForgeCard = ({ image, name, subtitle }) => {
    return (
        <div className="flex flex-col border-xl space-y-1">
            <div className="mx-auto text-2xl">{name}</div>
            <div className="mx-auto">{subtitle}</div>
            <Image src={image} width={300} height={300} alt={'Image'}></Image>
            <ForgeButton />
            <div>Total Supply</div>
        </div>
    );
};

export default function ForgingDisplay() {
    return (
        <div className="w-2/3 mx-auto pt-4">
            <ConnectWalletButton />

            <div className="mb-4 mx-auto w-full text-center text-3xl">
                Base NFT
            </div>
            <div className="flex flex-row justify-between w-full space-x-2">
                <MintCard image={img1} name={'Bob'} tokenId={0}></MintCard>
                <MintCard image={img2} name={'Morris'} tokenId={1}></MintCard>
                <MintCard image={img3} name={'Jimmy'} tokenId={2}></MintCard>
            </div>
            <div>
                <div className="mt-12 mb-4 mx-auto w-full text-center text-3xl">
                    Forged NFT
                </div>
                <div className="flex flex-row justify-between w-full space-x-4 mb-24">
                    <ForgeCard
                        image={img4}
                        name={'George'}
                        subtitle={'(Burn Bob and Morris)'}
                    />
                    <ForgeCard
                        image={img5}
                        name={'Cassandra'}
                        subtitle={'(Burn Bob and Jimmy)'}
                    />
                    <ForgeCard
                        image={img7}
                        name={'Kimbo'}
                        subtitle={'(Burn Morris and Jimmy)'}
                    />
                    <ForgeCard
                        image={img6}
                        name={'Drake'}
                        subtitle={'(Burn Bob, Morris, and Jimmy)'}
                    />
                </div>
            </div>
        </div>
    );
}
