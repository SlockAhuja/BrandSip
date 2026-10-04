export const pricingData = {
  products: [
    { id: '250ml', name: '250 ml', basePrice: 8 },
    { id: '500ml', name: '500 ml', basePrice: 10 },
    { id: '1l', name: '1 L', basePrice: 15 },
  ],
  brandingOptions: [
    { id: 'standard', name: 'Standard Label', multiplier: 1 },
    { id: 'premium', name: 'Premium Label', multiplier: 1.2 },
    { id: 'custom', name: 'Custom Requirement', multiplier: 1.5 },
  ],
  deliveryOptions: [
    { id: 'pickup', name: 'Pickup', cost: 0 },
    { id: 'local', name: 'Local Delivery', cost: 500 },
    { id: 'quote', name: 'Delivery Quote Required', cost: 0 }, // Handled manually
  ]
};
