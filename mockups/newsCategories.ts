type Category = {
  key: NewsCategoryType;
  name: string;
};

type Categories = {
  [key in NewsCategoryType]: Category;
};

export const newsCategories: Categories = {
  broadcast: {
    key: "broadcast",
    name: "Трансляція",
  },
  anons: {
    key: "anons",
    name: "Анонс",
  },
  report: {
    key: "report",
    name: "Звіт",
  },
};
