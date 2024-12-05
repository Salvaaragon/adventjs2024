TEST_CASES = [
    {
        "gifts": [3, 1, 2, 3, 4, 2, 5],
        "expectedResult": [1, 2, 3, 4, 5],
    },
    {
        "gifts": [6, 5, 5, 5, 5],
        "expectedResult": [5, 6],
    },
    {
        "gifts": [],
        "expectedResult": [],
    },
]


def prepare_gifts(gifts):
    return sorted(set(gifts))


for data in TEST_CASES:
    gifts = data["gifts"]
    expected_result = data["expectedResult"]

    result = prepare_gifts(gifts)

    assert result == expected_result, f"Test failed for gifts: {gifts}. Expected {expected_result}, but got {result}"
    print(f"Gifts: {gifts}, Result: {result}")
