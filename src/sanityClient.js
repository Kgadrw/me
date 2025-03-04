import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: '0unz4ste',
  dataset: 'production',
  apiVersion: '2025-03-04',
  useCdn: true,
  token: "sk7remz99dAG9sNdq8mhNeeFKDQ9qByzriji3roUApQIKckTQZV2h2qTcYko7Scyvxjsow2pv3Lix9QtzwztItuXufRuWgomrqMx3qpyMtaJj1i4l0RQwZHoyPM4TwKoZKiUyoXnfLi6W8X6oHV0BcGImresbTkcAkrt82hF8qvaMFRjM0oO"
,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// Export client as default
export default client;
