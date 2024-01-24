import { useQuery } from "@tanstack/react-query";

export function useGetChartData() {
  const { data, isPending } = useQuery({
    queryKey: ["chartData"],
    queryFn: () => {},
  });

  return { data, isPending };
}
