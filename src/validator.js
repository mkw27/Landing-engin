export function validate(p) {
  if (!p) throw new Error("Missing product");

  const req = ["brand", "name", "description", "images", "tallyUrl"];

  req.forEach(f => {
    if (!p[f]) throw new Error("Missing " + f);
  });

  if (!Array.isArray(p.images))
    throw new Error("Images must be array");

  if (p.images.length < 1)
    throw new Error("At least 1 image required");

  if (p.images.length > 5)
    throw new Error("Max 5 images allowed");

  p.images.forEach(i => {
    if (!i.startsWith("assets/"))
      throw new Error("Invalid image path");
  });
}
