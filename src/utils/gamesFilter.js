export const gamesFilter = (data) => {
  const tagsFilter = data.results.filter((item) => {
    if (!item.tags) {
      return item;
    }

    return item.tags.every(
      (tag) =>
        tag.slug !== "nsfw" &&
        tag.slug !== "hentai" &&
        tag.slug !== "eroge" &&
        tag.slug !== "erotic" &&
        tag.slug !== "transgender" &&
        tag.slug !== "porn" &&
        tag.slug !== "rape" &&
        tag.slug !== "your-mom"
    );
  });

  const platformFilter = tagsFilter.filter((item) =>
    item.parent_platforms.every(
      (platform) =>
        platform.platform.slug !== "commodore-amiga" &&
        platform.platform.slug !== "atari-7800" &&
        platform.platform.slug !== "atari-5200" &&
        platform.platform.slug !== "atari-2600" &&
        platform.platform.slug !== "atari-flashback" &&
        platform.platform.slug !== "atari-8-bit" &&
        platform.platform.slug !== "atari-st"
    )
  );

  const slugFilter = platformFilter.filter(
    (item) =>
      item.slug !== "slappy-ass" && item.slug !== "muhammad-sex-simulator-2015"
  );
  return slugFilter;
};
