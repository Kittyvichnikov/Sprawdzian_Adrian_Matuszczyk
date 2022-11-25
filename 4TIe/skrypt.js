function oblicz(){
    var a1=document.getElementById("a1").value;
    var an=document.getElementById("an").value;
    var n=document.getElementById("n").value;
    wynik = (an -a1)/(n-1);
    document.getElementById("wynik").value=wynik;
}