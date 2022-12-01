import baseAbi from '../abis/Base.json';
import forgedAbi from '../abis/Forged.json';
export const BASE_ABI = baseAbi;
export const FORGED_ABI = forgedAbi;
export const NETWORK_ID = {
    Ethereum: 1,
    Goerli: 5,
    Mumbai: 80001,
};

// ! These should reflect the current development status
export const CURRENT_NETWORK = 'Mumbai';
export const MINT_CONTRACT_ADDRESS =
    '0x4aF599d1BBC50E97eBE3E520a6068D756BAAB7b5';
export const FORGE_CONTRACT_ADDRESS =
    '0xd6A0b449Db2F4860740a55c6288CF8f5d1E8B9E5';
