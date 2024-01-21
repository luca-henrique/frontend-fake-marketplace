export const formatterUrlImage = (image: string) => {
  const semColchetes = image.replace(/\[|\]/g, '');
  const semAspas = semColchetes.replace(/"/g, '');
  return semAspas
}