export const CONTACTS = {
  phoneHref: 'tel:+380000000000',
  emailHref: 'mailto:info@example.com',
  telegramHref: 'https://t.me/your_username'
} as const;

export const ROUTES = {
  root: '/',
  services: '/services',
  about: '/about',
  contacts: '/contacts',
  privacy: '/privacy'
} as const;
