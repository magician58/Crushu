function goToPage2() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
}

function goToPage3() {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
}

function goToPage4() {
    document.getElementById('page3').classList.add('hidden');
    document.getElementById('page4').classList.remove('hidden');
}

function showYesNo() {
    document.getElementById('page4').classList.add('hidden');
    document.getElementById('popup').classList.remove('hidden');
}

function goToPage5() {
    document.getElementById('popup').classList.add('hidden');
    document.getElementById('page5').classList.remove('hidden');
}

function goToPage6() {
    document.getElementById('page5').classList.add('hidden');
    document.getElementById('page6').classList.remove('hidden');
}
