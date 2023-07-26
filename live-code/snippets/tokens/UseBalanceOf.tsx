import React from "react";
import { ThirdwebProvider, useContract, useContractRead, useAddress } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {React, ThirdwebProvider, useContract, useContractRead, useAddress};
const code = `function App() {
    const address = useAddress(); 
    const { contract } = useContract("0x593649F70f836565e33f0BCe9af9503c243359B3");
    const { data, isLoading } = useContractRead(contract, "balanceOf", [address]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    return <div>Address balance: {data}</div>;
  }`;

export default function UseBalanceOf() {
    return <LiveCodeEditor code={code} additionalScope={scope} />;
}
