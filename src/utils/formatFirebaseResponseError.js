export function formatFirebaseResponseError(errorCode) {
  let parts = errorCode.split("/");
  parts.shift();
  return parts.join(" ").replace(/-/g, " ");
}
