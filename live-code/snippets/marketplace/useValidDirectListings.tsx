import React from "react";
import {
  CurrencyValue,
  NFTMetadata,
  Status,
  ThirdwebProvider,
  useContract,
  useContractRead,
  useValidDirectListings,
  Web3Button,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {
  React,
  useEffect,
  useState,
  ThirdwebProvider,
  useContract,
  useContractRead,
  useValidDirectListings,
  Web3Button,
};

type ListingData = {
  id: string;
  creatorAddress: string;
  assetContractAddress: string;
  tokenId: string;
  quantity: string;
  currencyContractAddress: string;
  currencyValuePerToken: CurrencyValue;
  pricePerToken: string;
  asset: NFTMetadata;
  startTimeInSeconds: number;
  endTimeInSeconds: number;
  isReservedListing: boolean;
  status: Status;
};

const code = `function App() {
  const { contract } = useContract("0x2fbD1675a61841c5EAaD0Dc8B9E14338c2cAD164", "marketplace-v3");
  const {
    data: directListings,
    isLoading,
    error,
  } = useValidDirectListings(contract);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div style={{ height: "800px", overflow: "auto" }}>
      {directListings.map((listing) => (
        <div key={listing.id}>
          <p>id: {listing.id}</p>
          <p>Creator: {listing.creatorAddress}</p>
          <p>Asset Contract: {listing.assetContractAddress}</p>
          <p>TokenId: {listing.tokenId}</p>
          <p>Amount: {listing.quantity}</p>
          <p>Currency: {listing.currencyContractAddress}</p>
          {listing.currencyValuePerToken && (
            <>
              <p>Price: {listing.currencyValuePerToken._hex}</p>
              {listing.currencyValuePerToken._isBigNumber && (
                <p>Price _isBigNumber: {listing.currencyValuePerToken._isBigNumber.toString()}</p>
              )}
            </>
          )}
          <p>Price: {listing.pricePerToken}</p>
          <p>Asset: {JSON.stringify(listing.asset)}</p>
          <p>Start: {listing.startTimeInSeconds}</p>
          <p>End: {listing.endTimeInSeconds}</p>
          <p>Reserved: {listing.isReservedListing}</p>
          <p>Status: {listing.status}</p>
        </div>
      ))}
    </div>
  );
}
`;

export default function UseValidDirectListings() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}