// Generate a future date for a credit card's expiry
const generateCreditCardExpiry = () => {
  const future = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  const month = future.getMonth().toString().padStart(2, "0");
  const year = future.getFullYear().toString().slice(2);
  return `${month}/${year}`;
};

// Use Union Station in Toronto as our test address
module.exports.createTestData = () => ({
  name: "Test Name",
  email: "test@email.com",
  address: {
    street: "65 Front St. W",
    city: "Toronto",
    province: "Ontario",
    postalCode: "M5J 1E6",
  },
  creditCard: {
    number: "4242 4242 4242 4242",
    expiry: generateCreditCardExpiry(),
    cvc: "123",
  },
});

module.exports.donatemaskUrl = "http://localhost:4443";
