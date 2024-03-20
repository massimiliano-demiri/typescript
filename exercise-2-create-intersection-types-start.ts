interface Country {
    name: string;
    code: string;
}

interface CountryStatistics {
    population: number;
}

interface CountryLanguages {
    languages: string[];
}

// Intersection type of Country and CountryLanguages
type CountryWithLanguages = Country & CountryLanguages;

const countryA: CountryWithLanguages = {
    name: "Greece",
    code: "GR",
    languages: ["Greek"]
};

// Intersection type of Country and CountryStatistics
type CountryWithStatistics = Country & CountryStatistics;

// Annotating countryB variable with the type CountryWithStatistics
const countryB: CountryWithStatistics = {
    name: "China",
    code: "CN",
    pop
