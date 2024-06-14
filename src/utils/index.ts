export const formatDate = (date?: string | Date): string | undefined => {
  if (date) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("pt-BR", options);
  }
};
