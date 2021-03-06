export default [
  { name: 'Pearl Millet/Mahangu',
    scientificName: 'Pennisetum glaucum',
    shortDescription: 'Pearl millet is the major food cereal in the northern communinal areas and is popularly known as mahangu. Pearl millet is normally reserved for those areas where maize and sorghum fail to grow because of low rainfall or adverse soil factors. ',
    image: require('../assets/image/crops/mahangu.jpg'),
    sowingTime: 'October / November (after three consecutive rainy days with an accumulated rainfall of atleast 20 mm.)',
    annualRainfall: {
      min: 300,
      max: 700,
      unit: 'mm',
      comment: 'It can tolerate heat and little rainfall.' },
    harvest: 'Mature, dry heads are cut and placed on an elevated platform to dry further for threshing.',
    sowingDepth: '30 - 40 mm',
    soilPH: 'Neutral',
    soilPreferences: 'Tolerates a wide range of soils but performs best on well drained deep and lightly textured soils. Tolerates soils with less than 10% clay but does not tolerate waterlogging. High tolerance to salinity. '
  },
  { name: 'Sorghum',
    scientificName: 'Sorghum bicolor',
    shortDescription: 'Sorghum is a traditional staple food throughout the semi-arid areas of Africa. It is  a crop of multiple uses.',
    image: require('../assets/image/crops/sorghum.jpg'),
    sowingTime: 'October / November',
    annualRainfall: {
      min: 300,
      max: 400,
      unit: 'mm',
      comment: 'highly drought resistant'
    },
    harvest: 'Harvest at complete ripeness; thresh by beating with stick / thresher.',
    sowingDepth: '2 - 3 cm in clay soils; 5 - 6 cm in sandy soils',
    soilPH: 'Neutral',
    soilPreferences: 'None. Produces best in fertile, well-drained, well-structured soils of medium texture.  Very high tolerance to salinity.'
  },
  { name: 'Maize',
    scientificName: 'Zea mays',
    shortDescription: 'It is an annual summer crop with a large number of cultivators including corn, popcorn etc. Maize is cross-pollinated. The kernel is a fruit with one seed and in mature stage consist of three main parts: the teets, the starchy endosperm and the embryo.',
    image: require('../assets/image/crops/maize.jpg'),
    sowingTime: 'Mid-December to mid-February',
    annualRainfall: {
      min: 500,
      max: 900,
      unit: 'mm',
      comment: '' },
    harvest: 'Harvest as soon as maize is dry to avoid damage by rodents,termites, weevils and grain moths in the field',
    sowingDepth: '7.5cm in sandy soils, 5cm in clay soils',
    soilPH: 'Tolerates 5-8; optimum is 6-7',
    soilPreferences: 'Tolerates wide range of soils but best on well-drained, well-aerated, deep(60cm) loans and silt loams'

  },
  { name: 'Cowpeas',
    scientificName: 'Vigna unguiculata',
    shortDescription: 'Cowpeas are able to fix nitrogen in their roots with the help of bacteria, therefore increasing soil fertility. It is an ideal crop for Namibia as toerates heat and relatively dry weather conditions',
    image: require('../assets/image/crops/cowpeas.jpg'),
    sowingTime: 'Since cowpeas are cold-sensitive they should be planted early in the season, as soon as the first rains are expected',

    annualRainfall: {
      min: 500,
      max: 0,
      unit: 'mm',
      comment: '' },
    harvest: 'for human consumptions, pods can be picked when they ripen i.e when the colour starts to change from green to purplish or cream',
    sowingDepth: '5-10cm in sandy soil, 3-7cm in heavy soils',
    soilPH: 'Does not tolerate alkaline(pH >=8) or acid(ph <=4.5) soils',
    soilPreferences: 'Sandy topsoil with 5-10% clay and sandy loam and underneath with 10-20% clay contents. Needs 1.2 m deep soils'

  },
  { name: 'Groundnuts',
    scientificName: 'Arachis hypogea',
    shortDescription: 'Groundnuts are good source of protein and energy. Because it is legume, it will improve soil fertility when grown in rotation with other crops like maize or pearl millet.',
    image: require('../assets/image/crops/Groundnuts.jpg'),
    sowingTime: 'Mid-November to mid-December in very wet soil.',
    annualRainfall: {
      min: 450,
      max: 600,
      unit: 'mm',
      comment: '' },
    harvest: 'Pods may be lifted with a spade or by shallow ploughing just underneath the pods. The whole plant is then pulled over a frame, covered with wire mesh. The pods fall through the mesh and should be picked up immediately and dried on a platform for two days after which they are placed in hessian bags for storage.',
    sowingDepth: '5 - 7 cm',
    soilPH: 'Neutral to acid soils but not lower than pH of 5 is ideal.',
    soilPreferences: 'Light sandy, loamy soil with good stucture and a clay content of 8 - 10%,'

  },
  { name: 'Beetroot',
    scientificName: 'Beta vulgaris var. conditiva',
    shortDescription: 'It is a cool weather crop.',
    image: require('../assets/image/crops/beetroot.jpg'),
    sowingTime: 'February to April and August to October',
    annualRainfall: {
      min: 0,
      max: 0,
      unit: 'mm',
      comment: '' },
    harvest: 'Summer: 60 - 80 days ; Winter: 100 - 130 days, when tubers are 5 - 6 cm in diameter, leave small ones in ground to grow bigger.',
    sowingDepth: ' 2 - 3 cm',
    soilPH: 'pH 6 - 8',
    soilPreferences: 'Deep, fertile soils.'

  },
  { name: 'Spinach',
    scientificName: 'Beta vulgaris var. cicla',
    shortDescription: 'It is easy to grow but it does not store well and should be eaten as soon after picking.',
    image: require('../assets/image/crops/spinach.jpg'),
    sowingTime: 'April to August',
    annualRainfall: {
      min: 0,
      max: 0,
      unit: 'mm',
      comment: '' },
    harvest: 'Harvest evry week when the crop is about eight weeks old. The crop can produce for many months.',
    sowingDepth: '1 - 2 cm',
    soilPH: 'pH 6 - 7',
    soilPreferences: 'Heavy feeder. Deep, fertile soils.'

  },
  { name: 'Cabbage',
    scientificName: 'Brassica oleracea var. capitata',
    shortDescription: 'It is very popular and healthy and contains the vitamins A, B1, B2, C abd fibre.',
    image: require('../assets/image/crops/cabbage.jpg'),
    sowingTime: 'Cool season crop, plant April to June',
    annualRainfall: {
      min: 0,
      max: 0,
      unit: 'mm',
      comment: '' },
    harvest: '90 - 100 days after sowing, cut with a sharp knife when heads are firm and hard. Yield of more than 20t/ha is possible.',
    sowingDepth: '1 cm',
    soilPH: 'pH 6 - 6 , 8',
    soilPreferences: 'Prefers soil, rich in organic matter with good moisture holding properties.'

  },
  { name: 'Carrots',
    scientificName: 'Daucus carota',
    shortDescription: 'Carrots contains vitamin A and can be stored for relatively long period of time.',
    image: require('../assets/image/crops/carrot.jpg'),
    sowingTime: 'All season crop - use different varieties for summer and winter.',
    annualRainfall: {
      min: 0,
      max: 0,
      unit: 'mm',
      comment: '' },
    harvest: '70 - 85 days after sowing.',
    sowingDepth: '1 - 2 cm',
    soilPH: 'pH between 6 - 7 ',
    soilPreferences: 'Deep sandy loam with compost or manure. Avoid heavy compact soil.'
  },
  { name: 'Cucurbits',
    scientificName: 'Cucurbitaceae',
    shortDescription: 'Cucurbits are very useful vegetables; they have similar cultural requirements and generall suffer from the same diseases.',
    image: require('../assets/image/crops/cucurbit.jpg'),
    sowingTime: 'August to December',
    annualRainfall: {
      min: 0,
      max: 0,
      unit: 'mm',
      comment: '' },
    harvest: 'Cucumber: 6 - 8 weeks after sowing, Squash: 6 - 10 weeks after sowing, Zucchini: As soon as fruit are 10  -15 cm long, Sweet melons: Harvest when the white, lower portion starts getting yellow, Pumpkins: 3 - 5 months after sowing.',
    sowingDepth: '3 - 4 cm',
    soilPH: '',
    soilPreferences: ''

  },
  { name: 'Green beans',
    scientificName: 'Phaseolus vulgaris',
    shortDescription: 'Beans are legumes and will fix nitrogen from the air if the appropriate Rhizobium species of bacteria is present ( by inoculation or naturally).',
    image: require('../assets/image/crops/greenBean.jpg'),
    sowingTime: 'From September to March ( Avoid frost)',
    annualRainfall: {
      min: 0,
      max: 0,
      unit: 'mm',
      comment: '' },
    harvest: '45 - 80 days after sowing.',
    sowingDepth: '2 - 10 cm',
    soilPH: 'pH 5, 5-7',
    soilPreferences: 'Prefer soil that is well supplied with water. clay loam and loam soils are the most productive.'

  },
  { name: 'Peppers and chillies',
    scientificName: 'Capsicum spp.',
    shortDescription: 'Peppers are small, bushy annuals or short lived perennials with fruit usually red or green in color.Chillies are usually used as a seasoning or spice and are also used in home-prepared insect repellents.',
    image: require('../assets/image/crops/peppersChillies.jpg'),
    sowingTime: 'September to March ( avoid frost).',
    annualRainfall: {
      min: 0,
      max: 0,
      unit: 'mm',
      comment: '' },
    harvest: '2 - 3 months after transplanting. Green peppers are best harvested while fruit are still green or just turning red. Chillies - when turning red. Do not store green peppers longer than 24 hours. Chillies can be dried on a platform within 2 - 3 days and the stored and sold. ',
    sowingDepth: '',
    soilPH: 'pH of 6 - 7',
    soilPreferences: 'Well-drained sandy or sandy loam soils.'

  },
  { name: 'Onion',
    scientificName: 'Allium cepa',
    shortDescription: 'Onions are biennial herbs with bulbs formed at the base of the plant from thickened food storage leaves. Onions contain calcium, iron, fibre and vitamins B1 , B2 and C.',
    image: require('../assets/image/crops/Onion.jpg'),
    sowingTime: 'February to May',
    annualRainfall: {
      min: 0,
      max: 0,
      unit: 'mm',
      comment: '' },
    harvest: '6 - 8 months.',
    sowingDepth: '1 cm',
    soilPH: 'pH 6 , 8',
    soilPreferences: 'Grows well in sandy or sandy loam soils but prefers a high level of organic matter.'

  },
  { name: 'Sweet potatoes',
    scientificName: 'Ipomea batatas',
    shortDescription: 'Sweet potatoes are a warm-season crop and are propagated by means of cuttings or tubers as soon as the soil is fairly moist.',
    image: require('../assets/image/crops/sweetPotatoe.jpg'),
    sowingTime: 'August to November',
    annualRainfall: {
      min: 750,
      max: 0,
      unit: 'mm',
      comment: '' },
    harvest: 'Lift up with a fork to harvest from 3 to 5 months after planting, depending on the cultivar.',
    sowingDepth: '5 cm ( shallower in heavy soils, deeper in light soils). ',
    soilPH: '',
    soilPreferences: 'Wide range of soils below 25 % clay. Soil should be fertile and free of stones. Old cultivars such as the Yellow Borrie mst not be planted in sandy soil, while new cultivars  such as Ribbok grow very well in sandy soil.'

  },
  { name: 'Tomatoes',
    scientificName: 'Lycopersicon esculentum',
    shortDescription: 'Tomatoes contain calcium, iron and vitamins A, B and C.',
    image: require('../assets/image/crops/tomatoes.jpg'),
    sowingTime: 'August - November',
    annualRainfall: {
      min: 0,
      max: 0,
      unit: 'mm',
      comment: '' },
    harvest: '3 - 4 months after transplanting.',
    sowingDepth: '1 cm',
    soilPH: 'pH 5 - 7',
    soilPreferences: 'Grow well on a range of soils from sandy loams to light clay. The beat soils for tomatoes are fertile soils rich in organic matter, able to retain moisture, deep and well drained, not too acidic'

  },
  { name: 'Green salad ',
    scientificName: 'Lactuca sativa',
    shortDescription: 'Green salad is most often composed of leafy vegetables such as lettuce varieties, spinach, or rocket (arugula).',
    image: require('../assets/image/crops/greenSalad.jpg'),
    sowingTime: 'All year but avoid frost and provide shade netting from October to February. ',
    annualRainfall: {
      min: 0,
      max: 0,
      unit: 'mm',
      comment: '' },
    harvest: '90 days. Manual cutting only.',
    sowingDepth: '2 mm - sow in nursely beds and transplant three to four weeks later.',
    soilPH: 'pH 4 , 8 - 8',
    soilPreferences: 'Sand, saand loam, loamy sand, sand clay loam below 30 % clay.'

  }

]
