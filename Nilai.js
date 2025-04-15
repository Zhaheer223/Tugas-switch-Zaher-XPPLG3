let grade = [
    {grade: "A", nilai: "100"},
    {grade: "B", nilai: "90"},
    {grade: "C", nilai: "80"}
];

grade.forEach(function(item) {
    let hasilgrade = "";

    switch (item.grade) {
        case "A":
            hasilgrade = "nilai sangat baik";
            break;
        case "B":
            hasilgrade = "nilai baik";
            break;
        case "C":
            hasilgrade = "nilai cukup baik";
            break;
        default:
            hasilgrade = "nilai tidak diketahui";
    }

    console.log(`${item.grade} mendapat ${hasilgrade}`);
});
