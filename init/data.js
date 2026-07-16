
const sampleListing = [
  {
    "title": "Luxury Retreat in Jaipur",
    "description": "Enjoy a memorable stay in Jaipur with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://images.pexels.com/photos/19328831/pexels-photo-19328831.jpeg?_gl=1*1eatk5s*_ga*MTk2Njk3NTc5My4xNzgwNzIyOTUy*_ga_8JE65Q40S6*czE3ODQyMjUyODckbzIkZzEkdDE3ODQyMjUzNzEkajQ1JGwwJGgw",
      "filename": "stayfinder/property-1"
    },
    "price": 3867,
    "location": "Jaipur",
    "country": "India",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.7873,
        26.9124
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Cozy Villa in Goa",
    "description": "Enjoy a memorable stay in Goa with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://q-xx.bstatic.com/xdata/images/hotel/max600/843709970.jpg?k=3a0f1ffe54064137f019db15a18c615cde3a4e2c82a939d6098acf9acd771fe4&o=&a=1311119",
      "filename": "stayfinder/property-2"
    },
    "price": 2757,
    "location": "Goa",
    "country": "India",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.8278,
        15.2993
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Modern Cabin in Manali",
    "description": "Enjoy a memorable stay in Manali with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/hosting/Hosting-1159733899276775422/original/ec2da71c-a2cb-418f-8786-c4e44c4df6a8.jpeg",
      "filename": "stayfinder/property-3"
    },
    "price": 2931,
    "location": "Manali",
    "country": "India",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.1892,
        32.2396
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Scenic Apartment in Udaipur",
    "description": "Enjoy a memorable stay in Udaipur with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://assets.searchabode.com/properties/images/1779778358316-Project-Photo-19-KDMS-Skywalk-Jaipur-5437177_1600_1600.jpg",
      "filename": "stayfinder/property-4"
    },
    "price": 2181,
    "location": "Udaipur",
    "country": "India",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.7125,
        24.5854
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Elegant Loft in Munnar",
    "description": "Enjoy a memorable stay in Munnar with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfJm7wZsbcxV37j2W9noi2pZeVjpOeQ19PU8x0wdL63Z0HeYbBSeaTZs3&s=10",
      "filename": "stayfinder/property-5"
    },
    "price": 1215,
    "location": "Munnar",
    "country": "India",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.0595,
        10.0889
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Peaceful Cottage in Aspen",
    "description": "Enjoy a memorable stay in Aspen with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://www.chaletsauquebec.com/_photos/Grand/3485320241030125327255.jpg",
      "filename": "stayfinder/property-6"
    },
    "price": 2305,
    "location": "Aspen",
    "country": "USA",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8175,
        39.1911
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Hidden Stay in Miami",
    "description": "Enjoy a memorable stay in Miami with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Fik008TmN_soBF4BiA8-TBd1petudiZuNgzCKi7m4xANKuHM9CqnnNI&s=10",
      "filename": "stayfinder/property-7"
    },
    "price": 1613,
    "location": "Miami",
    "country": "USA",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.1918,
        25.7617
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Grand Escape in New York",
    "description": "Enjoy a memorable stay in New York with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7xOhAYtrA6dvVArIN6NeTa3JKtacCUhoZ4z1yraqx2oMEo0CVvgL1SII&s=10",
      "filename": "stayfinder/property-8"
    },
    "price": 1300,
    "location": "New York",
    "country": "USA",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.006,
        40.7128
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Sunset Haven in Lake Tahoe",
    "description": "Enjoy a memorable stay in Lake Tahoe with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://visitlaketahoe.com/wp-content/uploads/2024/01/TahoeBeachClub1200.jpg",
      "filename": "stayfinder/property-9"
    },
    "price": 1979,
    "location": "Lake Tahoe",
    "country": "USA",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -120.0324,
        39.0968
      ]
    },
    "category": "Beach"
  },
  {
    "title": "Lakeview Residency in Paris",
    "description": "Enjoy a memorable stay in Paris with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScmcE9ipGJGG1c0V73k3iXJ0Cknky4VSVocJQYl-h-xEfvdwodJ1ioano&s=10",
      "filename": "stayfinder/property-10"
    },
    "price":2331,
    "location": "Paris",
    "country": "France",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.3522,
        48.8566
      ]
    },
    "category": "Luxury"
  },
  {
    "title": "Forest Homestay in Nice",
    "description": "Enjoy a memorable stay in Nice with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://gos3.ibcdn.com/4fe070e7-235f-4363-9cda-12135589ee66.jpg",
      "filename": "stayfinder/property-11"
    },
    "price": 4603,
    "location": "Nice",
    "country": "France",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.262,
        43.7102
      ]
    },
    "category": "Domes"
  },
  {
    "title": "Skyline House in Chamonix",
    "description": "Enjoy a memorable stay in Chamonix with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjDAA9DMUHJKMX7LUz83DqoUs-YaBDibVO9ek8M5lsag7A0wBocDTnVgp&s=10",
      "filename": "stayfinder/property-12"
    },
    "price": 3818,
    "location": "Chamonix",
    "country": "France",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        6.8694,
        45.9237
      ]
    },
    "category": "Boats"
  },
  {
    "title": "Ocean Lodge in Venice",
    "description": "Enjoy a memorable stay in Venice with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfg6qfv-cPKcuTZ2vf6sLLO7l886eROmirqsKk3fDEyQkPyWPTGnk-akY&s=10",
      "filename": "stayfinder/property-13"
    },
    "price": 1435,
    "location": "Venice",
    "country": "Italy",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.3155,
        45.4408
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Rustic Nest in Florence",
    "description": "Enjoy a memorable stay in Florence with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://cf.bstatic.com/xdata/images/hotel/max500/700179959.jpg?k=8568e029525ded1a77a0257c8999dfd434fb23408f64b23d097d8c9a83786487&o=&hp=1",
      "filename": "stayfinder/property-14"
    },
    "price": 1412,
    "location": "Florence",
    "country": "Italy",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.2558,
        43.7696
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Premium Residence in Amalfi",
    "description": "Enjoy a memorable stay in Amalfi with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHLJnBa5oHRdXAqO3qGqxe4U43Bz6HE2TC_PTJEMtLVVDue1Llu02df8&s=10",
      "filename": "stayfinder/property-15"
    },
    "price": 3034,
    "location": "Amalfi",
    "country": "Italy",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        14.6029,
        40.6333
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Royal Hideaway in Kyoto",
    "description": "Enjoy a memorable stay in Kyoto with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/6e/2c/2b/pool-at-royal-hideaway.jpg?w=700&h=-1&s=1",
      "filename": "stayfinder/property-16"
    },
    "price": 3482,
    "location": "Kyoto",
    "country": "Japan",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        135.7681,
        35.0116
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Charming Palace in Hakone",
    "description": "Enjoy a memorable stay in Hakone with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzN55NDMzB_o59CMfwh--eHNTsF5Pg2Xi25Un_k0GmWeO1FYZUZQUgQa4&s=10",
      "filename": "stayfinder/property-17"
    },
    "price": 2037,
    "location": "Hakone",
    "country": "Japan",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.1069,
        35.2323
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Serene Suite in Sapporo",
    "description": "Enjoy a memorable stay in Sapporo with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8B0c1qvqR2Iv7HXe5iy7sVQbFZdyMIY7SA16vSNR3vY981k9oHh4XBvWn&s=10",
      "filename": "stayfinder/property-18"
    },
    "price": 2643,
    "location": "Sapporo",
    "country": "Japan",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        141.3545,
        43.0618
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Cliffside Bungalow in Zermatt",
    "description": "Enjoy a memorable stay in Zermatt with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-756570625846049495/original/d953cb24-47c6-4904-95d8-0814326d46d1.jpeg?im_w=720",
      "filename": "stayfinder/property-19"
    },
    "price": 1600,
    "location": "Zermatt",
    "country": "Switzerland",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.7491,
        46.0207
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Heritage Dome in Interlaken",
    "description": "Enjoy a memorable stay in Interlaken with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/49/26/1b/photo2jpg.jpg?w=900&h=500&s=1",
      "filename": "stayfinder/property-20"
    },
    "price": 2608,
    "location": "Interlaken",
    "country": "Switzerland",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.8632,
        46.6863
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Panorama Retreat in Queenstown",
    "description": "Enjoy a memorable stay in Queenstown with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/568748769.jpg?k=cdf243aa2bb2ed73b10daeff0bb0781531b0bd05af38dac778433cc83e6c5513&o=",
      "filename": "stayfinder/property-21"
    },
    "price": 3477,
    "location": "Queenstown",
    "country": "New Zealand",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        168.6626,
        -45.0312
      ]
    },
    "category": "Beach"
  },
  {
    "title": "Alpine Villa in Rotorua",
    "description": "Enjoy a memorable stay in Rotorua with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNC9zgRr4-sgVHZhjYxf-xl2kDUiNR-knT_bBZvM2LioYaB6VygZpnlUSL&s=10",
      "filename": "stayfinder/property-22"
    },
    "price": 1816,
    "location": "Rotorua",
    "country": "New Zealand",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        176.2497,
        -38.1368
      ]
    },
    "category": "Luxury"
  },
  {
    "title": "Seaside Cabin in Sydney",
    "description": "Enjoy a memorable stay in Sydney with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://www.greengetaways.com.au/wp-content/uploads/2020/10/Pebbly-Beach-cabin.jpg",
      "filename": "stayfinder/property-23"
    },
    "price": 2886,
    "location": "Sydney",
    "country": "Australia",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        151.2093,
        -33.8688
      ]
    },
    "category": "Domes"
  },
  {
    "title": "Garden Apartment in Byron Bay",
    "description": "Enjoy a memorable stay in Byron Bay with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3xXgGcobBcYMuDBYQaUn-Jl8x9At8jOs8ROwLN25077RXb2Aww9LUUI&s=10",
      "filename": "stayfinder/property-24"
    },
    "price": 2774,
    "location": "Byron Bay",
    "country": "Australia",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        153.602,
        -28.6474
      ]
    },
    "category": "Boats"
  },
  {
    "title": "Urban Loft in Banff",
    "description": "Enjoy a memorable stay in Banff with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZOu7cbZQLAVzaV13dEBg9Zd3mcC0-nn2NNbFFpp2dkA5nx4iiA-41Xt2&s=10",
      "filename": "stayfinder/property-25"
    },
    "price": 1739,
    "location": "Banff",
    "country": "Canada",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.5708,
        51.1784
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Countryside Cottage in Vancouver",
    "description": "Enjoy a memorable stay in Vancouver with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmHtxblud1aC13PblHyvNc-lrwGLsgwKVwmOdhetcjw&s=10",
      "filename": "stayfinder/property-26"
    },
    "price": 3258,
    "location": "Vancouver",
    "country": "Canada",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -123.1207,
        49.2827
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Snow Stay in Troms",
    "description": "Enjoy a memorable stay in Troms\u00f8 with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rcLSEQ8fG-fYIQ4okyQA5_Fv3IUNvEs_iW4yGgIYIw&s=10",
      "filename": "stayfinder/property-27"
    },
    "price": 9116,
    "location": "Troms\u00f8",
    "country": "Norway",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        18.9553,
        69.6492
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Riverside Escape in Reykjav",
    "description": "Enjoy a memorable stay in Reykjav\u00edk with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/hosting/Hosting-1472482522272851343/original/e79f20ba-ac88-40dc-8e38-1e61c43ad122.jpeg?im_w=720",
      "filename": "stayfinder/property-28"
    },
    "price": 5774,
    "location": "Reykjav\u00edk",
    "country": "Iceland",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -21.9426,
        64.1466
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Golden Haven in Santorini",
    "description": "Enjoy a memorable stay in Santorini with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://www.antoperla.com/blog/user/pages/01.home/23.santorini-photos/oia-santorini-photos-antoperla-luxury-hotel-spa02.jpg",
      "filename": "stayfinder/property-29"
    },
    "price": 2429,
    "location": "Santorini",
    "country": "Greece",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.4615,
        36.3932
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Hilltop Residency in Athens",
    "description": "Enjoy a memorable stay in Athens with thoughtfully designed interiors, comfortable amenities, fast Wi-Fi, and easy access to nearby attractions. Perfect for families, couples, or solo travelers seeking relaxation, local experiences, and a welcoming atmosphere throughout their trip.",
    "image": {
      "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/5b/2f/f0/central-athens-hotel.jpg?w=900&h=-1&s=1",
      "filename": "stayfinder/property-30"
    },
    "price": 3027,
    "location": "Athens",
    "country": "Greece",
    "owner": null,
    "geometry": {
      "type": "Point",
      "coordinates": [
        23.7275,
        37.9838
      ]
    },
    "category": "Arctic"
  }
]
module.exports = sampleListing