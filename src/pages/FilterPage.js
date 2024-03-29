import React from "react";
import SearchTags from "../components/SearchTags";
import { Grid, Button, Typography } from "@mui/material";
import SearchTopResult from "../components/SearchTopResult";
import SearchResults from "../components/SearchResults";
import FilterTags from "../components/FilterTags";
import { filterMovies } from "../redux/services/Movie";
const genres = [
  'Action',      'Adventure', 'Animation',
  'Biography',   'Comedy',    'Crime',
  'Documentary', 'Drama',     'Family',
  'Fantasy',     'Film-Noir', 'History',
  'Horror',      'Music',     'Musical',
  'Mystery',     'News',      'Romance',
  'Sci-Fi',      'Short',     'Sport',
  'Talk-Show',   'Thriller',  'War',
  'Western'
].map((genre) => ({ title: genre, value: genre }))



const languages = [
  ' Ancient (to 1453)',
  ' Old',
  'Abkhazian',
  'Aboriginal',
  'Acholi',
  'Afrikaans',
  'Aidoukrou',
  'Albanian',
  'Algonquin',
  'American Sign Language',
  'Amharic',
  'Apache languages',
  'Arabic',
  'Aramaic',
  'Arapaho',
  'Armenian',
  'Assamese',
  'Assyrian Neo-Aramaic',
  'Athapascan languages',
  'Awadhi',
  'Aymara',
  'Azerbaijani',
  'Balinese',
  'Bambara',
  'Basque',
  'Belarusian',
  'Bengali',
  'Berber languages',
  'Bhojpuri',
  'Bosnian',
  'Brazilian Sign Language',
  'Breton',
  'British Sign Language',
  'Bulgarian',
  'Burmese',
  'Cantonese',
  'Catalan',
  'Chechen',
  'Cheyenne',
  'Chinese',
  'Cornish',
  'Corsican',
  'Cree',
  'Creole',
  'Creoles and pidgins',
  'Croatian',
  'Crow',
  'Czech',
  'Danish',
  'Dari',
  'Dinka',
  'Dutch',
  'Dyula',
  'Dzongkha',
  'Eastern Frisian',
  'Egyptian (Ancient)',
  'English',
  'Esperanto',
  'Estonian',
  'Ewe',
  'Faroese',
  'Filipino',
  'Finnish',
  'Flemish',
  'French',
  'French Sign Language',
  'Frisian',
  'Fulah',
  'Fur',
  'Gallegan',
  'Georgian',
  'German',
  'German Sign Language',
  'Greek',
  'Greenlandic',
  'Guarani',
  'Gujarati',
  'Gumatj',
  'Haitian',
  'Hakka',
  'Hassanya',
  'Hawaiian',
  'Hebrew',
  'Hindi',
  'Hmong',
  'Hokkien',
  'Hungarian',
  'Ibo',
  'Icelandic',
  'Indian Sign Language',
  'Indonesian',
  'Inuktitut',
  'Inupiaq',
  'Irish',
  'Italian',
  'Japanese',
  'Japanese Sign Language',
  'Jola-Fonyi',
  'Kabuverdianu',
  'Kabyle',
  'Kannada',        'Karajè',                'Kazakh',
  'Khmer',          'Kikuyu',                'Kinyarwanda',
  'Kirghiz',        'Klingon',               'Konkani',
  'Korean',         'Korean Sign Language',  'Kuna',
  'Kurdish',        'Ladakhi',               'Ladino',
  'Lao',            'Latin',                 'Latvian',
  'Lingala',        'Lithuanian',            'Low German',
  'Luxembourgish',  'Macedonian',            'Malay',
  'Malayalam',      'Maltese',               'Mandarin',
  'Manipuri',       'Maori',                 'Mapudungun',
  'Marathi',        'Mari',                  'Masai',
  'Maya',           'Mende',                 'Middle English',
  'Min Nan',        'Mohawk',                'Mongolian',
  'More',           'Nahuatl',               'Nama',
  'Navajo',         'Neapolitan',            'Nenets',
  'Nepali',         'Norse',                 'North American Indian',
  'Norwegian',      'Nyaneka',               'Nyanja',
  'Occitan',        'Old English',           'Oriya',
  'Panjabi',        'Pawnee',                'Persian',
  'Peul',           'Polish',                'Portuguese',
  'Purepecha',      'Pushto',                'Quechua',
  'Quenya',         'Rajasthani',            'Romanian',
  'Romany',         'Russian',               'Russian Sign Language',
  'Ryukyuan',       'Saami',                 'Samoan',
  'Sanskrit',       'Sardinian',             'Scanian',
  'Scots',          'Scottish Gaelic',       'Serbian',
  'Serbo-Croatian', 'Shanghainese',          'Shanxi',
  'Shona',          'Shoshoni',              'Sicilian',
  'Sign Languages', 'Sindarin',              'Sinhalese',
  'Sioux',          'Slovak',                'Slovenian',
  'Somali',         'Songhay',               'Southern Sotho',
  'Spanish',        'Spanish Sign Language', 'Swahili',
  'Swedish',        'Swiss German',          'Syriac',
  'Tagalog',
  'Tajik',     'Tamil',      'Tarahumara',
  'Tatar',     'Telugu',     'Thai',
  'Tibetan',   'Tigrigna',   'Tok Pisin',
  'Tonga',     'Tswana',     'Tulu',
  'Tupi',      'Turkish',    'Turkmen',
  'Tuvinian',  'Tzotzil',    'Uighur',
  'Ukrainian', 'Ungwatsi',   'Urdu',
  'Uzbek',     'Vietnamese', 'Visayan',
  'Washoe',    'Welsh',      'Wolof',
  'Xhosa',     'Yiddish',    'Yoruba',
  'Zulu'
].map((language) => ({ title: language, value: language }))

const imdbRating = [
  'Above 9',
  'Between 8 and 9',
  'Between 7 and 8',
  'Between 6 and 7',
  'Between 5 and 6',
  'Between 4 and 5',
  'Between 3 and 4',
  'Between 2 and 3',
  'Between 1 and 2',
  'Below 1'
  ].map((rating, index) => ({ title: rating, value: 9-index }))

const FilterPage = () => {
  const [data, setData] = React.useState({genres: [], languages: []})
  const [filteredMovies, setFilteredMovies] = React.useState([])
  const handleChange = (option,title) => {
    console.log(option,title)
    setData((prev) => {
      const next = {
        ...prev,
        [title.toLowerCase()]: option.map((item) => item.value)
      }
      return next
    })
  }
  const handleChangeRating = (option,title) => {
    setData((prev) => {
      const next = {
        ...prev,
        rating: option.value
      }
      console.log(next)
      return next
    })
  }
  const handleClick = async(e) => {
    console.log("Inside Click")
    console.log(data)
    const filteredMovie = await filterMovies(data)
    setFilteredMovies(filteredMovie)
    console.log(filteredMovie)
  }
  return (
    <Grid
      container
      spacing={2}
      sx={{
        pl: {
          xs: "5vw",
          md: "10vw",
        },
        pr: {
          xs: "5vw",
          md: "5vw",
        },
        pt: {
          xs: "1vh",
          md: "10vh",
        },
        m: 0,
        width: "100%",
      }}
    >
      <Grid item xs={12} md={3} sx={{ p: 0, mt: 2 }}>
        <FilterTags data={genres} title={"Genres"} handleChange={handleChange} multiple={true}/>
      </Grid>
      <Grid item xs={12} md={3} sx={{ p: 0, mt: 2 }}>
        <FilterTags data={languages} title={"Languages"} handleChange={handleChange} multiple={true}/>
      </Grid>
      <Grid item xs={12} md={3} sx={{ p: 0, mt: 2 }}>
        <FilterTags data={imdbRating} title={"Rating"} handleChange={handleChangeRating} multiple={false}/>
      </Grid>
      <Grid item xs={12} md={3} sx={{ p: 0, mt: 2 }}>
        <Button className="bg-slate-700/50 rounded-full px-6 py-3 mx-3 hover:bg-slate-300/75" onClick={handleClick}>
            <Typography className="text-gray-200 font-medium">
                Filter
            </Typography>
        </Button>
      </Grid>
            <Grid item xs={12} sx={{ p: 0 }}>
        {filterMovies && filterMovies.length > 0 && <SearchResults data={filteredMovies} />}
      </Grid>
    </Grid>
  );
};

export default FilterPage;
