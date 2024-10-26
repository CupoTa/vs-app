import { useTonConnectUI, useTonWallet, useTonAddress } from "@tonconnect/ui-react";

export function useTonConnect() {
    
    const wallet = useTonWallet()
    const address = useTonAddress()
    const [tonConnectUI] = useTonConnectUI()

    return {
        sender: {
            send: async (args) => {
              tonConnectUI.sendTransaction({
                messages: [
                  {
                    address: args.to.toString(),
                    amount: args.value.toString(),
                    // payload: args.body?.toBoc().toString("base64"),
                  },
                ],
                validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
              });
            },
            address: wallet?.account?.address 
          }, 

        connected: !!wallet?.account.address,
        wallet: wallet?.account.address ?? null,
        network: wallet?.account.chain ?? null,
        walletName: wallet?.device.appName ?? null,
        address: address ?? null
        
    }
}