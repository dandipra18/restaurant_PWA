import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

const therestaurantdbapi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev'),
  new StaleWhileRevalidate({
    cacheName: 'therestaurantdb-api',
  }),
);

const therestaurantdbimageapi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/small/'),
  new StaleWhileRevalidate({
    cacheName: 'therestaurantdb-image-api',
  }),
);

registerRoute(therestaurantdbapi);
registerRoute(therestaurantdbimageapi);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', (event) => {
  console.log('Service Worker: Pushed');

  const notificationData = {
    title: 'Push Notification',
    options: {
      body: 'This is a push notification',
      icon: '/favicon.png',
      image: '/icon-512x512/icon-512x512.jpg',
    },
  };

  const showNotification = self.registration.showNotification(
    notificationData.title,
    notificationData.options,
  );

  event.waitUntil(showNotification);
});
