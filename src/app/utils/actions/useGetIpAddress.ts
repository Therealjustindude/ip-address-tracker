/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getIpAddress } from "../hooks/getIpAddress";
import { IpInformation } from "@/app/ui/IpInformation";

export const useGetIpAddress = (ip: string): { data: IpInformation | undefined; isLoading: boolean; error: Error | null } => {
  return useQuery({
    queryKey: ['ipAddress', ip],
    queryFn: () => getIpAddress(ip)
  });
};