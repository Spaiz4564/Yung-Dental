import officeImg1 from '../assets/img/OfficeETC/office1.png'
import officeImg2 from '../assets/img/OfficeETC/office3.webp'

export {
  getSections,
  whatWeMakeHandler,
  reusable1AboutProp,
  reusable1HomeProp,
  reusable2AboutProp,
  reusable2OfficeProp,
  reusable1OfficeProp,
  reusable2ServiceProp,
  reusable1ServiceProp,
  getServices,
}

function whatWeMakeHandler(setWhatWeMake1, val) {
  const interval = setInterval(() => {
    setWhatWeMake1(prevState => {
      if (prevState[1] === (val ? 160 : 200)) {
        clearInterval(interval)
      }
      const newArr = [
        prevState[0] === (val ? 50 : 10) ? prevState[0] : (prevState[0] += 1),
        prevState[1] === (val ? 160 : 180) ? prevState[1] : (prevState[1] += 1),
        prevState[2] === (val ? 70 : 200) ? prevState[2] : (prevState[2] += 1),
      ]
      return newArr
    })
  }, 10)
}

function getSections() {
  return ['ABOUT', 'OFFICE', 'SERVICES', 'CONTACT']
}

/// ABOUT PROPS

function reusable1AboutProp() {
  return {
    subTitle1: 'QUALITY AND EFFICIENCY',
    title1: 'Our Vision',
    text1:
      'Guided by our core values, we aim to be the preferred dental laboratory for full-service dental solutions through technology, education, and collaboration.',
    url1: 'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/About/about2.webp?updatedAt=1684407573004',
    subTitle2: 'WHAT MAKES US DIFFERENT',
    title2: 'Our Core Values',
    text2:
      'Our Core Values include Integrity, Respect, Innovation, Accountability, Exceptional Service, Leadership, Teamwork',
    url2: 'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/About/about3.webp?updatedAt=1684407573092',
    isAbout: true,
  }
}

function reusable2AboutProp() {
  return {
    h1: 'We Guide Dentists to Clinical Success',
    imgUrl:
      '	https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/About/about1.webp?updatedAt=1684407573296',
    isAbout: true,
  }
}

/// HOME PROPS

function reusable1HomeProp() {
  return {
    subTitle1: 'EFFICIENT',
    title1: 'Always On Time',
    text1:
      'Dental practices have enough on their mind, that’s why we make sure to always get you the equipment that you need, right when you need it without a delay so you can worry about the things that are more important like your patients',
    url1: 'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Homepage/homepage6.webp?updatedAt=1684407570060',
    subTitle2: 'RESPONSIVE',
    title2: 'Always Available',
    text2:
      'We make sure to be extremely responsive, with us there is no concern about what is going on, or anything hidden, if you have a question then we are here to answer it, simple as that',
    url2: 'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Homepage/homepage7.webp?updatedAt=1684407569868',
    isHome: true,
  }
}

/// OFFICE PROPS

function reusable1OfficeProp() {
  return {
    subTitle1: 'WHY US?',
    title1: 'Higher Standards',
    text1:
      'Here are our clients’ expectations: consistent quality in products, superb service, products that require minimal or any adjustments thereby reducing chair time, services that improve dentist-patient relationships thereby increasing referrals, and good value for the services rendered. We do not fall short of this demand. We guarantee to uphold and continuously improve our services to meet your needs.',
    url1: officeImg2,
    isOffice: true,
  }
}

function reusable2OfficeProp() {
  return {
    h1: 'Always Progressive and Utilizing New Technology',
    optionalSub: 'OUR FACILITY',
    imgUrl: officeImg1,
    isOffice: true,
  }
}

/// SERVICES PROPS

function reusable2ServiceProp() {
  return {
    h1: 'Full-Range Dental Products',
    optionalSub: 'QUALITY CRAFTSMANSHIP',
    imgUrl:
      'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services1.webp?updatedAt=1684407564091',
    isServices: true,
  }
}

function reusable1ServiceProp() {
  return {
    subTitle1: '',
    title1: 'Top-of-the-Line',
    text1:
      'Here are our clients’ expectations: consistent quality in products, superb service, products that require minimal or any adjustments thereby reducing chair time, services that improve dentist-patient relationships thereby increasing referrals, and good value for the services rendered. We do not fall short of this demand. We guarantee to uphold and continuously improve our services to meet your needs.',
    url1: 'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Homepage/homepage1.webp?updatedAt=1684407570051',
    isServices: true,
  }
}

function getServices() {
  return [
    {
      title: 'Dental Technology',
      imgUrl:
        'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services2.jpg?updatedAt=1684407563418',
    },
    {
      title: 'Dentures',
      imgUrl:
        'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services3.jpg?updatedAt=1684407563350',
    },
    {
      title: 'Full Cast Restorations',
      imgUrl:
        'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services4.jpg?updatedAt=1684407562269',
    },
    {
      title: 'IPS Empress',
      imgUrl:
        'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services5.jpg?updatedAt=1684407564287',
    },
    {
      title: 'Mouth Guard',
      imgUrl:
        'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services6.jpg?updatedAt=1684407564105',
    },
    {
      title: 'Partials',
      imgUrl:
        'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services7.jpg?updatedAt=1684407564151',
    },
    {
      title: 'PFM',
      imgUrl:
        'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services8.jpg?updatedAt=1684407565588',
    },
    {
      title: 'Appliances',
      imgUrl:
        'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services9.jpg?updatedAt=1684407566038',
    },
    {
      title: 'Provisionals',
      imgUrl:
        'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services10.jpg?updatedAt=1684407562305',
    },
    {
      title: 'Valplast',
      imgUrl:
        'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services11.jpg?updatedAt=1684407563354',
    },
    {
      title: 'Veneers',
      imgUrl:
        'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services12.jpg?updatedAt=1684407563261',
    },
    {
      title: 'Wax-Up',
      imgUrl:
        'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services13.jpg?updatedAt=1684407563387',
    },
    {
      title: 'Zirconia',
      imgUrl:
        'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services14.jpg?updatedAt=1684407563495',
    },
    {
      title: 'BruxZir Crown',
      imgUrl:
        'https://ik.imagekit.io/tfcgjzp4c/Yung_Dental_imgs/Services/services15.jpg?updatedAt=1684407562310',
    },
  ]
}
