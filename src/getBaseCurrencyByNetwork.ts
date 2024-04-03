import { ChainType } from "./Types";


export function getBaseCurrencyByNetwork(network: ChainType): string {
  const map = {
    aitt: "AITT",
  };
  return map[network];
}
