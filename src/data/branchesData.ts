import { Branch } from '../types';

export const branchesData: Branch[] = [
  {
    id: 'october',
    nameAr: 'فرع 6 أكتوبر (سيكس تن بارك)',
    nameEn: '6th of October Branch (Six Ten Park)',
    cityAr: 'مدينة 6 أكتوبر',
    cityEn: '6th of October City',
    addressAr: 'مجمع 610 بارك (Six Ten Park) - محور جمال عبد الناصر، بجوار سيركل كاي وموزع مرسيدس، 6 أكتوبر',
    addressEn: 'Six Ten Park, Gamal Abdel Nasser Axis, Next to Circle K & Mercedes-Benz, 6th of October City',
    phone: '01037334747',
    whatsapp: '201037334747',
    googleMapsUrl: 'https://maps.app.goo.gl/imD8khkQ1RpgUThz6',
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.514030612985!2d30.948031!3d29.9949182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458590054e2a269%3A0x300a918948cecab8!2sBUNZO!5e0!3m2!1sen!2seg!4v1715000000000!5m2!1sen!2seg',
    openingHoursAr: 'يوميًا من 12:00 ظهرًا حتى 3:00 فجرًا',
    openingHoursEn: 'Daily: 12:00 PM – 3:00 AM',
    isPrimary: true,
    coordinates: {
      lat: 29.9949182,
      lng: 30.9506059,
    },
    featuresAr: ['تناول بالمطعم', 'خدمة تيك أواي سريعة', 'توصيل لجميع مناطق أكتوبر', 'منطقة جلوس خارجية راقية'],
    featuresEn: ['Dine-in Area', 'Express Takeaway', 'Delivery Across 6th of October', 'Outdoor Seating in Six Ten Park']
  },
  {
    id: 'zayed',
    nameAr: 'فرع الشيخ زايد (سيتي ووك)',
    nameEn: 'Sheikh Zayed Branch (City Walk)',
    cityAr: 'الشيخ زايد',
    cityEn: 'Sheikh Zayed City',
    addressAr: 'مجمع سيتي ووك (City Walk)، وصلة دهشور، بوابة زايد 5، الشيخ زايد',
    addressEn: 'City Walk Mall, Waslet Dahshur, Zayed Entrance 5, Sheikh Zayed',
    phone: '01015556743',
    whatsapp: '201015556743',
    googleMapsUrl: 'https://maps.app.goo.gl/imD8khkQ1RpgUThz6',
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.123456789!2d30.9812!3d30.0381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBUNZO+Zayed!5e0!3m2!1sen!2seg!4v1715000000001!5m2!1sen!2seg',
    openingHoursAr: 'يوميًا من 12:00 ظهرًا حتى 3:30 فجرًا',
    openingHoursEn: 'Daily: 12:00 PM – 3:30 AM',
    isPrimary: false,
    coordinates: {
      lat: 30.0381,
      lng: 30.9812,
    },
    featuresAr: ['تناول بالمطعم', 'تيك أواي', 'توصيل زايد وحدائق الأهرام', 'أجواء شبابية وعائلية'],
    featuresEn: ['Dine-in Lounge', 'Takeaway Service', 'Delivery in Zayed & Surroundings', 'Family & Friends Seating']
  }
];
