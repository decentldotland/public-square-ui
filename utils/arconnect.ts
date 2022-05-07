import { useEffect, useState } from "react";

export default function useArConnect() {
  const [address, setAddress] = useState<string>();

  // get the address on connect event
  useEffect(() => {
    if (!window) return;
    window.addEventListener("arweaveWalletLoaded", getAddressIfConnected);

    // make sure we checked for the address
    // in case the wallet load event was missed
    setTimeout(() => {
      if (!window.arweaveWallet) return;
      getAddressIfConnected();
    }, 250);

    return () => {
      window.removeEventListener("arweaveWalletLoaded", getAddressIfConnected);

      if (address) window.removeEventListener("walletSwitch", onWalletSwitch);
    };
  }, []);

  async function getAddressIfConnected() {
    const addr = await window.arweaveWallet.getActiveAddress();

    if (addr === address) return;
    window.addEventListener("walletSwitch", onWalletSwitch);

    setAddress(addr);
  }

  const onWalletSwitch = (e: CustomEvent<{ address: string }>) =>
    setAddress(e.detail.address);

  async function connect() {
    if (!window?.arweaveWallet || !!address) return;
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
    if (!address) return;
    try {
      await window.arweaveWallet.disconnect();
      setAddress(undefined);
    } catch {}
  }

  return { address, connect, disconnect };
}
