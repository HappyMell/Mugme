import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  graphic: 1,
  emoticon: 2,
  special: 3,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCategory = (categoryUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[categoryUrlParam]
    )
  );

export const selectSpecial = (categoryUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find((collection) => collection.routeName === categoryUrlParam)
  );

export const selectItem = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find((collection) => collection.items)
  );

export const selectDescription = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find((collection) => collection.descriptionBottom)
  );
