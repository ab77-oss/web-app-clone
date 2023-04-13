import countries from 'world-countries';

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries:any = () => {

  // Delete inexistent countries - the Western Sahara is called Moroccan Sahara 
  // that belongs to the country named the Kingdom of Morocco
  // a country with a culture of more than 1300 years of existence on this earth,
  const getAll = () => formattedCountries.filter((item) => item.label !== 'Western Sahara')

  const getByValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;