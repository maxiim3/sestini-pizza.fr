/**
 * @type {[{jour: string, horaires: string, adresse: {ville: string, rue: string, lng: string, num: string, cp: string, lat: string}, _id: number, estOuvert: boolean, url: string},{jour: string, horaires: string, adresse: {ville: string, rue: string, lng: number, num: string, cp: string, lat: number}, _id: number, estOuvert: boolean, url: string},{jour: string, horaires: string, adresse: {ville: string, rue: string, lng: number, num: string, cp: string, lat: number}, _id: number, estOuvert: boolean, url: string},{jour: string, horaires: string, adresse: {ville: string, rue: string, lng: number, num: string, cp: string, lat: number}, _id: number, estOuvert: boolean, url: string},{jour: string, horaires: string, adresse: {ville: string, rue: string, lng: number, num: string, cp: string, lat: number}, _id: number, estOuvert: boolean, url: string},null,null]}
 */
const jours = [
    {
        _id: 0,
        jour: 'lundi',
        estOuvert: false,
        horaires: '',
        url: './img/map1.png',
        adresse: {
            ville: '',
            num: '',
            rue: '',
            cp: '',
            lat: '',
            lng: '',
        },
    },
    {
        _id: 1,
        estOuvert: true,
        jour: 'mardi',
        horaires: '18h - 21h',
        url: './img/map1.png',
        adresse: {
            ville: 'Castelnau-le-Lez',
            num: '5 ',
            rue: 'Pl. Charles de Gaulle',
            cp: '34170 ',
            lat: 43.62852540270059,
            lng: 3.8972810449764,
        },
    },
    {
        _id: 2,
        estOuvert: true,
        jour: 'mercredi',
        horaires: '18h - 21h',
        url: './img/map1.png',
        adresse: {
            ville: 'Castelnau-le-Lez',
            num: '5 ',
            rue: 'Pl. Charles de Gaulle',
            cp: '34170 ',
            lat: 43.62852540270059,
            lng: 3.8972810449764,
        },
    },
    {
        _id: 3,
        estOuvert: true,
        jour: 'jeudi',
        horaires: '18h - 21h',
        url: './img/map1.png',
        adresse: {
            ville: 'Castelnau-le-Lez',
            num: '5 ',
            rue: 'Pl. Charles de Gaulle',
            cp: '34170 ',
            lat: 43.62852540270059,
            lng: 3.8972810449764,
        },
    },
    {
        _id: 4,
        estOuvert: true,
        jour: 'vendredi',
        horaires: '18h - 22h',
        url: './img/map2.png',
        adresse: {
            ville: 'Mauguio',
            num: '185',
            rue: 'Rue du Mistral',
            cp: '34130',
            lat: 43.54728466169871,
            lng: 3.9765417634951903,
        },
    },
    {
        _id: 5,
        estOuvert: true,
        jour: 'samedi',
        horaires: '18h - 22h',
        url: './img/map2.png',
        adresse: {
            ville: 'Villeneuve-lès-Maguelone',
            num: '11',
            rue: 'Rue Maguelone',
            cp: '34750',
            lat: 43.53171172544718,
            lng: 3.862983218616059,
        },
    },
    {
        _id: 6,
        estOuvert: false,
        jour: 'dimanche',
        horaires: '',
        url: '',
        adresse: {
            ville: '',
            num: '',
            rue: '',
            cp: '',
            lat: '',
            lng: '',
        },
    }
];

export const getDays = () => {
    return jours;
}
