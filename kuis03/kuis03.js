// 0 = Tidak Sesuai/ Salah
var banjir =  0;
var longsor = 0;
var pabrik = 0;

var LT= 800;
var LB= 400;

// 1 = Benar/ Sesuai
var kolam = 1;
var parkir= 1;
var kebun = 1;

//Kawasan
if(banjir == 0)
{
    console.log(" Tidak Rawan Banjir");
}
else
{
    console.log(" Rawan Banjir ");
}
if(longsor == 0)
{
    console.log(" Tidak Rawan Longsor");
}
else
{
    console.log(" Rawan Longsor ");
}
if(pabrik == 0)
{
    console.log(" Tidak Dekat Pabrik");
}
else
{
    console.log(" Dekat Dengan Pabrik ");
}

//Luas
if (LT == 800)
{
    console.log(" Sesuai Dengan Kriteria ");
}
else 
{
    console.log(" Tidak Sesuai Dengan Kriteria ");
}
if (LB == 400)
{
    console.log(" Sesuai Dengan Kriteria ");
}
else 
{
    console.log(" Tidak Sesuai Dengan Kriteria ");
}

//Fasilitas 
if (kolam == 1)
{
    console.log(" Fasilitas Sesuai ");
}
else
{
    console.log(" Tidak Sesuai ");
}
if (parkir == 1)
{
    console.log(" Fasilitas Sesuai ");
}
else
{
    console.log(" Tidak Sesuai ");
}
if (kebun == 1)
{
    console.log(" Fasilitas Sesuai ");
}
else
{
    console.log(" Tidak Sesuai ");
}