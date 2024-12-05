TEST_CASES = [
    {
        "names": ["midu", "madeval", "educalvolpz"],
        "expectedResult": "***************\n* midu        *\n* madeval     *\n* educalvolpz *\n***************",
    },
    {
        "names": ["midu"],
        "expectedResult": "********\n* midu *\n********",
    },
    {
        "names": ["a", "bb", "ccc"],
        "expectedResult": "*******\n* a   *\n* bb  *\n* ccc *\n*******",
    },
    {
        "names": ["a", "bb", "ccc", "dddd"],
        "expectedResult": "********\n* a    *\n* bb   *\n* ccc  *\n* dddd *\n********",
    },
]


def createFrame(names):
    longest_name = max(names, key=len)
    longest_name_length = len(longest_name)

    border = "*" * (longest_name_length + 4)

    def get_name_string(name):
        return f"* {name}{' ' * (longest_name_length - len(name))} *"

    frame = [border] + [get_name_string(name) for name in names] + [border]

    return "\n".join(frame)


for data in TEST_CASES:
    names = data["names"]
    expected_result = data["expectedResult"]

    result = createFrame(names)

    assert result == expected_result, f"Test failed for {names}. Expected {expected_result}, but got {result}"

    print(f"Names: {names}")
    print(result)
