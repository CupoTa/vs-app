import { useTonWallet } from "@tonconnect/ui-react";

export function useTonConnect() {
    
    const wallet = useTonWallet()

    return {
        

        connected: !!wallet?.account.address,
        wallet: wallet?.account.address ?? null,
        network: wallet?.account.chain ?? null,
        walletName: wallet?.device.appName ?? null
        
    }
}