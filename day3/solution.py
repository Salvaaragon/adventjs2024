TEST_CASES = [
    {
        "inventory": [
            {"name": "doll", "quantity": 5, "category": "toys"},
            {"name": "car", "quantity": 3, "category": "toys"},
            {"name": "ball", "quantity": 2, "category": "sports"},
            {"name": "car", "quantity": 2, "category": "toys"},
            {"name": "racket", "quantity": 4, "category": "sports"},
        ],
        "expectedResult": {
            "toys": {"doll": 5, "car": 5},
            "sports": {"ball": 2, "racket": 4},
        },
    },
    {
        "inventory": [
            {"name": "book", "quantity": 10, "category": "education"},
            {"name": "book", "quantity": 5, "category": "education"},
            {"name": "paint", "quantity": 3, "category": "art"},
        ],
        "expectedResult": {
            "education": {"book": 15},
            "art": {"paint": 3},
        },
    },
]


def organizeInventory(inventory):
    result = {}

    for item in inventory:
        category = item["category"]
        name = item["name"]
        quantity = item["quantity"]

        if category not in result:
            result[category] = {}

        if name not in result[category]:
            result[category][name] = 0

        result[category][name] += quantity

    return result


for data in TEST_CASES:
    inventory = data["inventory"]
    expected_result = data["expectedResult"]

    result = organizeInventory(inventory)

    assert result == expected_result, f"Test failed for {inventory}. Expected {expected_result}, but got {result}"

    print(f"Inventory: {inventory}")
    print(f"Result: {result}")
