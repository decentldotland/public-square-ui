import { useEffect, useState } from "react";

export default function useArConnect(): [
  string | undefined,
  () => Promise<void>,
  () => Promise<void>
] {
  const [address, setAddress] = useState<string>();

  // get the address on connect event
  useEffect(() => {
    if (!window) return;
    const onWalletSwitch = (e: CustomEvent<{ address: string }>) =>
      setAddress(e.detail.address);

    window.addEventListener("arweaveWalletLoaded", getAddressIfConnected);
    window.addEventListener("walletSwitch", onWalletSwitch);

    return () => {
      window.removeEventListener("arweaveWalletLoaded", getAddressIfConnected);
      window.removeEventListener("walletSwitch", onWalletSwitch);
    };
  }, []);

  async function getAddressIfConnected() {
    try {
      const addr = await window.arweaveWallet.getActiveAddress();

      setAddress(addr);
    } catch {
      setAddress(undefined);
    }
  }

  async function connect() {
    try {
      await window.arweaveWallet.connect(
        ["ACCESS_ADDRESS", "ACCESS_ALL_ADDRESSES"],
        {
          name: "Public Square",
        }
      );

      await getAddressIfConnected();
    } catch {}
  }

  async function disconnect() {
    try {
      await window.arweaveWallet.disconnect();
      setAddress(undefined);
    } catch {}
  }

  return [address, connect, disconnect];
}
