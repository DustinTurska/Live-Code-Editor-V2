import React, { useState } from "react";
import { ThirdwebProvider, useSwitchChain, ConnectWallet } from "@thirdweb-dev/react";
import { Goerli } from "@thirdweb-dev/chains";
import LiveCodeEditor from "../../LiveCodeEditor";
import styles from "../../../styles/Home.module.css"

const scope = { React, Goerli, ThirdwebProvider, useSwitchChain, ConnectWallet, useState, styles };

const code = `function App() {
  const switchChain = useSwitchChain();
  const [isConnected, setConnected] = useState(false);

  const handleSwitchChain = async () => {
    await switchChain(Goerli.chainId);
    setConnected(true);
  };

  return (
    <div>
      {!isConnected && (
        <div className={styles.btnContainer}>
        <div className={styles.btn} onClick={handleSwitchChain}>
          Switch to Goerli
        </div>
        </div>
      )}

      {isConnected && <ConnectWallet />}
    </div>
  );
}`;

export default function UseSwitchChain() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
