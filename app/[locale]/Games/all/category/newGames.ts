
export const newGames = (t: (key: string) => string) => [
  { id: 4, title: t("luckyNeko.name"), provider: t("luckyNeko.provider"), image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733741045/307_hktb8i.png" ,category: "newGames"},
  { id: 12, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733741046/308_sjzvpd.png" ,category: "newGames" },
  { id: 20, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733741048/309_mt2gxf.png", category: "newGames" },
];
