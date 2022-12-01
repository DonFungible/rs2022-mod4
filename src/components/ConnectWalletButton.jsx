import { useAccount, useConnect, useEnsName } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export default function Profile() {
    const { address, isConnected } = useAccount();
    const { data: ensName } = useEnsName({ address });
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });

    return (
        <div className="flex w-full mx-auto">
            {isConnected ? (
                <div>Connected to {ensName ?? address}</div>
            ) : (
                <button
                    className="bg-green-500 p-2 rounded-xl"
                    onClick={() => connect()}
                >
                    Connect Wallet
                </button>
            )}
        </div>
    );
}
