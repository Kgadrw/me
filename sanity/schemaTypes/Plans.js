export default {
  name: 'pricingPlan',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Plan Name',
      type: 'string',
    },
    {
      name: 'priceMonthly',
      title: 'Monthly Price',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'featured',
      title: 'Featured Plan',
      type: 'boolean',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
