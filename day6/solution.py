TEST_CASES = [
    {
        "box": ["###", "#*#", "###"],
        "expectedResult": True,
    },
    {
        "box": ["####", "#* #", "#  #", "####"],
        "expectedResult": True,
    },
    {
        "box": ["#####", "#   #", "#  #*", "#####"],
        "expectedResult": False,
    },
    {
        "box": ["#####", "#   #", "#   #", "#   #", "#####"],
        "expectedResult": False,
    },
    {
        "box": ["#####", "#   #", "##*#"],
        "expectedResult": False,
    },
]


def in_box(box):
    giftInsideBox = True
    boxIncludesGift = False

    for idx, row in enumerate(box):
        giftIdx = row.find("*")

        if (giftIdx != -1):
            boxIncludesGift = True
            isFirstOrLastChar = giftIdx in [0, len(row) - 1]
            isFirstOrLastRow = idx in [0, len(box) - 1]
            giftInsideBox = not (isFirstOrLastChar or isFirstOrLastRow)

    return giftInsideBox and boxIncludesGift


for data in TEST_CASES:
    box = data["box"]
    expected_result = data["expectedResult"]

    result = in_box(box)

    assert result == expected_result, f"Test failed for {box}. Expected {expected_result}, but got {result}"

    print(f"Box: {box}")
    print(f"Result: {result}")
