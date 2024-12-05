type Inventory = Array<{ name: string; quantity: number; category: string }>;

function organizeInventory(inventory: Inventory): object {
  return inventory.reduce((result, { category, name, quantity }) => {
    result[category] ||= {};
    result[category][name] = result[category][name] ||= 0;
    result[category][name] += quantity;
    return result;
  }, {});
}
