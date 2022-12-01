import React, { useEffect, useState } from 'react';
import {
    useContract,
    useContractWrite,
    usePrepareContractWrite,
    useProvider,
    useSigner,
    useAccount,
} from 'wagmi';
import {
    MINT_CONTRACT_ADDRESS,
    BASE_ABI,
    NETWORK_ID,
    CURRENT_NETWORK,
} from '../constants.js';

export default function MintButton({ tokenId }) {
    const [tokenIdToMint, setTokenIdToMint] = useState(0);
    const [isMinting, setIsMinting] = useState(0);
    const { address } = useAccount();

    const provider = useProvider();
    const { data: signer } = useSigner();

    const { config, error } = usePrepareContractWrite({
        address: MINT_CONTRACT_ADDRESS,
        abi: BASE_ABI,
        functionName: 'mint',
        chainId: NETWORK_ID[CURRENT_NETWORK],
        args: [tokenId],
    });

    const {
        data: mintResult,
        isLoading,
        isSuccess,
        write: mint,
    } = useContractWrite(config);

    return (
        <button
            className="bg-blue-500 mx-auto w-2/3 h-8 text-center rounded-xl hover:scale-105 hover:cursor-pointer active:scale-95"
            onClick={() => mint?.()}
        >
            Mint
        </button>
    );
}
