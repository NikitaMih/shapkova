import { resolve } from 'path'

const pages = [
    {name: 'main', path: resolve(__dirname, '../index.html')},
    {name: 'offer_agreement', path: resolve(__dirname, '../doc/offer_agreement.html')},
    {name: 'privacy_policy', path: resolve(__dirname, '../doc/privacy_policy.html')},
];

export default pages