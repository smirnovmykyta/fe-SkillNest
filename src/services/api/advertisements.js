import mockAdvertisments from "../../mock/advertisements";

// GET
// /advertisement (getAllAdvertisement)
// /advertisement (getAllAdvertisement(mit Body => filter, string from searchinput ))
export function getAllAdvertisements() {
  return mockAdvertisments;
}

// /advertisement/:id (getAdvertisementById)
export function getAdvertisementById(id) {
  return mockAdvertisments.find((ad) => id === ad._id);
}

// /advertisement/user/:id (getAllAdvertisementByUserId)
export function getAllAdvertisementsByUserId(userId) {
  return mockAdvertisments.filter((ad) => userId === ad.userId);
}

// POST11
// /advertisement (createAdvertisement)
export function createAdvertisement(ad) {
  throw new Exception("not implemented");
}

// PUT
// /advertisement/:id (updateAdvertisement
export function updateAdvertisement(id, ad) {
  throw new Exception("not implemented");
}

// DELETE
// /advertisement/:id (deleteAdvertisement)
export function deleteAdvertisement(id) {
  throw new Exception("not implemented");
}
