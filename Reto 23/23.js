function organizeChristmasDinner(dishes) {
  const countIngredients = {};

  dishes.forEach(([meal, ...ingredients]) => {
    ingredients.forEach((ingredient) => {
      if (!countIngredients[ingredient]) {
        countIngredients[ingredient] = new Set();
      }
      countIngredients[ingredient].add(meal);
    });
  });

  return Object.entries(countIngredients)
    .filter(([_, v]) => v.size > 1)
    .sort()
    .map(([ingredient, meals]) => [ingredient, ...[...meals].sort()]);
}
