import React from "react";
import { ThirdwebProvider, useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useContractRead, Web3Button };

const code = `function App() {
    const contractAddress = "0xD5dba694e8322B4f15c9047c92C269218880A6cE";
    const { contract } = useContract(contractAddress);
    const tokenId = 123; // Replace with the appropriate tokenId value
    const { data, isLoading } = useContractRead(contract, "getApproved", [tokenId]);
  
    // Function to get the approval information
    const getApprovalInfo = () => {
      if (isLoading) {
        return { isApproved: false, contractAddress: "" };
      }
  
      const isApproved = Boolean(data);
  
      return { isApproved, contractAddress };
    };
  
    const approvalInfo = getApprovalInfo();
  
    return (
      <div>
        {/* Display the result to the user */}
        <p>Is Approved: {String(approvalInfo.isApproved)}</p>
        <p>Contract Address: {approvalInfo.contractAddress}</p>
      </div>
    );
  }`;

export default function UseGetApproved() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}
