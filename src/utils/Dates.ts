import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDistanceDate = (date: string) => {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true,
    locale: ptBR,
  });
};
