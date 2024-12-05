TEST_CASES = [
    {
        "shoes": [
            {"type": "I", "size": 38},
            {"type": "R", "size": 38},
            {"type": "R", "size": 42},
            {"type": "I", "size": 41},
            {"type": "I", "size": 42},
        ],
        "expectedResult": [38, 42],
    },
    {
        "shoes": [
            {"type": "I", "size": 38},
            {"type": "R", "size": 38},
            {"type": "I", "size": 38},
            {"type": "I", "size": 38},
            {"type": "R", "size": 38},
        ],
        "expectedResult": [38, 38],
    },
    {
        "shoes": [
            {"type": "I", "size": 38},
            {"type": "R", "size": 36},
            {"type": "I", "size": 42},
            {"type": "I", "size": 41},
            {"type": "I", "size": 42},
        ],
        "expectedResult": [],
    },
    {
        "shoes": [
            {"type": "I", "size": 35},
            {"type": "R", "size": 35},
            {"type": "I", "size": 35},
            {"type": "R", "size": 35},
            {"type": "I", "size": 35},
            {"type": "R", "size": 35},
        ],
        "expectedResult": [35, 35, 35],
    },
]


def organizeShoes(shoes):
    counter = {}
    result = []

    for shoe in shoes:
        size, type_ = shoe["size"], shoe["type"]

        if size not in counter:
            counter[size] = {"I": 0, "R": 0}

        counter[size][type_] += 1

        if counter[size]["I"] and counter[size]["R"]:
            result.append(size)
            counter[size]["I"] -= 1
            counter[size]["R"] -= 1

    return result


for data in TEST_CASES:
    shoes = data["shoes"]
    expected_result = data["expectedResult"]

    result = organizeShoes(shoes)

    assert result == expected_result, f"Test failed for {shoes}. Expected {expected_result}, but got {result}"

    print(f"Shoes: {shoes}")
    print(f"Result: {result}")
