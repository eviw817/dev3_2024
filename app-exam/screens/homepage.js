import React, { useState, useEffect } from 'react';
import FlowerItem from '../components/FlowerItem';
import { View, TouchableOpacity, Image, Text, TextInput, FlatList, StyleSheet, Platform } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [flowers, setFlowers] = useState([
    {
      "title": "Daffodil",
      "pictures": [
        "https://craft-exam.ddev.site/assets/Whitedaffodil.jpg",
        "https://craft-exam.ddev.site/assets/Orangedaffodil.jpg",
        "https://craft-exam.ddev.site/assets/Yellowdaffodil.jpg"
      ],
      "colors": [
        {
          "name": "White",
          "hex": "#ffffff"
        },
        {
          "name": "Orange",
          "hex": "#ff7a29"
        },
        {
          "name": "Yellow",
          "hex": "#fad02e"
        }
      ],
      "leaves": true,
      "price": "€3.50",
      "info": "Daffodils go by many names depending on the species and variety — narcissus, jonquils, or paperwhites — but they are all daffodils and they all belong to the genus Narcissus. These iconic flowers are perennial bulbs that are very easy to grow. They will multiply every year in the garden as long as they have good soil with adequate drainage. They are deer resistant and possess a natural pesticide, so few insects bother them other than for pollination. Daffodils are the national flower of Wales and the 10th anniversary posy.",
      "bloomingSeason": [
        {
          "label": "Spring",
          "value": "spring",
          "selected": true,
          "valid": true
        }
      ],
      "slug": "daffodil",
      "id": 49
    },
    {
      "title": "Dahlia",
      "pictures": [
        "https://craft-exam.ddev.site/assets/Whitedahlia.jpg",
        "https://craft-exam.ddev.site/assets/Yellowdahlia.jpg",
        "https://craft-exam.ddev.site/assets/Purpledahlia.jpeg"
      ],
      "colors": [
        {
          "name": "White",
          "hex": "#ffffff"
        },
        {
          "name": "Yellow",
          "hex": "#fad02e"
        },
        {
          "name": "Purple",
          "hex": "#991ef9"
        }
      ],
      "leaves": true,
      "price": "€4.00",
      "info": "These attractive blooms come in a wide range of colors and can be easily incorporated into any existing or new garden. And unlike most plants, these flowers thrive in some shade. They also flower extremely long, first blooming midsummer and lasting through the first frost. However, even though dahlias are perennials, they are tuberous rooted plants, so they should be replanted every spring after resting.",
      "bloomingSeason": [
        {
          "label": "Summer",
          "value": "summer",
          "selected": true,
          "valid": true
        },
        {
          "label": "Fall",
          "value": "fall",
          "selected": true,
          "valid": true
        }
      ],
      "slug": "dahlia",
      "id": 47
    },
    {
      "title": "Chrysanthemum",
      "pictures": [
        "https://craft-exam.ddev.site/assets/Yellowchrysanthemum.webp",
        "https://craft-exam.ddev.site/assets/Orangechrysanthemum.jpg",
        "https://craft-exam.ddev.site/assets/Pinkchrysanthemum.jpg"
      ],
      "colors": [
        {
          "name": "Yellow",
          "hex": "#fad02e"
        },
        {
          "name": "Orange",
          "hex": "#ff7a29"
        },
        {
          "name": "Pink",
          "hex": "#ff5dcd"
        }
      ],
      "leaves": true,
      "price": "€4.00",
      "info": "Cultivated mums originated in China more than 3,000 years ago, and have become familiar and well-loved fall flowers the world over. Thousands of varieties with unique flower shapes brighten home gardens, containers, median strips, and parking lots from late summer through frost with their delightful orange, red, yellow, purple, or white blooms. Chrysanthemums are easy to grow perennials and will come back year after year if planted early in the season, so that they become established before winter. In addition to their beauty, chrysanthemum flowers can be made into a tea, and the leaves can be eaten as salad greens.",
      "bloomingSeason": [
        {
          "label": "Summer",
          "value": "summer",
          "selected": true,
          "valid": true
        },
        {
          "label": "Fall",
          "value": "fall",
          "selected": true,
          "valid": true
        }
      ],
      "slug": "chrysanthemum",
      "id": 45
    },
    {
      "title": "Tulip",
      "pictures": [
        "https://craft-exam.ddev.site/assets/Yellowtulip.webp",
        "https://craft-exam.ddev.site/assets/Orangetulip.jpg",
        "https://craft-exam.ddev.site/assets/Redtulip.jpg"
      ],
      "colors": [
        {
          "name": "Yellow",
          "hex": "#fad02e"
        },
        {
          "name": "Orange",
          "hex": "#ff7a29"
        },
        {
          "name": "Red",
          "hex": "#ff2929"
        }
      ],
      "leaves": true,
      "price": "€4.50",
      "info": "There are over 150 species and 3,000 varieties of tulips, which are part of the lily family. Like most common flowers, tulips come in a wide variety of colors and shapes, each of which has its own meaning. As a signal of the arrival of spring, these blooms are often associated with Easter. At one point, tulips were more valuable than gold in Holland during a period called “Tulip Mania,” and their popularity has only spread with time. Tulip bulbs should be planted in the fall, in areas where they can receive partial to full sun. Tulips will fare better in soil that allows for drainage, since over-watering will drown the bulb and roots.",
      "bloomingSeason": [
        {
          "label": "Spring",
          "value": "spring",
          "selected": true,
          "valid": true
        }
      ],
      "slug": "tulip",
      "id": 39
    },
    {
      "title": "Lily",
      "pictures": [
        "https://craft-exam.ddev.site/assets/Whitelily.jpg",
        "https://craft-exam.ddev.site/assets/Pinklily.jpg",
        "https://craft-exam.ddev.site/assets/Orangelily.webp"
      ],
      "colors": [
        {
          "name": "White",
          "hex": "#ffffff"
        },
        {
          "name": "Pink",
          "hex": "#ff5dcd"
        },
        {
          "name": "Orange",
          "hex": "#ff7a29"
        }
      ],
      "leaves": true,
      "price": "€4.50",
      "info": "Lilies are one of the most popular and versatile flowers in the world. Coming in a variety of colors and known for their strong fragrance, this elegant bloom is a show-stopper on its own while also serving as the perfect complement to any bouquet. In fact, lilies are one of the most popular flowers in the world, and it’s not hard to see why. There are over 100 different types of true lilies belonging to the “lilium” genus. Lilies are found predominantly in the Northern Hemisphere.",
      "bloomingSeason": [
        {
          "label": "Summer",
          "value": "summer",
          "selected": true,
          "valid": true
        },
        {
          "label": "Fall",
          "value": "fall",
          "selected": true,
          "valid": true
        }
      ],
      "slug": "lily",
      "id": 43
    },
    {
      "title": "Orchid",
      "pictures": [
        "https://craft-exam.ddev.site/assets/Redorchid.jpg",
        "https://craft-exam.ddev.site/assets/Pinkorchid.webp",
        "https://craft-exam.ddev.site/assets/Whiteorchid.jpg"
      ],
      "colors": [
        {
          "name": "Red",
          "hex": "#ff2929"
        },
        {
          "name": "Pink",
          "hex": "#ff5dcd"
        },
        {
          "name": "White",
          "hex": "#ffffff"
        }
      ],
      "leaves": true,
      "price": "€5.00",
      "info": "Did you know that orchids are one of the oldest flowering plants known to man? Scientists speculate that orchids have been around as long as 100 million years. Some of the most popular types of the more than 30,000 that exist are phalaenopsis, dendrobium, cattleya, and vanilla. Orchids generally represent love, fertility, thoughtfulness, and charm. However, each variety of these flower types has its own color and meaning. Phalaenopsis orchids symbolize health and prosperity, while dendrobium represent wisdom and beauty. Cymbidium symbolize strength and nobility, and oncydium orchids symbolize love and talent.",
      "bloomingSeason": [
        {
          "label": "Winter",
          "value": "winter",
          "selected": true,
          "valid": true
        },
        {
          "label": "Spring",
          "value": "spring",
          "selected": true,
          "valid": true
        },
        {
          "label": "Summer",
          "value": "summer",
          "selected": true,
          "valid": true
        },
        {
          "label": "Fall",
          "value": "fall",
          "selected": true,
          "valid": true
        }
      ],
      "slug": "orchid",
      "id": 37
    },
    {
      "title": "Daisy",
      "pictures": [
        "https://craft-exam.ddev.site/assets/Reddaisy.jpg",
        "https://craft-exam.ddev.site/assets/Pinkdaisy.jpg",
        "https://craft-exam.ddev.site/assets/Purpledaisy.jpg"
      ],
      "colors": [
        {
          "name": "Red",
          "hex": "#ff2929"
        },
        {
          "name": "Pink",
          "hex": "#ff5dcd"
        },
        {
          "name": "Purple",
          "hex": "#991ef9"
        }
      ],
      "leaves": true,
      "price": "€1.50",
      "info": "Daisies are a very popular flower that can be found on every continent other than Antarctica. They belong to one of the largest known plant families and symbolized innocence, a connotation that comes from the Victorian era. Based on what color the daisy is, the flower can take on a different meaning. Daisy flowers prefer full sun and average soil conditions. Depending on the variety, they can grow anywhere from 8 inches to 4 feet. Care tip: Only water during the summer if rainfall is less than 1 inch per week.",
      "bloomingSeason": [
        {
          "label": "Spring",
          "value": "spring",
          "selected": true,
          "valid": true
        },
        {
          "label": "Summer",
          "value": "summer",
          "selected": true,
          "valid": true
        },
        {
          "label": "Fall",
          "value": "fall",
          "selected": true,
          "valid": true
        }
      ],
      "slug": "daisy",
      "id": 33
    },
    {
      "title": "Lavender",
      "pictures": [
        "https://craft-exam.ddev.site/assets/Purplelavender.jpg",
        "https://craft-exam.ddev.site/assets/Pinklavender.jpg",
        "https://craft-exam.ddev.site/assets/Whitelavender.jpg"
      ],
      "colors": [
        {
          "name": "Purple",
          "hex": "#991ef9"
        },
        {
          "name": "Pink",
          "hex": "#ff5dcd"
        },
        {
          "name": "White",
          "hex": "#ffffff"
        }
      ],
      "leaves": true,
      "price": "€3.50",
      "info": "Spanish, French, or English lavender are sweet herb garden favorites that provide soothing fragrances, flavorings, and beauty all together in little floral packages. More than 40 species are native to areas surrounding the Mediterranean and are semi-evergreen perennials or sub-shrubs with gray-green, hairy, linear leaves and purple, violet, lavender, or pinkish-white flowers. Tiny glands on the flowers, leaves, and stems of the plant produce the scented oil that is used in perfumes, bath preparations, lavender water, and in aromatherapy to relieve stress and anxiety and bring about sleep. Lavender is also prized as a flavoring in cooking, as an ingredient in teas, and for a monofloral honey.",
      "bloomingSeason": [
        {
          "label": "Summer",
          "value": "summer",
          "selected": true,
          "valid": true
        }
      ],
      "slug": "lavender",
      "id": 27
    },
    {
      "title": "Peony",
      "pictures": [
        "https://craft-exam.ddev.site/assets/Redpeony.webp",
        "https://craft-exam.ddev.site/assets/Pinkpeony.jpg",
        "https://craft-exam.ddev.site/assets/Whitepeony.webp"
      ],
      "colors": [
        {
          "name": "Red",
          "hex": "#ff2929"
        },
        {
          "name": "Pink",
          "hex": "#ff5dcd"
        },
        {
          "name": "White",
          "hex": "#ffffff"
        }
      ],
      "leaves": true,
      "price": "€5.00",
      "info": "Peonies, a beloved flower that blooms in late spring/early summer, come in a wide variety of colors. They range from white to red, coral, purple, pink, and yellow. These flowers make stunning centerpieces and work great in large bouquets. The key to growing a thriving peony is to make sure you plant it at the right time, plant correctly, and, of course, care for it all throughout the year, even when it isn’t necessarily in season. Since peonies can grow rather tall (sometimes as tall as 5 feet!), you’ll need to make sure that the spot you choose is spacious enough. And remember, peonies can come back year after year, so you’ll need to think long term.",
      "bloomingSeason": [
        {
          "label": "Spring",
          "value": "spring",
          "selected": true,
          "valid": true
        }
      ],
      "slug": "peony",
      "id": 31
    },
    {
      "title": "Hydrangea",
      "pictures": [
        "https://craft-exam.ddev.site/assets/Bluehydrangea.webp",
        "https://craft-exam.ddev.site/assets/Pinkhydrangea.jpg",
        "https://craft-exam.ddev.site/assets/Whitehydrangea.jpg"
      ],
      "colors": [
        {
          "name": "Blue",
          "hex": "#3b8aff"
        },
        {
          "name": "Pink",
          "hex": "#ff5dcd"
        },
        {
          "name": "White",
          "hex": "#ffffff"
        }
      ],
      "leaves": true,
      "price": "€2.00",
      "info": "You know summer is here when big, showy hydrangea bushes begin gracing gardens across the country. This perennial, a native of East Asia and the Americas, comprises more than 75 species and 600 cultivated varieties, of which mophead, lacecap, oakleaf, and peegee are the most common. Some hydrangea flowers can turn a pretty pink or blue depending on the acidity or alkalinity of the soil, while others will remain white. Mopheads, lacecaps, and oakleafs bloom on the previous year’s wood and can be pruned in the summer after flowering; peegees bloom on this year’s wood and can be pruned in the late winter, before the new spring growth.",
      "bloomingSeason": [
        {
          "label": "Spring",
          "value": "spring",
          "selected": true,
          "valid": true
        },
        {
          "label": "Summer",
          "value": "summer",
          "selected": true,
          "valid": true
        },
        {
          "label": "Fall",
          "value": "fall",
          "selected": true,
          "valid": true
        }
      ],
      "slug": "hydrangea",
      "id": 21
    },
    {
      "title": "Sunflower",
      "pictures": [
        "https://craft-exam.ddev.site/assets/Yellowsunflower.jpg",
        "https://craft-exam.ddev.site/assets/Orangesunflower.jpg",
        "https://craft-exam.ddev.site/assets/Redsunflower.webp"
      ],
      "colors": [
        {
          "name": "Yellow",
          "hex": "#fad02e"
        },
        {
          "name": "Orange",
          "hex": "#ff7a29"
        },
        {
          "name": "Red",
          "hex": "#ff2929"
        }
      ],
      "leaves": true,
      "price": "€2.50",
      "info": "Sunflowers are one of the most popular flower types and are best known for their dazzling yellow color and large size. They generally symbolize adoration, loyalty, and longevity in the language of flowers. Native Americans view sunflowers as a symbol of harvest and bounty since the flower provides seeds and pigments, in addition to being visually beautiful. Sunflowers need direct sunlight for six to eight hours per day and require hot conditions to flower well. Sunflowers also have long roots that require plenty of room to spread out, so soil should be well dug and not too dense for growth. Avoid over-fertilization or risk your stems breaking in the fall. In addition to being great in a garden, sunflowers make great gifts and look wonderful in bouquets.",
      "bloomingSeason": [
        {
          "label": "Summer",
          "value": "summer",
          "selected": true,
          "valid": true
        },
        {
          "label": "Fall",
          "value": "fall",
          "selected": true,
          "valid": true
        }
      ],
      "slug": "sunflower",
      "id": 15
    },
    {
      "title": "Rose",
      "pictures": [
        "https://craft-exam.ddev.site/assets/photo-2104734186.jpg",
        "https://craft-exam.ddev.site/assets/redrose_2024-01-10-155550_ociy.webp",
        "https://craft-exam.ddev.site/assets/Whiterose_2024-01-10-155558_dfsa.jpg"
      ],
      "colors": [
        {
          "name": "Pink",
          "hex": "#ff5dcd"
        },
        {
          "name": "Red",
          "hex": "#ff2929"
        },
        {
          "name": "White",
          "hex": "#ffffff"
        }
      ],
      "leaves": true,
      "price": "€1.50",
      "info": "Like the flower itself, the history of the rose is very colorful. Roses have been naturally growing for over 35 million years! However, they were not known to be cultivated until about 5,000 years ago. Their usage began not just as a decorative touch to one’s home, but they were also used for medicinal purposes and to make perfumes, and their petals were even used as confetti for festive occasions. Getting your roses into water quickly is the first step in caring for them. Fill a vase three-fourths full of fresh, cool tap water. The roses will absorb the water, soaking up the nutrients that will travel up to the bloom and create a lively flower. Check the water level in your rose’s vase every day and add more water as needed. Shop these classic flowers for Valentine’s Day!",
      "bloomingSeason": [
        {
          "label": "Spring",
          "value": "spring",
          "selected": true,
          "valid": true
        },
        {
          "label": "Summer",
          "value": "summer",
          "selected": true,
          "valid": true
        },
        {
          "label": "Fall",
          "value": "fall",
          "selected": true,
          "valid": true
        }
      ],
      "slug": "rose",
      "id": 2
    }
  ])
  const [vases, setVases] = useState([])

  const fetchFlowers = async () => {
    try {
      const response = await fetch(`${(Platform.OS == 'android') ? 'http://10.0.2.2' : 'http://craft-exam.ddev.site'}/api/flowers`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      });
      console.log(response.ok);
      const content = await response.json();
      setFlowers(content)
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    //fetchFlowers();
  }, [flowers]);

  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.name}>Floresco</Text>
      </View>

      <View style={styles.input}>
        <TextInput placeholder="Search for flowers" />
        <Image source={require('../assets/filter.png')} style={styles.filter} />
      </View>


      <FlatList
        style={styles.flatlist}
        data={flowers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <FlowerItem style={styles.flower}
            id={item.id}
            title={item.title}
            color={item.colors}
            leaves={item.leaves}
            price={item.price}
            info={item.info}
            bloomingSeason={item.bloomingSeason}
            navigation={navigation}
            onSelectFlower={(selectedId) => {
              navigation.navigate(
                'Information',
                { id: selectedId }
              )
            }}>
          </FlowerItem>
        )}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerContent} onPress={() => navigation.navigate('Likes')}>
          <Image source={require('../assets/heart.png')} style={styles.icon} />
          <Text style={styles.footerText}>Likes</Text>
        </TouchableOpacity>

        <View style={styles.footerContent}>
          <Image source={require('../assets/home.png')} style={styles.icon} />
          <Text style={styles.footerText}>Home</Text>
        </View>

        <TouchableOpacity style={styles.footerContent} onPress={() => navigation.navigate('Shopping Basket')}>
          <Image source={require('../assets/shopping_basket.png')} style={styles.icon} />
          <Text style={styles.footerText}>Basket</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#daedcb',
  },
  header: {
    backgroundColor: '#f9d2a5',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 50,
    height: 100,
  },
  name: {
    fontSize: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#F75590',
    borderRadius: 8,
    padding: 10,
    margin: 20,
    flex: 0,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatlist: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  filter: {
    width: 20,
    height: 15,
  },
  footer: {
    padding: 20,
    backgroundColor: '#fef3f7', // Footer background color
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  footerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
  footerText: {
    paddingLeft: 3,
    alignContent: 'center',
    fontSize: 16,
    color: '#30BCED',
  },
});

export default HomeScreen;

