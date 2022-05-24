export const fetcher = (...args) => fetch(...args).then((res) => res.json());

// Format the value with a comma if present, or return '...'
export const formatNumber = (value, defaultValue = "...") => {
  if (!value && value !== 0) {
    return defaultValue;
  }
  return new Intl.NumberFormat().format(value);
};

// Format the value as Canadian currency
export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(
    value
  );
