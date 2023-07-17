import React, { useState } from "react";
import { ThirdwebProvider, useSwitchChain, ConnectWallet } from "@thirdweb-dev/react";
import { Goerli } from "@thirdweb-dev/chains";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, Goerli, ThirdwebProvider, useSwitchChain, ConnectWallet, useState };

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
        <button onClick={handleSwitchChain}>
          Switch to Goerli
        </button>
      )}

      {isConnected && <ConnectWallet />}
    </div>
  );
}`;

export default function UseSwitchChain() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
