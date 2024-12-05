TEST_CASES = [
    {
        "height": 5,
        "ornament": "*",
        "expectedResult": "____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____",
    },
    {
        "height": 3,
        "ornament": "+",
        "expectedResult": "__+__\n_+++_\n+++++\n__#__\n__#__",
    },
    {
        "height": 6,
        "ornament": "@",
        "expectedResult": "_____@_____\n____@@@____\n___@@@@@___\n__@@@@@@@__\n_@@@@@@@@@_\n@@@@@@@@@@@\n_____#_____\n_____#_____",
    },
]


def createXmasTree(height, ornament):
    SPACE_CHAR = "_"
    TRUNK_CHAR = "#"
    base_spaces = SPACE_CHAR * (height - 1)
    base = base_spaces + TRUNK_CHAR + base_spaces
    tree = []

    for idx in range(height - 1, -1, -1):
        sheets = ornament * (2 * idx + 1)
        spaces = SPACE_CHAR * (height - 1 - idx)
        branch = spaces + sheets + spaces
        tree.insert(0, branch)

    return "\n".join(tree + [base, base])


for data in TEST_CASES:
    height = data["height"]
    ornament = data["ornament"]
    expected_result = data["expectedResult"]

    result = createXmasTree(height, ornament)

    assert result == expected_result, f"Test failed for {height} and {ornament}. Expected {expected_result}, but got {result}"

    print(f"Height: {height}, Ornament: {ornament}")
    print(result)
