import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);

export const selectHomepageSections = createSelector(
  [selectDirectory],
  (directory) => directory.homePageCollections
);

export const selectParallax = createSelector(
  [selectDirectory],
  (directory) => directory.homepageParallax
);

export const selectEmoticonCollections = createSelector(
  [selectDirectory],
  (directory) => directory.emotionCollections
);

export const selectMugParallax = createSelector(
  [selectDirectory],
  (directory) => directory.happyMugParallax
);

export const selectBackgroundVideo = createSelector(
  [selectDirectory],
  (directory) => directory.backgroundVideo
);

export const selectSubscribe = createSelector(
  [selectDirectory],
  (directory) => directory.subscribe
);

export const selectFeatures = createSelector(
  [selectDirectory],
  (directory) => directory.features
);
