
// IDEAL
else if (
    TBKonklusi == "IDEAL" &&
    BBKonklusi == "IDEAL" &&
    data[i].JENIS_KELAMIN == 1
) {
    data[i].status = "TIDAK_BERESIKO";
}
else if (
    TBKonklusi == "IDEAL" &&
    BBKonklusi == "IDEAL" &&
    data[i].JENIS_KELAMIN == 0
) {
    data[i].status = "TIDAK_BERESIKO";
}
else if (
    TBKonklusi == "IDEAL" &&
    BBKonklusi == "IDEAL_RATA_RATA" &&
    data[i].JENIS_KELAMIN == 1
) {
    data[i].status = "TIDAK_BERESIKO";
}
else if (
    TBKonklusi == "IDEAL" &&
    BBKonklusi == "IDEAL_RATA_RATA" &&
    data[i].JENIS_KELAMIN == 0
) {
    data[i].status = "TIDAK_BERESIKO";
}
else if (
    TBKonklusi == "IDEAL" &&
    BBKonklusi == "TIDAK_IDEAL_RATA_RATA" &&
    data[i].JENIS_KELAMIN == 1
) {
    data[i].status = "BERESIKO_RENDAH";
}
else if (
    TBKonklusi == "IDEAL" &&
    BBKonklusi == "TIDAK_IDEAL_RATA_RATA" &&
    data[i].JENIS_KELAMIN == 0
) {
    data[i].status = "BERESIKO_RENDAH";
}
else if (
    TBKonklusi == "IDEAL" &&
    BBKonklusi == "TIDAK_IDEAL" &&
    data[i].JENIS_KELAMIN == 1
) {
    data[i].status = "BERESIKO_RENDAH";
}
else if (
    TBKonklusi == "IDEAL" &&
    BBKonklusi == "TIDAK_IDEAL" &&
    data[i].JENIS_KELAMIN == 0
) {
    data[i].status = "BERESIKO_RENDAH";
}


// IDEAL RATA-RATA
else if (
    TBKonklusi == "IDEAL_RATA_RATA" &&
    BBKonklusi == "IDEAL" &&
    data[i].JENIS_KELAMIN == 1
) {
    data[i].status = "TIDAK_BERESIKO";
}
else if (
    TBKonklusi == "IDEAL_RATA_RATA" &&
    BBKonklusi == "IDEAL" &&
    data[i].JENIS_KELAMIN == 0
) {
    data[i].status = "TIDAK_BERESIKO";
}
else if (
    TBKonklusi == "IDEAL_RATA_RATA" &&
    BBKonklusi == "IDEAL_RATA_RATA" &&
    data[i].JENIS_KELAMIN == 1
) {
    data[i].status = "TIDAK_BERESIKO";
}
else if (
    TBKonklusi == "IDEAL_RATA_RATA" &&
    BBKonklusi == "IDEAL_RATA_RATA" &&
    data[i].JENIS_KELAMIN == 0
) {
    data[i].status = "TIDAK_BERESIKO";
}
else if (
    TBKonklusi == "IDEAL_RATA_RATA" &&
    BBKonklusi == "TIDAK_IDEAL_RATA_RATA" &&
    data[i].JENIS_KELAMIN == 1
) {
    data[i].status = "TIDAK_BERESIKO";
}
else if (
    TBKonklusi == "IDEAL_RATA_RATA" &&
    BBKonklusi == "TIDAK_IDEAL_RATA_RATA" &&
    data[i].JENIS_KELAMIN == 0
) {
    data[i].status = "BERESIKO_RENDAH";
}
else if (
    TBKonklusi == "IDEAL_RATA_RATA" &&
    BBKonklusi == "TIDAK_IDEAL" &&
    data[i].JENIS_KELAMIN == 1
) {
    data[i].status = "BERESIKO_RENDAH";
}
else if (
    TBKonklusi == "IDEAL_RATA_RATA" &&
    BBKonklusi == "TIDAK_IDEAL" &&
    data[i].JENIS_KELAMIN == 0
) {
    data[i].status = "BERESIKO_TINGGI";
}