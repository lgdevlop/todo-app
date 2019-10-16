export const isServiceWorkerSupported = () => 'serviceWorker' in navigator;
export const isNotificationSupported = () => 'Notification' in window;
export const registerServiceWorker = (sw = '/sw.js') => navigator.serviceWorker.register(sw);
export const installedServiceWorker = () => self.addEventListener('install', (event) => console.log('Service Worker Instalado: ', event));

const showNotification = () => { 
  let options = {
    body: 'Você se inscreveu com sucesso!'
  };
  new Notification('Inscrito com sucesso!', options);
};
const showNotificationFromSW = () => { 
  let options = {
    body: 'Você se inscreveu com sucesso!'
  };
  isServiceWorkerSupported() && navigator.serviceWorker.ready.then((swReg) => swReg.showNotification('Inscrito com sucesso SW!', options));
};

// const getPushSubscription = () => {
//   showNotificationFromSW() && navigator.serviceWorker.ready.then(
//     (swReg) => [swReg.pushManager.getSubscription(), swReg]
//     ).then(
//       ([subscription, swReg]) => {
//         if (subscription !== null) {

//         }
//         swReg.pushManager.subscribe({
//           userVisibleOnly: true
//         });
//       }
//     );
// }

const handleNotificationPermission = (permission) => {
  if (permission !== 'granted') {
    console.log('Usuário não permitiu notificação');
    return;
  }
  // getPushSubscription();
  showNotification();
  // showNotificationFromSW();
}
export const askNotificationPermission = (sw = '/sw.js') => Notification.requestPermission(handleNotificationPermission);